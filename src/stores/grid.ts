import { ref } from "vue";
import { defineStore } from "pinia";
import { Layouts } from "@/components/constants";
import { GridCellType } from '@/components'
import type { GridLayout, GridCell, } from "@/components/types";

export const useGridStore = defineStore('grid', () => {
    const grid = ref<GridLayout>([])

    function reset() {
        const currentLayout = Layouts.Default;
        grid.value = currentLayout.map((row, rowIndex) =>
            row.map<GridCell>((cellType, colIndex) => ({
                type: cellType,
                row: rowIndex,
                col: colIndex,
            }))
        );
    }

    function removeProps(props: GridCellType[]) {
        const propSet = new Set(props)

        for (const row of grid.value) {
            for (const cell of row) {
                if (propSet.has(cell.type)) {
                    cell.type = GridCellType.None
                }
            }
        }
    }

    function findCampfire() {
        for (let row = 0; row < grid.value.length; row++) {
            for (let col = 0; col < grid.value[row].length; col++) {
                const cell = grid.value[row][col]
                if (cell.type == GridCellType.Campfire) {
                    return {
                        cell,
                        row,
                        col
                    }
                }
            }
        }

        return undefined
    }

    return { grid, reset, removeProps, findCampfire }
})