import { defineStore } from "pinia";
import { usePaintStore } from "./paint";
import type { GridCell } from "@/components/types";

export const useCellClicks = defineStore('cellClicks', () => {
    const paint = usePaintStore()

    function leftClick(cell: GridCell) {
        paint.colourIn(cell)
    }

    function rightClick(cell: GridCell) {
        paint.erase(cell)
    }

    return { leftClick, rightClick }
})