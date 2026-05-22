<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  renderAs?: "button" | "a" | "div";
  variant?: "accent" | "border" | "theme" | "background" | "gray";
  rounded?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => [
  "button-wrapper",
  { [`button-wrapper-${props.variant}`]: props.variant !== undefined },
  { "button-wrapper-rounded": props.rounded },
]);
</script>

<template>
  <component :is="props.renderAs ?? 'button'" :class="classes">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.button-wrapper {
  border: none;
  border-radius: 100px;
  letter-spacing: 0.02em;
  font-size: var(--font-size-md);
  font-weight: 800;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  background-color: transparent;
  transition: all 0.25s ease;

  &-rounded {
    border-radius: 50%;
    aspect-ratio: 1;

    @include mixins.hover {
      &:hover {
        box-shadow: 0 0 15px rgba(var(--color-cyan-400-rgb), 0.5);
        filter: brightness(1.1);
      }
    }
  }

  &-accent {
    background-color: var(--color-btn-accent-bg);
    color: var(--color-btn-accent-text);

    @include mixins.hover {
      &:hover {
        filter: brightness(1.1);
        box-shadow: 0 0 15px rgba(var(--color-orange-400-rgb), 0.3);
      }
    }
  }

  &-theme {
    background-color: var(--color-btn-theme-bg);
    color: var(--color-btn-theme-text);

    @include mixins.hover {
      &:hover {
        filter: brightness(1.2);
        box-shadow: 0 0 20px rgba(var(--color-cyan-400-rgb), 0.2);
      }
    }
  }

  &-background {
    background-color: var(--color-bg);
    color: var(--color-text-primary);

    @include mixins.hover {
      &:hover {
        background-color: var(--color-grayscale-500);
      }
    }
  }

  &-gray {
    background-color: var(--color-gray-400);
    color: var(--color-white-400);

    @include mixins.hover {
      &:hover {
        background-color: var(--color-gray-500);
      }
    }
  }

  &-border {
    border: 2px solid var(--color-text-secondary);
    color: var(--color-text-primary);

    @include mixins.hover {
      &:hover {
        background-color: rgba(var(--color-white-400-rgb), 0.05);
        filter: brightness(1.1);
      }
    }
  }
}
</style>
