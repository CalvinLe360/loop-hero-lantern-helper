import { defineStore } from "pinia";
import { ref } from "vue";
import type { Event, EventData, EventHandler } from "./types";

export const useEventStore = defineStore('events', () => {
    const events = ref<Partial<Record<Event, EventHandler[]>>>({})

    function subscribe<E extends Event>(event: E, handler: (params: EventData[E]) => void) {
        const handlers = events.value[event]
        if (handlers) {
            handlers.push(handler as EventHandler)
        }
        else {
            events.value[event] = [handler as EventHandler]
        }
    }

    function trigger<E extends Event>(event: E, params: EventData[E]) {
        if (events.value[event]) {
            events.value[event].forEach(handler => handler(params))
        }
    }

    return {
        subscribe,
        trigger
    }
})