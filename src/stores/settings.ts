import { ref } from "vue";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore('settings', () => {
    const requiredLanternsPerRoad = ref(4)
    const replaceUnsuitableRoadsWithVillages = ref(true)
    const overrideSideroadSpots = ref(true)

    return {
        requiredLanternsPerRoad,
        replaceUnsuitableRoadsWithVillages,
        overrideSideroadSpots
    }
})