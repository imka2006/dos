<template>
  <div class="checkbox">
    <div @click="handleClick(item?.name ? item.name : item )" class="checkbox-wrapper">
      {{ item?.name ? item.name : item  }}
      <Checked v-if="isActive" />
      <Check v-else />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import Check from '../../assets/icons/checkbox/Check.vue';
import Checked from '../../assets/icons/checkbox/Checked.vue';
import { defineEmits } from 'vue';


defineProps(["item"])

const emits = defineEmits(['childClick']);

// Обработчик события клика
const handleClick = (item) => {
  isActive.value = !isActive.value
  emits('childClick', item, isActive.value);
};

const store = useStore()
const isActive = ref(false) 
</script>

<style lang="scss">
.checkbox {
  width: 100%;

  color: #181616;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
}
</style>