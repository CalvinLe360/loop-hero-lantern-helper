<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { MessageType, useMessageOutputStore } from "@/stores";
import { rgba } from "polished";

const { message: output } = storeToRefs(useMessageOutputStore());
const colour = computed(() => {
    switch (output.value.type) {
        case MessageType.Error:
            return rgba(200, 0, 0, 200);
        case MessageType.Success:
            return rgba(0, 200, 0, 200);
        default:
            return rgba(102, 102, 102, 100);
    }
});
</script>

<template>
    <div
        class="message-box"
        :style="{
            'background-color': colour,
        }"
    >
        {{ output.message }}
    </div>
</template>

<style scoped lang="scss">
.message-box {
    font-family: "alagard";
    background-image: url("/backgrounds/space.jpg");
    background-blend-mode: multiply;

    display: flex;
    width: 450px;
    padding: 0px 8px;

    box-sizing: border-box;
    border: 1px solid black;

    color: rgb(255, 255, 255);
    line-height: 100%;
    align-items: center;
    justify-content: center;
}
</style>
