<template>
    <section class="projects">
        <div class="container">
            <div class="df-aic-jcsb">
                <h2 class="title">Проекты</h2> 
            </div>
            <div class="projects-content">
                <div class="projects-left">
                    <div class="projects-subtitle">Область</div>
                    <Checkbox v-for="item in store.state.listRu" :key="item.id" :item="item" />
                    <Btn class="projects-btn" text="Применить фильтр" />
                    <Btn @click="$router.push('/create-project')" class="projects-btn another" text="Создать проект " />
                </div>
                <div class="projects-left another">
                    <Dropdown class="projects-dropdown" />
                </div>
                <div class="projects-right">
                    <div v-for="item in 6" :key="item" class="projects-block">
                        <div class="projects-subtitle">Дифференциальные уравнения</div>
                        <div class="line"></div>
                        <div class="projects-item" v-for="item in 2" :key="item" >Автор {{ item }}</div> 
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
import Edit from "../components/Edit.vue";

const store = useStore()

</script>

<style lang="scss">
.projects {

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
        width: 100%;
        margin-top: 50px;
        &.another {
            margin-top: 20px;
            width: 100%;
        }
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