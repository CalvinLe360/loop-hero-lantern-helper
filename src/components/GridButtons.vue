<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGridStore, useLanternDrawStore } from "@/stores";
import { GridCellType } from "./types";

const lanternStore = useLanternDrawStore();
const gridStore = useGridStore();
const { placingLanterns } = storeToRefs(lanternStore);
</script>

<template>
    <div class="grid-buttons">
        <button
            :disabled="placingLanterns"
            @click="() => lanternStore.calculateAndPlaceLanterns()"
        >
            Place Lanterns
        </button>
        <button
            :disabled="placingLanterns"
            @click="
                () =>
                    gridStore.removeProps([
                        GridCellType.Lantern,
                        GridCellType.Bookery,
                    ])
            "
        >
            Clear Props
        </button>
        <button :disabled="placingLanterns" @click="() => gridStore.reset()">
            Reset Grid
        </button>
    </div>
</template>

<style lang="scss" scoped>
.grid-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 24px;

    & button {
        height: 32px;
    }
}
</style>
