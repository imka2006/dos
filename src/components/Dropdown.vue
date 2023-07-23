<template>
    <div @click="isActive = !isActive" :class="{ active: isActive }" class="dropdown">
        <div class="dropdown-active" :class="{ active: isItem }"> {{ activeItem }}</div>
        <div v-show="isActive" class="dropdown-wrapper" :class="{ active: isActive }">
            <div class="dropdown-item" @click="isItem = true; activeItem = item.name"
                v-for="item  in store.state.listRu.filter(item => item.name !== activeItem)" :key="item.id">{{
                    item.name }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const activeItem = ref("Выберите")

const isActive = ref(false)
const isItem = ref(false)

const store = useStore()
</script>

<style lang="scss">
.dropdown {
    border-radius: 2px;
    padding: 12px 10px;
    border: 1px solid #BABABA;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    cursor: pointer;
    margin-bottom: 20px;

    &.active {
        border-bottom: unset;
    }

    &-active {
        color: #BABABA;
        font-size: 16px;
        font-weight: 400;

        &.active {
            color: black;
        }
    }

    &-wrapper {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 12px;
        background: #fff;
        width: 100%;
        right: 0;
        left: 0;
        border-radius: 2px;
        border: 1px solid #BABABA;
        top: 40px;
        padding: 10px 0 10px 10px;
        box-sizing: border-box;
        z-index: 1;

        &.active {
            border-top: unset;
        }
    }
}
</style>