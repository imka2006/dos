<template>
    <button :disabled="disabled == ''">{{ text }}</button>
</template>

<script setup>
defineProps(['text', 'disabled'])
</script>

<style lang="scss" scoped>
button {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    border: 2px solid rgba(1, 14, 82, 1);
    padding: 15px;
    background: rgba(1, 14, 82, 0);
    color: rgba(1, 14, 82, 1);
    cursor: pointer;
    

    &:disabled {
        border: 2px solid #BABABA;
        color: #9B9B9B;
        cursor: no-drop;
    }
}
</style>