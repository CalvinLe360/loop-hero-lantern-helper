import { defineStore, storeToRefs } from "pinia";
import { GridCellType } from "@/components";
import { getAdjacentCells, getSurroundingCells, isRoad } from "@/mechanics";
import { MessageType, useGridStore, useMessageOutputStore, usePaintStore, } from ".";
import type { GridCell, GridCellLanternInfo } from "@/components";
import { useErrorStore } from "./error";
import { useSettingsStore } from "./settings";

export const useLanternCalculationStore = defineStore('lanternCalculation', () => {
    const gridStore = useGridStore()
    const messageOutput = useMessageOutputStore()
    const errorStore = useErrorStore()
    const paintStore = usePaintStore()
    const { grid } = storeToRefs(gridStore)
    const { requiredLanternsPerRoad, replaceUnsuitableRoadsWithVillages, overrideSideroadSpots } = storeToRefs(useSettingsStore())

    function calculateLanterns() {
        if (!validateGridPath()) {
            return null
        }

        const sidepathCells = findSidepathCells()
        if (!validateLanternSuitability(sidepathCells)) {
            return null
        }

        errorStore.clear()

        const lanternInfoGrid: GridCellLanternInfo[][] = grid.value.map(row => row.map<GridCellLanternInfo>(cell => ({
            ...cell,
            neededLanterns: cell.type == GridCellType.Road ? requiredLanternsPerRoad.value : 0,
            lanternImportance: sidepathCells.has(cell) ? initialiseLanternImportance(cell) : 0
        })))

        const lanternsPlaced: GridCellLanternInfo[] = []

        const path = [gridStore.findCampfire()!.cell]
        while (path[path.length - 1].type != GridCellType.Campfire || path.length <= 1) {
            const nextCell = getAdjacentCells(grid.value, path[path.length - 1]).find(cell => isRoad(cell) && cell != path[path.length - 2])!

            const lanternSpots = getSurroundingCells(grid.value, nextCell).filter(cell => sidepathCells.has(cell)).map(cell => lanternInfoGrid[cell.row][cell.col]).shuffle().sort(lanternImportanceSort).slice(0, lanternInfoGrid[nextCell.row][nextCell.col].neededLanterns)

            for (const lantern of lanternSpots) {
                const affectedRoads = getSurroundingCells(grid.value, grid.value[lantern.row][lantern.col]).filter(cell => cell.type == GridCellType.Road).map(cell => lanternInfoGrid[cell.row][cell.col])

                for (const road of affectedRoads) {
                    road.neededLanterns--;
                    if (road.neededLanterns == 0) {
                        getSurroundingCells(grid.value, grid.value[road.row][road.col]).map(lantern => lanternInfoGrid[lantern.row][lantern.col]).forEach(lantern => lantern.lanternImportance--)
                    }
                }

                sidepathCells.delete(grid.value[lantern.row][lantern.col])
                lanternsPlaced.push(lantern)
            }

            path.push(nextCell)
        }

        return {
            lanterns: lanternsPlaced.map(cell => grid.value[cell.row][cell.col]),
            extra: Array.from(sidepathCells.values())
        }
    }

    function validateGridPath() {
        const campfire = gridStore.findCampfire()
        if (!campfire) {
            messageOutput.setMessage({
                type: MessageType.Error,
                message: 'No campfire! Where is our hero going to start?'
            })
            return false
        }

        const path: GridCell[] = [campfire.cell]

        let failed = false
        while (!failed) {
            const currentCell = path[path.length - 1]
            let currentNext: GridCell | null = null
            const nextCells = getAdjacentCells(grid.value, currentCell)

            for (const nextCell of Object.values(nextCells)) {
                if (nextCell == path[path.length - 2]) continue
                if (!isRoad(nextCell)) continue;

                if (currentNext) {
                    failed = true
                    errorStore.set(currentCell)
                    messageOutput.setMessage({
                        type: MessageType.Error,
                        message: `Encountered a branching path at (${currentCell.row}, ${currentCell.col}). There should only be one path.`
                    })
                    break
                }

                currentNext = nextCell

                if (nextCell.type == GridCellType.Campfire) {
                    if (nextCell != path[0]) {
                        failed = true
                        errorStore.set(nextCell)
                        messageOutput.setMessage({
                            type: MessageType.Error,
                            message: `Another campfire detected at (${nextCell.row},${nextCell.col}). How did you manage that? Only one please.`
                        })
                    }
                }

                if (currentCell.type == GridCellType.Campfire) {
                    break
                }
            }

            if (!currentNext) {
                failed = true
                errorStore.set(currentCell)
                messageOutput.setMessage({
                    type: MessageType.Error,
                    message: `Dead-end detected at (${currentCell.row},${currentCell.col}). Please connect the path back to the campfire.`
                })
                break
            }

            path.push(currentNext)
            if (currentNext == path[0]) break
        }

        if (!failed) {
            const pathCells = new Set(path)
            for (const row of grid.value) {
                for (const cell of row) {
                    if ((cell.type == GridCellType.Road || cell.type == GridCellType.Campfire) && !pathCells.has(cell)) {
                        errorStore.set(cell)
                        messageOutput.setMessage({
                            type: MessageType.Error,
                            message: `Unconnected road cell detected at (${cell.row},${cell.col}). Remove this or integrate this cell.`
                        })
                        return false
                    }
                }
            }
        }

        return !failed
    }

    function validateLanternSuitability(validLanternSpots: Set<GridCell>) {
        for (const row of grid.value) {
            for (const cell of row) {
                if (cell.type != GridCellType.Road) continue

                const surroundingCells = getSurroundingCells(grid.value, cell)
                const availableLanternSpots = surroundingCells.reduce((acc, cell) => {
                    return acc + (validLanternSpots.has(cell) ? 1 : 0)
                }, 0)

                if (availableLanternSpots < requiredLanternsPerRoad.value) {
                    if (replaceUnsuitableRoadsWithVillages.value) {
                        paintStore.paint(cell, GridCellType.Village)
                    }
                    else {
                        errorStore.set(cell)
                        messageOutput.setMessage({
                            type: MessageType.Error,
                            message: `Road at (${cell.row}, ${cell.col}) has only ${availableLanternSpots} spot${availableLanternSpots == 1 ? '' : 's'} to place lanterns. This map is not suitable for resource farming.`
                        })
                        return false
                    }
                }
            }
        }

        return true
    }

    function findSidepathCells() {
        const cells = new Set<GridCell>()

        for (const row of grid.value) {
            for (const cell of row) {
                if (isRoad(cell)) {
                    getAdjacentCells(grid.value, cell).forEach(cell => {
                        if (!isRoad(cell) && (overrideSideroadSpots.value || cell.type == GridCellType.None)) {
                            cells.add(cell)
                        }
                    })
                }
            }
        }

        return cells
    }

    function initialiseLanternImportance(cell: GridCell) {
        return getSurroundingCells(grid.value, cell).reduce((acc, currentCell) => {
            return acc + (currentCell.type == GridCellType.Road ? 1 : 0)
        }, 0)
    }

    function lanternImportanceSort(a: GridCellLanternInfo, b: GridCellLanternInfo) {
        return b.lanternImportance - a.lanternImportance
    }

    return { calculateLanterns }
})