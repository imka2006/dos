<template>
  <section class="prolect-material">
    <div class="container">
      <div class="df-aic-jcsb">
        <h2 class="title">Проект</h2>
        <Btn v-if="isActive" @click="$router.push('/projects')" style="padding: 15px 70px;" text="Назад"
          class="btn-first" />
        <Btn v-else @click="edit = !edit" style="padding: 15px 70px;" text="Покинуть проект" />
      </div>
     
        <h4 class="prolect-material-name">Название</h4>
        <input type="text" class="prolect-material-input" placeholder="Введите" v-model="title">
        <h4 class="prolect-material-name">Аннотация</h4>
        <textarea class="prolect-material-input" placeholder="Введите" v-model="textArea"></textarea>
        <h4 class="prolect-material-name">Область</h4>

        <div class="prolect-material-checkbox-wrapper">
          <div class="prolect-material-checkbox">
            <CheckboxSec @childClickSec="handleChildClickSec" v-for="item in store.state.sciences" :key="item.title_ru"
              :item="item.title_ru" />
          </div>
        </div>
        <h4 class="prolect-material-name">Автор</h4>
        <input type="text" class="prolect-material-input" placeholder="Введите" v-model="author">
        <div class="prolect-material-more">
          <Plus />
          Добавить автора
        </div>
        <h4 class="prolect-material-name">Дисциплины</h4>
        <div class="prolect-material-checkbox">
          <Checkbox @childClick="handleChildClick" v-for="item in store.state.sciences" :key="item.title_ru"
            :item="item.title_ru" />
        </div>
        <button @click="postFetch" class="prolect-material-btn">Создать материал</button>
      </div>  
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Btn from '../components/btns/Btn.vue';
import Checkbox from '../components/checks/Checkbox.vue';
import CheckboxSec from '../components/checks/CheckboxSec.vue';
import Plus from '../assets/icons/global/Plus.vue';
import { useStore } from 'vuex';
const edit = ref(false)
const isActive = ref(true)
const store = useStore()
const textArea = ref("")
const title = ref("")
const author = ref("")
const region = ref([])
const disciplines = ref([])

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Добавляем ведущий ноль, если месяц состоит из одной цифры
const day = String(today.getDate()).padStart(2, '0'); // Добавляем ведущий ноль, если день состоит из одной цифры

const formattedDate = `${year}-${month}-${day}`;  

const handleChildClick = (item, isActive) => {
  if (isActive) {
    disciplines.value.push(item)
  } else {
    const data = disciplines.value = disciplines.value.filter(inner => inner !== item)
    disciplines.value = data
  }
};

const handleChildClickSec = (item, isActive) => {
  if (isActive) {
    region.value.push(item)
  } else {
    const data = region.value = region.value.filter(inner => inner !== item)
    region.value = data
  }
};


const postFetch = async () => {
  const data = {
    description: textArea.value,
    title: title.value,
    members: ["1"],
    region: region.value,
    disciplines: ['1'],
    science: disciplines.value.length,
    year: formattedDate,
  }
  const res = await fetch("http://89.208.106.189/api/v1/project/create", {
    method: "POST",
    headers: {'Content-Type': 'application/json;charset=utf-8', Authorization: `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`},
    body: JSON.stringify(data)
  });
  const result = await res.json();
  console.log(result);
}


onMounted(() => {
  store.dispatch("getSciences")
})
</script>

<style lang="scss">
.btn-second {
  display: none;
  margin-bottom: 30px;
  width: 100%;
}

textarea {
  height: 150px;
}

.prolect-material {
  margin-bottom: 95px;



  &-content_text {
    color: #181616;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    width: fit-content;
    margin-left: auto;
  }

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
    margin-top: 50px;
    cursor: pointer;
  }

  &-text {
    color: #181616;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &-more {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #010E52;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
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

    &.another {
      max-width: 230px;
    }

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
      padding-top: 0;
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

    .btn-second {
      display: block;
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

.home {
  .wrapper {
    margin-bottom: 100px;
  }

  &-object {
    width: 100%;
  }

  &-bottom {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }

  &-delete {
    color: #B81818;
    font-size: 18px;
    font-weight: 700;
    padding: 15px 35px;
    border-radius: 2px;
    border: 2px solid #B81818;
    margin-top: 30px;
    cursor: pointer;
  }

  &-inner {
    width: 45%;
  }

  &-idnt {
    display: block;
    color: #181616;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  }

  &-input-sec.another {
    border-radius: 2px;
    border: 1px solid #BABABA;
    padding: 16px 10px;
    width: 100%;
    box-sizing: border-box;
  }

  &-input-wrapper {
    display: flex;
    gap: 40px;
    margin-top: 25px;
  }

  &-done {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &-label {
    border: 1px solid gray;
    padding: 16px 0px 16px 10px;
    border-radius: 2px;
  }

  &-input {
    width: 100%;
  }

  &-title {
    margin-bottom: 30px;
    color: #010e52;
    font-weight: 700;
    font-size: 16px;
  }

  &-add {
    display: flex;
    align-items: center;
    margin-top: 65px;
  }

  &-added {
    color: #010e52;
    font-weight: 700;
    font-size: 18px;
  }

  &-subject {
    margin-bottom: 20px;
    font-weight: 500;
    color: black;
    font-size: 18px;
  }

  &-triple {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &-mark {
    width: 100%;
  }

  &-check {
    width: 100%;
  }

  &-box {
    margin-bottom: 30px;
  }

  &-name {
    margin-bottom: 30px;
  }

  &-content {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
  }

  &-flex {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &-block {
    background: rgba(255, 255, 255, 1);
    padding: 30px;
    display: flex;
    align-items: start;
    gap: 30px;
    box-sizing: border-box;
    width: 60%;

    &.second {
      width: 470px;
      height: 275px;
    }

    &.another {
      display: block;
      width: 40%;
    }

    &.column {
      display: unset;
    }

    &.mini {
      display: unset;
      width: 30%;
    }
  }

  &-ava_wrapper {
    width: 35%;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  &-name {
    font-size: 18px;
    font-weight: 700;
    color: rgba(24, 22, 22, 1);

    &.blue {
      color: rgba(1, 14, 82, 1);
      margin: 50px 0 32px;
    }
  }

  &-age {
    color: rgba(155, 155, 155, 1);
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0 17px;
    display: block;
  }

  &-pointer {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: rgba(103, 103, 103, 1);
    width: 50%;
  }

  &-host {
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    width: 50%;

    &.cocial {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    &.another {
      text-align: right;
    }
  }

  &-more {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-info {
    width: 65%;
  }

  &-author {
    margin-top: 23px;
    color: #676767;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-item {
    color: #181616;
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (max-width: 1125px) {
    &-block.first {
      flex-direction: column;
    }

    //  &-block.second 
  }

  @media screen and (max-width: 1045px) {
    &-info {
      width: 100%;
    }

    &-block {
      flex-direction: column;
    }

    &-pointer {
      width: 35%;
    }

    &-host {
      text-align: right;
      width: 65%;

      &.adaptive {
        width: auto;
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 750px) {
    &-content {
      flex-direction: column;
    }

    &-block {
      width: 100% !important;
    }

    &-host {
      width: auto;
      text-align: left;
      font-size: 16px;
    }

    &-bottom-wrapper {
      flex-direction: column;
      gap: 30px;
    }

    &-pointer {
      width: auto;
      font-size: 16px;
    }
  }

  @media screen and (max-width:968px) {
    .home-block {
      &.second {
        width: 307px;
      }
    }

    .home-input {
      width: 100%;
    }
  }

  @media screen and (max-width:968px) {
    &-input-wrapper {
      flex-direction: column;
      gap: 25px;
    }

    &-idnt {
      width: 100%;
    }
  }

  @media screen and (max-width:320px) {
    .home-input {
      width: 205px;
    }
  }

  @media screen and (max-width: 450px) {
    &-ava_wrapper {
      width: 100%;
    }

    &-host.another.cocial {
      gap: 10px;
    }

    &-host.advant {
      text-align: right;
    }

    &-more {
      gap: 10px;
    }

    &-bottom {
      flex-direction: column;
      gap: 25px;
    }

    &-inner {
      width: 100%;
    }

    &-delete {
      width: 100%;
    }
  }
}
</style>