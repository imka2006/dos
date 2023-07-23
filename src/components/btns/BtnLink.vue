<template>
    <router-link :to="link" :disabled="disabled == ''">{{ text }}</router-link>
</template>

<script setup>
defineProps(['text', 'disabled', 'link'])
</script>

<style lang="scss" scoped>
a {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    border: 2px solid rgba(1, 14, 82, 1);
    padding: 15px;
    background: rgba(1, 14, 82, 0);
    color: rgba(1, 14, 82, 1);
    cursor: pointer;
    text-align: center;

    &:disabled {
        border: 2px solid #BABABA;
        color: #9B9B9B;
        cursor: no-drop;
    }
}
</style>