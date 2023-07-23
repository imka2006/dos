<template>
  <div class="checkbox">
    <div @click="isActive = !isActive" class="checkbox-wrapper">
      сами отресуйте
      <Checked v-if="isActive" />
      <Check v-else />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import Check from '../assets/icons/checkbox/Check.vue';
import Checked from '../assets/icons/checkbox/Checked.vue';

const store = useStore() 
const isActive = ref(false) 
</script>

<style lang="scss">
.checkbox {
  width: 100%;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
}
</style>