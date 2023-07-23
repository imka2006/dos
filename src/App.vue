<template>
    <Header />
    <router-view />
</template>

<script setup>
import Header from './components/header/Header.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    background: #F2F5F9;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

li {
    list-style: none;
}

button {
    border: none;
}

input {
    outline: none;
    border: none;
}

.container {
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 24px;
}

.df-aic-jcsb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0 30px;
}

.title {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: rgba(1, 14, 82, 1);
}

.line {
    margin: 20px 0;
    width: 100%;
    height: 1px;
    background: rgba(201, 201, 201, 1); 
}
</style>