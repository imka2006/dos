<template>
  <section class="signin">
    <div class="container">
      <h2 class="signin-title">Вход</h2>
      <p v-if="err" style="text-align: center; margin-top: 20px; color: red;">
        Вы ввели неправильный логин или пароль
      </p>
      <form @submit.prevent class="signin-content">
        <span class="signin-text">Электронная почта</span>
        <label class="signin-label">
          <input type="text" placeholder="Введите" class="signin-input" required v-model="email" />
        </label>
        <span class="signin-text">Пароль</span>
        <label class="signin-label">
          <div class="signin-wrapper">
            <input
              v-if="isShow"
              type="text"
              placeholder="Введите пароль"
              required
              class="signin-pass signin-input"
              v-model="password"
            />
            <input
              v-else
              type="password"
              placeholder="Введите пароль"
              required
              class="signin-pass signin-input"
              v-model="password"
            />
            <UnShow @click="isShow = !isShow" v-if="isShow" class="signin-show" />
            <Show @click="isShow = !isShow" v-else class="signin-show" />
          </div>
        </label>

        <Btn @click="hangleLogin" class="signin-btn" text="Вход" />
        <Btn class="signin-btn second" :disabled="false" text="Отмена" />
        <div style="text-align: center; margin-top: 20px; font-weight: 900">
          <router-link to="/signup">Зарегистрироваться</router-link>
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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const password = ref('')
const email = ref('')

const isShow = ref(false)
const err = ref(false)

const hangleLogin = async () => {
    err.value = false

    await store.dispatch('signIn', {
      username: email.value,
      password: password.value,
    })

    if(store.state.userInfo) {
        err.value = false
        router.push("/cabinet")
    } else {
        console.log("qwerty");
        err.value = true
    }
}
</script>

<style lang="scss">
.signin {
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
</style>
