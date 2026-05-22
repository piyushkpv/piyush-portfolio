<script setup lang="ts">
import { theme, toggleTheme } from "../utils/theme";
import ButtonRound from "./ButtonRound.vue";
</script>

<template>
  <ButtonRound
    @click="toggleTheme"
    variant="theme"
    class="theme-toggle"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    aria-label="Toggle theme"
  >
    <div class="icon-container">
      <!-- Sun Icon -->
      <svg
        v-if="theme === 'light'"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <!-- Moon Icon -->
      <svg
        v-else
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </div>
  </ButtonRound>
</template>

<style scoped lang="scss">
.theme-toggle {
  position: relative;
  overflow: hidden;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.icon {
  width: 20px;
  height: 20px;
  transition: transform 0.5s var(--ease-smooth);
}

.theme-toggle:hover .icon {
  transform: rotate(15deg) scale(1.1);
}
</style>
