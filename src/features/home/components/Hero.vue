<script setup>
import Button from "../../../components/Button.vue";
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <h1 class="hero-title">Piyush<br />Varshney</h1>
          <Banner class="hero-banner" :copy="t('job-title')" v-if="!preloaderVisible" animated />
        </div>
        <div class="hero-content-actions" v-if="!preloaderVisible">
          <Button
            renderAs="a"
            href="/resume/Piyush-Varshney-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Piyush-Varshney-Resume.pdf"
            variant="theme"
            size="md"
            data-cursor="circle-white"
            data-hoversound="hover"
            data-sound="click"
          >
            {{ t("download-resume") }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    align-items: center;
    justify-content: center;
    height: 46%;

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      grid-column: 1 / 13;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;

      @include mixins.landscape {
        grid-column: 2 / 13;
        align-items: flex-start;
        width: fit-content;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      position: relative;
      margin-bottom: var(--space-xxl);

      @include mixins.mq("md") {
        gap: var(--space-md);
        margin-bottom: var(--space-xxxl);
      }
    }

    &-actions {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
      z-index: 20;
      margin-top: var(--space-lg);

      @include mixins.landscape {
        justify-content: flex-start;
        margin-top: 0;
      }
    }

    &-button {
      width: fit-content;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-lg);
    color: var(--color-text-400);
    transition: color 0.4s ease;

    @include mixins.landscape {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: var(--font-size-title-xl);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xxl);
      }
    }
  }

  &-banner {
    position: absolute;
    bottom: 0;
    right: -16px;
    z-index: 10;
    transform: rotate(-5deg) translate(0, 65%);

    @include mixins.mq("sm") {
      right: -24px;
      transform: rotate(-5deg) translate(0, 70%);
    }

    @include mixins.mq("lg") {
      right: -32px;
      transform: rotate(-5deg) translate(0, 80%);
    }
  }
}
</style>
