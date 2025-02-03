<script setup lang="ts">
import { storeToRefs } from "pinia";
import { MessageType, useMessageOutputStore } from "../stores";
import { computed } from "vue";

const { message: output } = storeToRefs(useMessageOutputStore());
const colour = computed(() => {
    switch (output.value.type) {
        case MessageType.Normal:
            return "#666";
        case MessageType.Error:
            return "#600";
        case MessageType.Success:
            return "#060";
        default:
            return "#222";
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
    display: flex;
    width: 450px;
    padding: 0px 8px;

    box-sizing: border-box;
    border: 1px solid black;

    line-height: 100%;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
}
</style>
