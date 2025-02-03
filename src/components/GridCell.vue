<script setup lang="ts">
import { useCellClicks } from "../stores/cell_clicks";
import { type GridCellProps } from "./types";
import { getImage } from "../mechanics";

const props = defineProps<GridCellProps>();
const cellClicks = useCellClicks();

function mouseOver(event: MouseEvent) {
    if ((event.buttons & 1) == 1) {
        cellClicks.leftClick(props.cell);
    }

    if ((event.buttons & 2) == 2) {
        cellClicks.rightClick(props.cell);
    }
}
</script>

<template>
    <div
        class="grid-cell"
        @contextmenu="(event) => event.preventDefault()"
        @mousedown="mouseOver"
        @mouseover="mouseOver"
    >
        <img
            class="grid-cell__image"
            :src="`tiles/${getImage(props.cell.type)}`"
            @dragstart="(event) => event.preventDefault()"
        />
    </div>
</template>

<style scoped lang="scss">
.grid-cell {
    --grid-cell-size: 6vh;
    --grid-cell-border-size: 1px;

    box-sizing: border-box;
    width: calc(var(--grid-cell-size));
    height: calc(var(--grid-cell-size));
    border: var(--grid-cell-border-size) solid rgba(82, 82, 82, 0.39);

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    &__image {
        width: 100%;
        height: 100%;
    }
}
</style>
