<script setup lang="ts">
import Grid from "./components/Grid.vue";
import GridButtons from "./components/GridButtons.vue";
import MessageBox from "./components/MessageBox.vue";
import PaintSelector from "./components/PaintSelector.vue";
</script>

<template>
    <h1>Loop Hero Lantern Placement Calculator</h1>
    <div class="app">
        <div class="app__top-bar">
            <PaintSelector />
            <MessageBox />
        </div>
        <Grid />
        <GridButtons />
    </div>
</template>

<style scoped lang="scss">
body {
    background-image: url("backgrounds/stone.jpg");
}

.app {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__top-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
}
</style>
