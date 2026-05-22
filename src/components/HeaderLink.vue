<script setup lang="ts">
const props = defineProps<{
  isActive?: boolean;
}>();
</script>

<template>
  <button class="header-link" data-cursor="circle-white" :class="{ 'header-link-active': props.isActive }">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.header-link {
  letter-spacing: 0.02em;
  font-weight: 700;
  border: none;
  background: none;
  transition: color 0.25s ease;
  font-size: var(--font-size-md);
  width: 128px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-transform: uppercase;
  z-index: 2;
  border-radius: 100px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-nav-hover);
    border-radius: 100px;
    z-index: -1;
    opacity: 0;
    transition:
      background-color var(--transition-theme),
      opacity 0.15s ease-in-out;
  }

  &-active {
    &::after {
      opacity: 0 !important;
    }
  }

  @include mixins.hover {
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
