import { ref } from "vue";
import { defineStore } from "pinia";
import { GridCellType, type GridCell } from "@/components/types";
import { useErrorStore, useGridStore } from ".";

export const usePaintStore = defineStore('paint', () => {
    const gridStore = useGridStore()
    const errorStore = useErrorStore()
    const currentTile = ref(GridCellType.Road)

    function select(type: GridCellType) {
        currentTile.value = type
    }

    function colourIn(cell: GridCell) {
        if (cell.type != currentTile.value) {
            errorStore.clear()
        }

        switch (currentTile.value) {
            case GridCellType.Campfire:
                if (cell.type == GridCellType.Road) {
                    const otherCampfire = gridStore.findCampfire()
                    if (otherCampfire) {
                        otherCampfire.cell.type = GridCellType.Road
                    }
                    cell.type = currentTile.value
                }
                break
            default:
                cell.type = currentTile.value
                break
        }
    }

    function erase(cell: GridCell) {
        cell.type = GridCellType.None
    }

    return { currentTile, select, colourIn, erase }
})