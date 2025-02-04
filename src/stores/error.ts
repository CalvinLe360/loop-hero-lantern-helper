import { ref } from "vue";
import { defineStore } from "pinia";
import type { GridCell } from "@/components";

export const useErrorStore = defineStore('error', () => {
    const erroringCell = ref<GridCell | null>(null)

    function set(cell: GridCell) {
        erroringCell.value = cell
    }

    function clear() {
        erroringCell.value = null
    }

    function isError(cell: GridCell) {
        return cell == erroringCell.value
    }

    return { set, clear, isError }
})