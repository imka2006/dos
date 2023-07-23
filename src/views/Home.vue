<template>
    <section class="home">
        <div class="container">
            <div class="df-aic-jcsb">
                <h2 class="title">Персона</h2>
                <Btn text="Отправить сообщение" />
            </div>
            <div class="home-content">
                <div class="home-block">
                    <div class="home-ava_wrapper">
                        <img :src="ava" alt="ava">
                    </div>
                    <div class="home-info">
                        <h4 class="home-name">Землянский Семиандр Никифорович</h4>
                        <span class="home-age">45 лет, мужчина</span>
                        <div class="home-more">
                            <span class="home-pointer">Ученая степень</span>
                            <div class="home-host">Доктор наук</div>
                        </div>
                        <div class="line"></div>
                        <div class="home-more">
                            <span class="home-pointer">Специализация</span>
                            <div class="home-host">Математика, Биохимия</div>
                        </div>
                        <div class="line"></div>
                        <div class="home-more">
                            <span class="home-pointer">Город</span>
                            <div class="home-host">Астана</div>
                        </div>
                        <div class="line"></div>
                        <div class="home-more">
                            <span class="home-pointer">Страна</span>
                            <div class="home-host">Казахстан</div>
                        </div>
                    </div>
                </div>
                <div class="home-block another">
                    <h4 class="home-name blue">Научные интересы</h4>
                    <div class="home-host">Дифференциальное исчисление</div>
                    <div class="line"></div>
                    <div class="home-host">Функциональный анализ</div>
                </div>
            </div>
            <div class="home-content">
                <div class="home-block colum">
                    <h4 class="home-name blue">Дополнительные данные</h4>
                    <div class="home-more">
                        <span class="home-pointer">Номер телефона</span>
                        <div class="home-host">+7 (999) 899-09-86</div>
                    </div>
                    <div class="line"></div>
                    <div class="home-more">
                        <span class="home-pointer">Email</span>
                        <div class="home-host">zemlyansky900@gmail.com</div>
                    </div>
                    <div class="line"></div>
                    <div class="home-more">
                        <span class="home-pointer">Сайт</span>
                        <div class="home-host">www.zemlyansky900.org</div>
                    </div>
                    <div class="line"></div>
                    <div class="home-more">
                        <span class="home-pointer">Социальные сети</span>
                        <div class="home-host cocial">
                            <a href="#" target="_blank">
                                <In />
                            </a>
                            <a href="#" target="_blank">
                                <Twiter />
                            </a>
                            <a href="#" target="_blank">
                                <Facebook />
                            </a>
                            <a href="#" target="_blank">
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
            <div class="df-aic-jcsb">
                <div v-for="item in num" :key="item" class="home-block mini">
                    <h4 class="home-name">Дифференциальные уравнения</h4>
                    <span class="home-author">Авторы</span>
                    <div class="line"></div>
                    <ul class="home-list">
                        <li v-for="item in num" :key="item" class="home-item">Автор {{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Btn from "../components/Btn.vue";
import ava from "../assets/img/home/ava.png";
import In from "../assets/icons/home/In.vue";
import Twiter from "../assets/icons/home/Twiter.vue";
import Facebook from "../assets/icons/home/Facebook.vue";
import Youtube from "../assets/icons/home/Youtube.vue";
import { ref } from "vue";

const num = ref(3)
</script>

<style lang="scss">
.home {

    &-content {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 30px;
    }

    &-block {
        background: rgba(255, 255, 255, 1);
        padding: 30px;
        display: flex;
        align-items: start;
        gap: 30px;
        box-sizing: border-box;

        &.another {
            display: block;
            max-width: 475px;
            width: 100%;
            min-height: 332px;
        }

        &.colum {
            display: unset;
            width: 760px;
        }

        &.mini {
            display: unset;
            width: 385px;
        }
    }

    &-ava_wrapper {
        width: 241px;

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
    }

    &-host {
        color: rgba(0, 0, 0, 1);
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;

        &.cocial {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }

    &-more {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

}
</style>