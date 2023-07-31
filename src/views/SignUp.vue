<template>
  <section class="signup">
    <div class="container">
      <h2 class="signup-title">Регистрация</h2>
      <form @submit.prevent class="signup-content">
        <span class="signup-text">Образование</span>
        <div @click="isActiveProfession = !isActiveProfession" :class="{ active: isActiveProfession }" class="dropdown">
          <div class="dropdown-active" :class="{ active: activeItem }">
            {{ activeItem }}
            <svg
              :class="{ active: isActiveProfession }"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9.75L12 15.75L18 9.75"
                stroke="#010E52"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div v-show="isActiveProfession" class="dropdown-wrapper" :class="{ active: isActiveProfession }">
            <div
              class="dropdown-item"
              @click="
                isActiveProfession = true,
                activeItem = item.name
              "
              v-for="item in store.state.listRu.filter(item => item.name !== activeItem)"
              :key="item.id"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <span class="signup-text">Специальность</span>
        <div @click="isActiveScience = !isActiveScience" :class="{ active: isActiveScience }" class="dropdown">
          <div class="dropdown-active" :class="{ active: activeItem }">
            {{ activeItemScience['title_' + store.state.language] }}
            <svg
              :class="{ active: isActiveScience }"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9.75L12 15.75L18 9.75"
                stroke="#010E52"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div v-show="isActiveScience" class="dropdown-wrapper" :class="{ active: isActiveScience }">
            <div
              class="dropdown-item"
              @click="
                isActiveScience = true,
                activeItemScience = item
              "
              v-for="item in store.state.sciences.filter(item => item['title_' + store.state.language] !== activeItemScience['title_' + store.state.language])"
              :key="item.id"
            >
              {{ item['title_' + store.state.language] }}
            </div>
          </div>
        </div>
        <span class="signup-text">Логин</span>
        <label class="signup-label">
          <input type="text" placeholder="Введите" class="signup-input" required v-model="username" />
        </label>
        <span class="signup-text">Имя</span>
        <label class="signup-label">
          <input type="text" placeholder="Введите" class="signup-input" required v-model="firstName" />
        </label>
        <span class="signup-text">Фамилия</span>
        <label class="signup-label">
          <input type="text" placeholder="Введите" class="signup-input" required v-model="lastName" />
        </label>
        <span class="signup-text">Электронная почта</span>
        <label class="signup-label">
          <input type="email" placeholder="Введите" class="signup-input" required v-model="email" />
        </label>
        <span class="signup-text">Номер телефона</span>
        <label class="signup-label">
          <input type="number" placeholder="Введите" class="signup-input" required v-model="phone" />
        </label>
        <span class="signup-text">Город</span>
        <label class="signup-label">
          <input type="text" placeholder="Введите" class="signup-input" required v-model="city" />
        </label>
        <span class="signup-text">twitter</span>
        <label class="signup-label">
          <input type="text" placeholder="Введите ссылку" class="signup-input" required v-model="twitter" />
        </label>
        <span class="signup-text">facebook</span>
        <label class="signup-label">
          <input type="text" placeholder="Введите ссылку" class="signup-input" required v-model="facebook" />
        </label>
        <span class="signup-text">youtube</span>
        <label class="signup-label">
          <input type="text" placeholder="Введите ссылку" class="signup-input" required v-model="youtube" />
        </label>
        <span class="signup-text">Пароль</span>
        <label class="signup-label">
          <div class="signup-wrapper">
            <input
              v-if="isShow"
              type="text"
              placeholder="Введите пароль"
              required
              class="signup-pass signup-input"
              v-model="password"
            />
            <input
              v-else
              type="password"
              placeholder="Введите пароль"
              required
              class="signup-pass signup-input"
              v-model="password"
            />
            <UnShow @click="isShow = !isShow" v-if="isShow" class="signup-show" />
            <Show @click="isShow = !isShow" v-else class="signup-show" />
          </div>
        </label>
        <label class="signup-label">
          <div class="signup-wrapper">
            <input
              v-if="isShowSec"
              type="text"
              placeholder="Введите пароль"
              required
              class="signup-pass signup-input"
              v-model="passwordSec"
            />
            <input
              v-else
              type="password"
              placeholder="Введите пароль"
              required
              class="signup-pass signup-input"
              v-model="passwordSec"
            />
            <UnShow @click="isShowSec = !isShowSec" v-if="isShowSec" class="signup-show" />
            <Show @click="isShowSec = !isShowSec" v-else class="signup-show" />
          </div>
        </label>

        <Btn @click="handleRegister" class="signup-btn" text="Вход" />
        <Btn class="signup-btn second" :disabled="false" text="Отмена" />
        <div style="text-align: center; margin-top: 20px; font-weight: 900;">
          <router-link to="/signin">Войти в свой аккаунт</router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import UnShow from '../assets/icons/sign/UnShow.vue'
import Show from '../assets/icons/sign/Show.vue'
import Btn from '../components/btns/Btn.vue'
import Dropdown from '../components/Dropdown.vue'
import Checkbox from '../components/checks/Checkbox.vue'
import { useStore } from 'vuex'
const store = useStore()

const password = ref('')
const passwordSec = ref('')
const email = ref('') 
const username = ref('')
const firstName = ref('')
const lastName = ref('')
const phone = ref("")
const city = ref("")
const twitter = ref("")
const facebook = ref("")
const youtube = ref("")
const activeItem = ref("Выберите")
const activeItemScience = ref({
    title_ru: "Выберите",
    title_ky: "Танда",
    title_en: "Choose"
})

const isActiveProfession = ref(false)
const isItem = ref(false)

const isActiveScience = ref(false)
const isItemScience = ref(false)

const isShow = ref(false)
const isShowSec = ref(false)

const handleRegister = () => {
    store.dispatch("signUp", {
        username: username.value,
        first_name: firstName.value,
        last_name: lastName.value,
        password: password.value,
        science: activeItemScience.value.id,
        email: email.value,
        profession: null
    })
}

onMounted(() => {
    store.dispatch("getSciences")
})
</script>

<style lang="scss">
.signup {
  margin: 80px 0;

  &-title {
    display: flex;
    justify-content: center;
  }

  &-content {
    max-width: 410px;
    margin: 0 auto;
    margin-top: 50px;
  }

  &-label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #bababa;
    background: white;
    margin-bottom: 25px;
    box-sizing: border-box;
  }

  &-text {
    color: #181616;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    display: block;
  }

  &-input {
    &::placeholder {
      color: #bababa;
      font-size: 16px;
      font-weight: 400;
    }

    width: 100%;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &-show {
    cursor: pointer;
  }

  &-btn {
    width: 100%;
    text-align: center;
    margin-top: 50px;

    &.second {
      margin-top: 15px;
    }
  }
}
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
    svg {
        transition: .3s;
        &.active {
                transform: rotate(180deg);
            }
    }

    &-active {
        color: #BABABA;
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: space-between;

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
