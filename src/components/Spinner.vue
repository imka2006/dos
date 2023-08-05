<template>
  <i class="gg-spinner-two"></i>
</template>

<style scoped>
@keyframes spinner-two {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.gg-spinner-two {
  transform: scale(var(--ggs, 1));
  box-sizing: border-box;
  position: relative;
  display: block;
}

.gg-spinner-two::after,
.gg-spinner-two::before {
  box-sizing: border-box;
  display: block;
  width: 200px;
  height: 200px;
  content: '';
  position: absolute;
  border-radius: 100%;
  margin-left: -100px;
}

.gg-spinner-two::before {
  animation: spinner-two 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
  border: 4px solid transparent;
  border-bottom-color: rgb(1, 14, 82);
  border-top-color: rgb(1, 14, 82);
}

.gg-spinner-two::after {
  border: 4px solid;
  opacity: 0.2;
}
</style>
