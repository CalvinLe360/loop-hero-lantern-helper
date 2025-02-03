<script setup lang="ts">
import { onMounted } from "vue";
import GridCellComponent from "./GridCell.vue";
import { useGridStore } from "@/stores/grid";
import { storeToRefs } from "pinia";

const gridStore = useGridStore();
const { grid } = storeToRefs(gridStore);

onMounted(() => {
    gridStore.reset();
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
        background-image: url("space-background.jpg");
        background-color: rgb(82, 82, 82);
        background-blend-mode: multiply;
    }

    &__row {
        display: flex;
        flex-direction: row;
    }
}
</style>
