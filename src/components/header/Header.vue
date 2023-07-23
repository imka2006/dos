<template>
<header class="header">
        <div class="container">
            <ul class="header-list">
                <Burger />
                <li v-for="item in store.state.listRu" :key="item.id" class="header-item">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                </li>
                <li  class="header-item another" :class="{ active: isActive }">
                    <div @click="isActive = !isActive" class="header-content">
                        {{ activeItem }}
                        <Arrow class="header-arrow" :class="{active: isActive}" />
                    </div>
                    <div class="header-wrapper">
                        <div class="header-langs" v-for="item in langs.filter(item => item !== activeItem)" @click="activeItem = item; isActive = false" :key="item">{{ item }}
                        </div>
                    </div>

                </li>
                
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Arrow from "../../assets/icons/header/Arrow.vue";
import Burger from "./Burger.vue";
const store = useStore()
const activeItem = ref("RUS")
const isActive = ref(false)

const langs = ["RUS", "EN"]

</script>

<style lang="scss">
.header {
    padding: 38px 0;
    background: rgba(255, 255, 255, 1); 

    &-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-item {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0em;
        color: rgba(1, 14, 82, 1);

        &.another {
            border: 1px solid rgba(1, 14, 82, 1);
            cursor: pointer;
            height: 25px;
            width: 66px;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            &.active {
                border-bottom: 1px solid white;
                overflow: unset;
            }
        }
    }

    &-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        width: 66px;
        border-radius: 1px;
    }

    &-wrapper {
        position: absolute;
        top: 25px;
        border: 1px solid rgba(1, 14, 82, 1);
        border-top: unset;
        width: 66px; 
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &-langs {
        padding-left: 8px;
    }

    &-arrow {
        transition: .3s;
        &.active {
            transform: rotate(180deg);
        }
    }

    @media screen and (max-width:850px) {
        &-item {
            display: none;
            &.another {
                display: flex;
            }
        }
    }

}
</style>