<script setup lang="ts">
import Grid from "./components/Grid.vue";
import GridButtons from "./components/GridButtons.vue";
import MessageBox from "./components/MessageBox.vue";
import PaintSelector from "./components/PaintSelector.vue";
import Settings from "./components/Settings.vue";
import ThicketScore from "./components/ThicketScore.vue";
</script>

<template>
    <h1>Loop Hero Lantern Placement Calculator</h1>
    <div class="app">
        <div class="app__top-bar">
            <PaintSelector />
            <MessageBox />
        </div>
        <Grid />
        <div class="app__bottom-bar">
            <GridButtons />
            <Settings />
            <ThicketScore />
        </div>
    </div>
</template>

<style scoped lang="scss">
h1 {
    font-family: "alagard";
}

.app {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__top-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    &__bottom-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>
