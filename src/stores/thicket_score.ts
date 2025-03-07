import { defineStore } from "pinia";
import { ref } from "vue";
import { useEventStore } from "./events";
import { Event } from "./types";
import { useGridStore } from "./grid";
import { GridCellType, type GridCell } from "@/components";

const THICKET_SCORES = [2, 4, 8, 12, 16]

export const useThicketScoreStore = defineStore('thicketScore', () => {
    const eventStore = useEventStore()
    const gridStore = useGridStore()

    const score = ref(0)

    eventStore.subscribe(Event.ClearProps, () => {
        score.value = 0
    })

    eventStore.subscribe(Event.Reset, () => {
        score.value = 0
    })

    const direction = [0, 1, 0, -1, 0]
    function numAdjacentCellsOfType(cell: GridCell, type: GridCellType) {
        let total = 0
        for (let i = 0; i < 4; i++) {
            const [newRow, newCol] = [cell.row + direction[i], cell.col + direction[i + 1]]
            const adjCell = gridStore.getCellAt(newRow, newCol)
            if (adjCell && adjCell.type == type) {
                total++;
            }
        }
        return total
    }

    eventStore.subscribe(Event.Paint, ({ cell, prevType }) => {
        switch (cell.type) {
            case GridCellType.Thicket:
                score.value += THICKET_SCORES[numAdjacentCellsOfType(cell, GridCellType.River)]
                break
            case GridCellType.River:
                for (let i = 0; i < 4; i++) {
                    const [newRow, newCol] = [cell.row + direction[i], cell.col + direction[i + 1]]
                    const adjCell = gridStore.getCellAt(newRow, newCol)
                    if (adjCell && adjCell.type == GridCellType.Thicket) {
                        const numRivers = numAdjacentCellsOfType(adjCell, GridCellType.River)
                        score.value += THICKET_SCORES[numRivers] - THICKET_SCORES[numRivers - 1]
                    }
                }
                break
        }

        switch (prevType) {
            case GridCellType.Thicket:
                score.value -= THICKET_SCORES[numAdjacentCellsOfType(cell, GridCellType.River)]
                break
            case GridCellType.River:
                for (let i = 0; i < 4; i++) {
                    const [newRow, newCol] = [cell.row + direction[i], cell.col + direction[i + 1]]
                    const adjCell = gridStore.getCellAt(newRow, newCol)
                    if (adjCell && adjCell.type == GridCellType.Thicket) {
                        const numRivers = numAdjacentCellsOfType(adjCell, GridCellType.River)
                        score.value += THICKET_SCORES[numRivers] - THICKET_SCORES[numRivers + 1]
                    }
                }
                break
        }
    })

    return {
        score
    }
})