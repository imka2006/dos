<template>
    <section class="gg">
        <div class="container">
            <div class="df-aic-jcsb">
                <h2 class="title">Сообщество</h2>
            </div>
            <div class="gg-wrapper">
                <div v-for="item in 6" :key="item" class="gg-block">
                    <div class="gg-ava_wrapper">
                        <!-- <img src="" alt=""> -->
                    </div>
                    <h4 class="gg-name">Название сообщества</h4>
                    <span class="gg-text">PhD</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss">
.gg {
    padding-bottom: 160px;

    &-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    &-ava_wrapper {
        width: 100%;
        height: 340px;
        border-radius: 5px;
        background: #E0E0E0;

        img {
            width: 100%;
        }
    }

    &-block {
        padding: 23px;
        width: 28%;
        border-radius: 5px;
        background: #FFF;
    }

    &-name {
        color: #181616;
        font-size: 20px;
        font-weight: 700;
        margin: 23px 0 16px;
    }

    &-text {
        color: #181616;
        font-size: 18px;
        font-weight: 500;
    }

    @media screen and (max-width:1285px) {
        &-block {
            width: 35%;
        }
    }

    @media screen and (max-width:840px) {

        &-ava_wrapper {
            height: 250px;
        }
    }

    @media screen and (max-width:700px) {
        &-block {
            width: 100%;
        }
    }
}</style>