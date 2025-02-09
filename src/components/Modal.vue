<script setup lang="ts">
const emit = defineEmits(["close"]);

function close() {
    emit("close");
}
</script>

<template>
    <div class="modal__backdrop">
        <div class="modal">
            <header class="modal__header">
                <slot name="header"> Title </slot>
                <button type="button" class="btn-close" @click="close">
                    x
                </button>
            </header>

            <section class="modal__body">
                <slot name="body"> Body </slot>
            </section>

            <footer class="modal__footer">
                <slot name="footer"> Footer </slot>
            </footer>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    background-color: rgb(8, 8, 8);
    --border-colour: rgb(68, 68, 68);

    box-shadow: 2px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;

    &__backdrop {
        position: fixed;
        inset: 0;
        background-color: rgba($color: #000000, $alpha: 0.3);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__header,
    &__footer {
        padding: 15px;
        display: flex;
    }

    &__header {
        position: relative;
        border-bottom: 1px solid var(--border-colour);
        color: #4aae9b;
        justify-content: center;
    }

    &__footer {
        border-top: 1px solid var(--border-colour);
        flex-direction: column;
        justify-content: flex-end;
    }

    &__body {
        position: relative;
        padding: 20px 30px;
    }
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
}
</style>
