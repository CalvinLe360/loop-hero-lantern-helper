import { ref } from "vue";
import { defineStore } from "pinia";
import { type MessageOutput, MessageType } from "./types";

export const useMessageOutputStore = defineStore('messageOutput', () => {
    const message = ref<MessageOutput>(defaultMessage())

    function defaultMessage(): MessageOutput {
        return {
            type: MessageType.Normal,
            message: "Hey there! Start by drawing your map and then find out how to place your lanterns in the most optimal way!"
        }
    }

    function setMessage(newMessage: MessageOutput) {
        message.value = newMessage
    }

    return { message, setMessage, defaultMessage }
})