<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import GridCellComponent from "./GridCell.vue";
import { useGridStore } from "@/stores/grid";
import { useMessageOutputStore } from "@/stores";

const gridStore = useGridStore();
const messageStore = useMessageOutputStore();
const { grid } = storeToRefs(gridStore);

onMounted(() => {
    gridStore.reset(messageStore.defaultMessage());
});
</script>

<template>
    <div class="grid__map">
        <div class="grid__row" v-for="(row, rowIndex) in grid" :key="rowIndex">
            <GridCellComponent
                v-for="(cell, colIndex) in row"
                :key="colIndex"
                :cell="cell"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.grid {
    &__map {
        width: max-content;
        background-image: url("/backgrounds/space.jpg");
        background-color: rgb(82, 82, 82);
        background-blend-mode: multiply;
    }

    &__row {
        display: flex;
        flex-direction: row;
    }
}
</style>
