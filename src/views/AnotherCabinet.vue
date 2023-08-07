<template>
  <section class="home">
    <Modal />
    <div class="container">
      <div class="df-aic-jcsb">
        <h2 class="title">Персона</h2>
        <div class="home-done"> 
          <router-link to="/chat"><BtnMess class="home-btn" text="Отправить сообщение" @click="handleChat" /></router-link>
        </div>
      </div>
      <div class="wrapper">
        <div class="home-content">
          <div class="home-block">
            <div class="home-ava_wrapper">
              <img :src="ava" alt="ava" />
            </div>
            <div class="home-info">
              <h4 class="home-name">{{ user.last_name + ' ' + user.first_name }}</h4>
              <span class="home-age">45 лет, мужчина</span>
              <div class="home-more">
                <span class="home-pointer">Ученая степень</span>
                <div class="home-host advant">Доктор наук</div>
              </div>
              <div class="line"></div>
              <div class="home-more">
                <span class="home-pointer">Специализация</span>
                <div class="home-host advant">Математика, Биохимия</div>
              </div>
              <div class="line"></div>
              <div class="home-more">
                <span class="home-pointer">Город</span>
                <div class="home-host advant">Астана</div>
              </div>
              <div class="line"></div>
              <div class="home-more">
                <span class="home-pointer">Страна</span>
                <div class="home-host advant">Казахстан</div>
              </div>
            </div>
          </div>
          <div class="home-block another">
            <h4 class="home-name blue">Научные интересы</h4>
            <div class="home-host adaptive">Дифференциальное исчисление</div>
            <div class="line"></div>
            <div class="home-host adaptive">Функциональный анализ</div>
          </div>
        </div>
        <div class="home-content">
          <div class="home-block column">
            <h4 class="home-name blue">Дополнительные данные</h4>
            <div class="home-more">
              <span class="home-pointer">Номер телефона</span>
              <div class="home-host another">+7 (999) 899-09-86</div>
            </div>
            <div class="line"></div>
            <div class="home-more">
              <span class="home-pointer">Email</span>
              <div v-if="user.person" class="home-host another">{{ user.person.email }}</div>
            </div>
            <div class="line"></div>
            <div class="home-more">
              <span class="home-pointer">Сайт</span>
              <div class="home-host another">www.zemlyansky900.org</div>
            </div>
            <div class="line"></div>
            <div class="home-more">
              <span class="home-pointer">Социальные сети</span>
              <div v-if="user.person" class="home-host another cocial">
                <a href="#" target="_blank">
                  <In />
                </a>
                <a v-if="user.person.twitter" href="#" target="_blank">
                  <Twiter />
                </a>
                <a v-if="user.person.facebook" href="#" target="_blank">
                  <Facebook />
                </a>
                <a v-if="user.person.youtube" href="#" target="_blank">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
          <div class="home-block another">
            <h4 class="home-name blue">Общество</h4>
            <div class="home-host">Предпринимательство</div>
          </div>
        </div>
        <h4 class="home-name blue">Участие в проектах</h4>
        <div class="line"></div>
        <div class="df-aic-jcsb home-bottom-wrapper">
          <div v-for="item in num" :key="item" class="home-block mini">
            <h4 class="home-name">Дифференциальные уравнения</h4>
            <span class="home-author">Авторы</span>
            <ul class="home-list">
              <li v-for="item in num" :key="item" class="home-item">Автор {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ava from '../assets/img/home/ava.png'
import In from '../assets/icons/home/In.vue'
import Twiter from '../assets/icons/home/Twiter.vue'
import Facebook from '../assets/icons/home/Facebook.vue'
import Youtube from '../assets/icons/home/Youtube.vue'
import { onMounted, ref } from 'vue'
import Modal from '../components/Modal.vue'
import { useStore } from 'vuex'
import BtnMess from '../components/btns/BtnMess.vue' 
import { useRoute } from 'vue-router'
const num = ref(3)
const store = useStore()
const router = useRoute()
const info = ref([]) 
 
const check = [
  {
    id: 0,
    name: 'Наука',
    link: '/projects',
  },
  {
    id: 1,
    name: 'Бизнес',
    link: '/',
  },
  {
    id: 2,
    name: 'Инжиниринг',
    link: '/',
  },
]

const user = ref({
  id: 2,
  first_name: '',
  last_name: '',
  middle_name: null,
  my_materials: [],
  my_projects: [],
})

const getData = async () => {
  const res = await fetch('http://89.208.106.189/api/v1/author/1')
  const data = await res.json()
  console.log(data)
  user.value = data
}

const handleChat = async () => {  
    const res = await fetch('http://89.208.106.189/api/v1/find/chat/' + router.params.id, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('access_token'))}`,
      },
    });
    const data = await res.json(); 
    store.commit('activeChat', data)
     
} 

onMounted(() => {
  // getData()
})
</script>

<style lang="scss">
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
    color: #b81818;
    font-size: 18px;
    font-weight: 700;
    padding: 15px 35px;
    border-radius: 2px;
    border: 2px solid #b81818;
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
    border: 1px solid #bababa;
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
      margin-bottom: 32px;
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

  @media screen and (max-width: 968px) {
    .home-block {
      &.second {
        width: 307px;
      }
    }

    .home-input {
      width: 100%;
    }
  }
  @media screen and (max-width: 968px) {
    &-input-wrapper {
      flex-direction: column;
      gap: 25px;
    }
    &-idnt {
      width: 100%;
    }
  }

  @media screen and (max-width: 320px) {
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
