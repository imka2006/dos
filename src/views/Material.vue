<template>
    <section class="material">
        <div class="container">
            <div class="df-aic-jcsb">
                <h2 class="title">Материал</h2> 
            </div>
            <div v-if="!edit" class="material-wrapper">
                <ul v-if="item" class="material-list">
                    <li class="material-item">
                        <div class="material-pointer">Название</div>
                        <div class="material-host">{{ item.title }}</div>
                    </li>
                    <div class="line"></div>
                    <li class="material-item">
                        <div class="material-pointer">Дата</div>
                        <div class="material-host">{{ item?.year.replace(/-/g, ".").split(".").reverse().join(".") }}</div>
                    </li>
                    <div class="line"></div>
                    <li class="material-item">
                        <div class="material-pointer">Область</div>
                        <div class="material-host"><span v-for="discipline in item.disciplines" :key="discipline">{{
                            discipline.title }}</span></div>
                    </li>
                    <div class="line"></div>
                    <li class="material-item">
                        <div class="material-pointer">Автор</div>
                        <div class="material-host-wrapper">
                            <div class="material-host" v-for="item in 3" :key="item"> Автор {{ item }} </div>
                        </div>
                    </li>
                </ul> 
                <div class="material-content">
                    <div class="material-block-wrapper">
                        <div class="material-block">PDF</div>
                        <div class="material-block">PDF</div>
                    </div>
                    <div class="material-block max">YouTube</div>
                </div>
            </div>
            <div v-else>
                <h4 class="material-name">Название</h4>
                <input type="text" class="material-input" placeholder="Введите" v-model="title">
                <h4 class="material-name">Аннотация</h4>
                <textarea class="material-input textarea" placeholder="Введите" v-model="textArea"></textarea>
                <h4 class="material-name">Область</h4>

                <div class="material-checkbox-wrapper">
                    <div class="material-checkbox">
                        <Checkbox  @childClick="handleChildClick" v-for="item in store.state.sciences" :key="item.title" :item="item.title" />
                    </div>
                </div>
                <h4 class="material-name">Автор</h4>
                <input type="text" class="material-input" placeholder="Введите" v-model="author">
                <div class="material-more">
                    <Plus />
                    Добавить автора
                </div>
                <h4 class="material-text">YouTube</h4>
                <input type="text" class="material-input" placeholder="Ссылка" v-model="youtube">
                <div class="material-more">
                    <Plus />
                    Добавить PDF файл
                </div> 
                <button class="material-btn">Создать материал</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Edit from '../components/Edit.vue';
import Btn from '../components/btns/Btn.vue';
import Checkbox from '../components/checks/Checkbox.vue';
import Plus from '../assets/icons/global/Plus.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const edit = ref(false)
const store = useStore()
const item = ref(null);
const route = useRoute()

const title = ref("")
const textArea = ref("")
const author = ref("")
const youtube = ref("")
const profession = ref([])

const getData = async () => {
    const res = await fetch("http://89.208.106.189/api/v1/material/detail/" + route.params.id);
    const data = await res.json();
    item.value = data
}
const handleChildClick = (item, isActive) => {
    if (isActive) {
        profession.value.push(item)
    } else {
        const data  = profession.value.filter(inner => inner !== item)
        profession.value = data
    }
    console.log(profession.value);
};

onMounted(() => {
    getData()
    store.dispatch("getSciences")
})

</script>

<style lang="scss">
.material {
    margin-bottom: 95px;

    &-list {
        width: 375px;
        padding: 30px 0;
    }

    &-wrapper {
        display: flex;
        gap: 40px;
    }

    &-btn {
        color: #B81818;
        font-size: 18px;
        font-weight: 700;
        padding: 15px 35px;
        border-radius: 2px;
        border: 2px solid #B81818;
        display: block;
    }

    &-text {
        color: #181616;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    &-input {
        width: 100%;
        padding: 12px 10px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid #BABABA;
        margin-bottom: 30px;

        &::placeholder {
            color: #BABABA;
            font-size: 16px;
            font-weight: 400;
        }

        &.textarea {
            height: 150px;
            max-width: 100%;
        }

        &.another {
            max-width: 230px;
        }

    }

    &-more {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 30px;
        cursor: pointer;
    }

    &-item {
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 30px;
    }

    &-checkbox-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    &-checkbox {
        width: 17%;
    }

    &-btns {
        display: flex;
        gap: 30px;
    }


    &-name {
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    &-pointer {
        width: 40%;
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
    }

    &-host {
        width: 60%;
        text-align: left;
        color: #181616;
        font-size: 18px;
        font-weight: 500;
    }

    &-host-wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 60%;
    }

    &-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 77%;
    }

    &-block-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    &-block {
        border-radius: 2px;
        border: 1px solid #C9C9C9;
        background: #FFF;
        width: 100%;
        height: 396px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.max {
            width: 100%;
        }
    }

    @media screen and (max-width:1050px) {
        &-block {
            height: 300px;
        }
    }

    @media screen and (max-width:860px) {
        &-block {
            height: 200px;
        }

        &-checkbox {
            width: 25%;
        }
    }

    @media screen and (max-width:700px) {
        &-wrapper {
            flex-direction: column;
        }

        &-list {
            width: 100%;
            max-width: unset;
        }

        &-host {
            width: unset;
            text-align: right;
        }

        &-pointer {
            width: unset;
        }

        &-host-wrapper {
            width: unset;
        }

        &-content {
            width: 100%;
        }
    }

    @media screen and (max-width:650px) {
        &-btns {
            display: none;
        }

    }

    @media screen and (max-width:530px) {
        &-checkbox-wrapper {
            flex-direction: column;
        }

        &-checkbox {
            width: 100%;
        }

        &-input.another {
            width: 100%;
            max-width: unset;
        }

    }

    @media screen and (max-width:450px) {
        &-block-wrapper {
            flex-direction: column;
        }
    }


}
</style>