<script setup lang="ts">
import { storeToRefs } from "pinia";
import {
    MessageType,
    useGridStore,
    useLanternDrawStore,
    useMessageOutputStore,
} from "@/stores";
import { GridCellType } from "./types";

const gridStore = useGridStore();
const lanternStore = useLanternDrawStore();
const messageStore = useMessageOutputStore();
const { placingLanterns } = storeToRefs(lanternStore);

function clearProps() {
    gridStore.removeProps([
        GridCellType.Lantern,
        GridCellType.Bookery,
        GridCellType.River,
        GridCellType.Thicket,
    ]);
    messageStore.setMessage({
        message: "Props cleared!",
        type: MessageType.Normal,
    });
}

function resetGrid() {
    gridStore.reset({
        message: "Reset grid back to its default state.",
        type: MessageType.Normal,
    });
}
</script>

<template>
    <div class="grid-buttons">
        <button
            :disabled="placingLanterns"
            @click="() => lanternStore.drawLanterns()"
        >
            Place Lanterns
        </button>
        <button :disabled="placingLanterns" @click="clearProps">
            Clear Props
        </button>
        <button :disabled="placingLanterns" @click="resetGrid">
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
