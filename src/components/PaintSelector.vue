<script setup lang="ts">
import { usePaintStore } from "../stores/paint";
import { GridCellType } from "./types";

const paint = usePaintStore();

const tiles: [GridCellType, string][] = [
    [GridCellType.Road, "road.png"],
    [GridCellType.Campfire, "campfire.png"],
    [GridCellType.Lantern, "lantern.png"],
    [GridCellType.Bookery, "bookery.png"],
    [GridCellType.Thicket, "thicket.png"],
    [GridCellType.River, "river.png"],
    [GridCellType.None, "oblivion.png"],
];
</script>

<template>
    <div class="paint__bar">
        <button
            class="paint__button"
            v-for="[tileType, image] in tiles"
            :class="{
                'paint__button--active': tileType == paint.currentTile,
            }"
            :key="tileType"
            @click="() => paint.select(tileType)"
        >
            <img class="paint__image" :src="`tiles/${image}`" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.paint {
    &__bar {
        display: flex;
        flex-direction: row;
        gap: 4px;

        height: fit-content;
    }

    &__button {
        background-color: rgb(31, 31, 31);
        border: 2px solid rgb(133, 133, 133);
        border-radius: 15px 15px 0px 0px;
        padding: 3px 3px 0px 3px;

        &:hover {
            background-color: rgb(163, 163, 163);
        }

        &--active {
            background-color: green;
        }
    }

    &__image {
        --icon-size: 5.5vh;
        width: var(--icon-size);
        height: var(--icon-size);
        border-radius: 15px 15px 0px 0px;
    }
}
</style>
