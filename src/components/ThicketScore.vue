<script setup lang="ts">
import { useThicketScoreStore } from "@/stores/thicket_score";
import { storeToRefs } from "pinia";

const { score } = storeToRefs(useThicketScoreStore());
</script>

<template>
    <div class="thicket-score">Thicket Score: {{ score }}</div>
</template>

<style lang="scss" scoped>
.thicket-score {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: alagard;
    background-color: rgba($color: #000000, $alpha: 0.5);
    border: 2px solid black;

    padding: 5px;
}
</style>
