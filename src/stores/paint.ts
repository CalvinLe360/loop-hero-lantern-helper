import { ref } from "vue";
import { defineStore } from "pinia";
import { GridCellType, type GridCell } from "@/components/types";
import { Event, useErrorStore, useGridStore } from ".";
import { useEventStore } from "./events";

export const usePaintStore = defineStore('paint', () => {
    const gridStore = useGridStore()
    const errorStore = useErrorStore()
    const eventStore = useEventStore()
    const currentTile = ref(GridCellType.Road)

    function select(type: GridCellType) {
        currentTile.value = type
    }

    function colourIn(cell: GridCell) {
        paint(cell, currentTile.value)
    }

    function paint(cell: GridCell, type: GridCellType) {
        const prevType = cell.type

        if (cell.type != type) {
            errorStore.clear()
        }

        switch (type) {
            case GridCellType.Campfire:
                if (cell.type == GridCellType.Road) {
                    const otherCampfire = gridStore.findCampfire()
                    if (otherCampfire) {
                        otherCampfire.cell.type = GridCellType.Road
                    }
                    cell.type = type
                }
                break
            default:
                cell.type = type
                break
        }

        if (cell.type != prevType) {
            eventStore.trigger(Event.Paint, { cell, prevType })
        }
    }

    function erase(cell: GridCell) {
        const prevType = cell.type

        cell.type = GridCellType.None

        if (cell.type != prevType) {
            eventStore.trigger(Event.Paint, { cell, prevType })
        }
    }

    return { currentTile, select, colourIn, paint, erase }
})