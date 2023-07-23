<template>
    <div class="burger">
        <div v-if="!store.state.burger" @click="store.state.burger = !store.state.burger" class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div v-else  class="burger-menu">
            <Close @click="store.state.burger = !store.state.burger" />
        </div>
        <div class="burger-wrapper" :class="{ active: store.state.burger }">
            <ul class="burger-list">
                <li v-for="item in store.state.listRu" :key="item.id" class="burger-item">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
        <div v-show="store.state.burger" @click="store.state.burger = !store.state.burger" class="burger-close"></div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import Close from "../../assets/icons/header/Close.vue";

const store = useStore()


</script>

<style lang="scss">
.burger {
    display: none;

    &-menu {
        width: 24px;
        height: 24px;
        padding: 6px 3px 6px 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;

        span {
            width: 18px;
            height: 2px;
            background: rgba(24, 22, 22, 1);
        }
    }

    &-wrapper {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 100vh;
        top: 100px;
        transition: .3s;
        background: rgba(255, 255, 255, 1);
        padding-top: 25px;
        overflow: hidden;
        z-index: 3;


        &.active {
            width: 256px;
        }
    }

    &-list {
        display: flex;
        flex-direction: column;
    }

    &-item {
        padding: 14px 0 13px 33px;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        color: rgba(24, 22, 22, 1);
        width: max-content;
    }

    &-close {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0);
        z-index: 2;
        position: fixed;
        top: 112px;
        right: 0;
    }


    @media screen and (max-width:850px) {
        & {
            display: block;
        }
    }
}
</style>