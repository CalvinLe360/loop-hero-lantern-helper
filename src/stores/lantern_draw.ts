import { ref } from "vue";
import { defineStore } from "pinia";
import { Constants, GridCellType } from "@/components";
import { placeLanterns } from "@/mechanics";
import { MessageType, useGridStore, useLanternCalculationStore } from "@/stores";
import { useMessageOutputStore } from "./message_output";

export const useLanternDrawStore = defineStore('lanternDraw', () => {
    const placingLanterns = ref(false)

    const { calculateLanterns } = useLanternCalculationStore();
    const messageOutput = useMessageOutputStore();
    const gridStore = useGridStore()

    function calculateOptimalLanternPlacements() {
        let highestResult = calculateLanterns();
        if (highestResult != undefined) {
            for (let _ = 0; _ < Constants.calculationTries; _++) {
                const result = calculateLanterns()!;
                if (result.extra.length > highestResult.extra.length) {
                    highestResult = result;
                }
            }
        }

        return highestResult
    }

    async function drawLanterns() {
        if (placingLanterns.value) return;

        placingLanterns.value = true;

        let highestResult = calculateOptimalLanternPlacements();
        if (highestResult !== null) {
            gridStore.removeProps([GridCellType.Bookery, GridCellType.Lantern])
            messageOutput.setMessage({
                type: MessageType.Success,
                message: `Lantern placement commenced. You have ${highestResult.extra.length} vacant spots to place other side-buildings`,
            });

            await placeLanterns(highestResult);
        }

        placingLanterns.value = false;
    }

    return { placingLanterns, drawLanterns }
})