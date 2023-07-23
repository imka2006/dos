<template>
    <section class="gg">
        <div class="container">
            <div class="df-aic-jcsb">
                <h2 class="title">Материалы</h2>
            </div>
            <div class="gg-content">
                <div class="gg-left">
                    <div class="gg-subtitle">Область</div>
                    <Checkbox v-for="item in store.state.listRu" :key="item.id" :item="item" />
                    <Btn class="gg-btn" text="Применить фильтр" />
                </div>
                <div class="gg-left another">
                    <Dropdown class="gg-dropdown" />
                </div>
                <div class="gg-right">
                    <div v-for="item in 6" :key="item" class="gg-block">
                        <div class="gg-subtitle">Дифференциальные уравнения</div>
                        <div class="line"></div>
                        <div class="gg-item">.pdf</div>
                        <div class="gg-item">YouTube</div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Checkbox from "../components/checks/Checkbox.vue";
import Btn from "../components/btns/Btn.vue";
import Dropdown from "../components/Dropdown.vue";

const store = useStore()

</script>

<style lang="scss">
.gg {

    &-content {
        display: flex;
        gap: 100px;
    }

    &-left {
        max-width: 210px;

        &.another {
            display: none;
        }
    }

    &-right {
        display: flex;
        justify-content: space-between;
        width: 75%;
        flex-wrap: wrap;
        gap: 36px;
    }

    &-subtitle {
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 25px;
    }

    &-btn {
        margin-top: 50px;
    }

    &-subtitle {
        color: #181616;
        font-size: 18px;
        font-weight: 700;
    }
  

    &-item {
        color: #181616;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    &-block {
        padding: 30px;
        background: #fff;
        height: 300px;
        width: 41%;
    }


    @media screen and (max-width:1220px) {
        &-block {
            width: 100%;
        }
    }

    @media screen and (max-width:680px) {
        &-content {
            flex-direction: column;
            justify-content: center;
            gap: 24px;
        }

        &-left {
            display: none;
            width: 100%;
            max-width: unset;

            &.another {
                display: block;
            }
        }

        &-right {
            width: 100%;
        }
    }


}
</style>