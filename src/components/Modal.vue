<template>
    <div v-show="store.state.modal" class="modal">
        <div @click="store.state.modal = !store.state.modal" class="modal-close"></div>
        <div class="modal-content">
            <Close @click="store.state.modal = !store.state.modal" class="modal-btn" />
            <BtnLink  @click="store.state.modal = !store.state.modal" text="Регистрация" link="/signup" />
            <BtnLink  @click="store.state.modal = !store.state.modal" text="Вход" link="/signin" />
        </div>
    </div>
</template>

<script setup>
import { watchEffect } from 'vue';
import { useStore } from 'vuex';
import Close from '../assets/icons/global/Close.vue';
import BtnLink from './btns/BtnLink.vue';

const store = useStore()

watchEffect(() => {
    const body = document.body;
    if (store.state.modal) {
        body.classList.add('hidden');
    } else {
        body.classList.remove('hidden');
    }
});

</script>

<style lang="scss">
.modal {

    // position: absolute;
    &-close {
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(24, 22, 22, 0.45);
        height: 100vh;
        width: 100vw;
        z-index: 1;
    }

    &-content {
        padding: 50px 60px;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        background: rgba(255, 255, 255, 1);
        z-index: 2;
        position: absolute;
        border-radius: 2px;
        min-width: 380px;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &-btn {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
    }

}
</style>