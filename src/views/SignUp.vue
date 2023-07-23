<template>
    <section class="signup">
        <div class="container">
            <h2 class="signup-title">Регистрация</h2>
            <form class="signup-content">
                <Checkbox v-for="item in store.state.listRu.slice(2)" :key="item.id" :item="item" />
                <span class="signup-text">Образование</span>
                <Dropdown />
                <span class="signup-text">Специальность</span>
                <Dropdown />
                <span class="signup-text">Электронная почта</span>
                <label class="signup-label">
                    <input type="email" placeholder="Введите" class="signup-input" required v-model="email">
                </label>
                <span class="signup-text">Пароль</span>
                <label class="signup-label">
                    <div class="signup-wrapper">
                        <input v-if="isShow" type="text" placeholder="Введите пароль" required
                            class="signup-pass signup-input" v-model="password">
                        <input v-else type="password" placeholder="Введите пароль" required class="signup-pass signup-input"
                            v-model="password">
                        <UnShow @click="isShow = !isShow" v-if="isShow" class="signup-show" />
                        <Show @click="isShow = !isShow" v-else class="signup-show" />
                    </div>
                </label>
                <label class="signup-label">
                    <div class="signup-wrapper">
                        <input v-if="isShowSec" type="text" placeholder="Введите пароль" required
                            class="signup-pass signup-input" v-model="passwordSec">
                        <input v-else type="password" placeholder="Введите пароль" required class="signup-pass signup-input"
                            v-model="passwordSec">
                        <UnShow @click="isShowSec = !isShowSec" v-if="isShowSec" class="signup-show" />
                        <Show @click="isShowSec = !isShowSec" v-else class="signup-show" />
                    </div>
                </label>

                <Btn class="signup-btn" text="Вход" />
                <Btn class="signup-btn second" :disabled="false" text="Отмена" />
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import UnShow from "../assets/icons/sign/UnShow.vue";
import Show from "../assets/icons/sign/Show.vue";
import Btn from "../components/btns/Btn.vue";
import Dropdown from "../components/Dropdown.vue";
import Checkbox from "../components/checks/Checkbox.vue";
import { useStore } from "vuex";
const password = ref("")
const passwordSec = ref("")
const email = ref("")

const store = useStore()

const isShow = ref(false)
const isShowSec = ref(false)

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
        border: 1px solid #BABABA;
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
            color: #BABABA;
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