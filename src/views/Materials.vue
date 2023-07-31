<template>
    <section class="materials">
        <div class="container">
            <div class="df-aic-jcsb">
                <h2 class="title">Материалы</h2> 
            </div>
            <div class="materials-content">
                <div class="materials-left">
                    <div class="materials-subtitle">Область</div>
                    <Checkbox v-for="item in store.state.listRu" :key="item.id" :item="item" />
                    <Btn class="materials-btn" text="Применить фильтр" />
                </div>
                <div class="materials-left another">
                    <Dropdown class="materials-dropdown" />
                </div>
                <div class="materials-right">
                    <div v-for="item in items" :key="item.id" class="materials-block">
                        <div class="materials-subtitle">{{item.title}}</div>
                        <div class="line"></div>
                        <div class="materials-links">
                            <a :href="item.pdf" target="_blank" class="materials-item">.pdf</a>
                            <a :href="item.youtube" target="_blank" class="materials-item">YouTube</a>
                            <router-link :to="`/material/` + item.id" class="materials-item" style="text-decoration: underline;">Подробнее</router-link>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import Checkbox from "../components/checks/Checkbox.vue";
import Btn from "../components/btns/Btn.vue";
import Dropdown from "../components/Dropdown.vue";
import Edit from "../components/Edit.vue";

const store = useStore()

const items = ref([]);

const getData = async () => {
    const res = await fetch("http://89.208.106.189/api/v1/material/list");
    const data = await res.json();

    items.value = data.results
}

onMounted(() => {
    getData()
})

</script>

<style lang="scss">
.materials {

    &-content {
        display: flex;
        gap: 100px;
    }

    &-links {
        display: flex;
        flex-direction: column;
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