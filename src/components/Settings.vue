<script setup lang="ts">
import Modal from "./Modal.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSettingsStore } from "@/stores";

const { requiredLanternsPerRoad, replaceUnsuitableRoadsWithVillages } =
    storeToRefs(useSettingsStore());

const isModalVisible = ref(false);
</script>

<template>
    <button @click="() => (isModalVisible = true)">Settings</button>
    <Modal v-show="isModalVisible" v-on:close="isModalVisible = false">
        <template v-slot:header> Settings </template>

        <template v-slot:body>
            <div class="settings__value">
                <label>Required Lanterns per Road</label>
                <input type="number" v-model="requiredLanternsPerRoad" />
            </div>
            <div class="settings__value">
                <label>Replace unsuitable roads with villages</label>
                <input
                    type="checkbox"
                    v-model="replaceUnsuitableRoadsWithVillages"
                />
            </div>
        </template>

        <template v-slot:footer><div></div> </template>
    </Modal>
</template>

<style lang="scss" scoped>
.settings {
    &__value {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & input {
            width: 50px;
        }
    }
}
</style>
