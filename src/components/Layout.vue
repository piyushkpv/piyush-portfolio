<template>
  <div class="layout"><slot></slot></div>
</template>

<style scoped lang="scss">
.layout {
  //width: calc(var(--svw) * 100);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: var(--z-index-layout);
  position: relative;
  background-color: var(--color-background-400);
  color: var(--color-text-400);
  transition: background-color 0.4s ease, color 0.4s ease;
}
</style>
