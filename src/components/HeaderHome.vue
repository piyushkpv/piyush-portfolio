<script setup lang="ts">
import HeaderLink from "./HeaderLink.vue";
import { onMounted, ref } from "vue";
import { t } from "../i18n/utils/translate";
import { lenis } from "../composables/useScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderTheme } from "../composables/useHeaderTheme";
import { projectId } from "../composables/useRouteObserver";

const handleLinkClick = (link: string) => {
  if (!lenis.value) return;
  lenis.value.scrollTo(link);
};

type ActiveLink = "about" | "projects" | "experience" | "contact";
const activeLink = ref<ActiveLink | null>(null);
const sections: ActiveLink[] = ["about", "projects", "experience", "contact"];
const ariaLabels = {
  about: t("about"),
  projects: t("projects"),
  experience: t("experience"),
  contact: t("contact"),
};

const isMounted = ref(false);

const barStyle = ref({ transform: "" });
const ITEM_WIDTH = 128;

const { hasScrolledIntoView } = useHeaderTheme();

const updateBarPosition = () => {
  const index = sections.indexOf(activeLink.value as ActiveLink);
  const left = index * ITEM_WIDTH;
  barStyle.value = {
    transform: `translateX(${left}px)`,
  };
};

onMounted(() => {
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: `#${section}`,
      start: section === "about" ? "top 22.5%" : "top center",
      end: "bottom center",
      onEnter: () => {
        activeLink.value = section;
        updateBarPosition();
      },
      onEnterBack: () => {
        activeLink.value = section;
        updateBarPosition();
      },
      onLeave: () => (activeLink.value = null),
      onLeaveBack: () => (activeLink.value = null),
    });
  });

  ScrollTrigger.refresh();

  isMounted.value = true;
});
</script>

<template>
  <div :class="['header-home', { 'header-home-mounted': isMounted, 'header-home-isProjectPage': projectId !== null }]">
    <div class="header-home-links">
      <div
        :class="['header-home-bar', { 'header-home-bar-active': activeLink !== null && hasScrolledIntoView }]"
        :style="barStyle"
      ></div>
      <HeaderLink
        v-for="section in sections"
        :key="section"
        :is-active="activeLink === section && hasScrolledIntoView"
        class="header-home-link children-unclickable"
        @click="handleLinkClick('#' + section)"
        :aria-label="ariaLabels[section]"
        data-sound="click"
        data-hoversound="hover"
      >
        {{ t(section) }}
      </HeaderLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-home {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-index-header-home);
  height: var(--height-header);
  align-items: center;
  justify-content: center;
  display: none;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    transform var(--transition-route-duration) var(--transition-route-ease);

  &-isProjectPage {
    transform: translateX(-50%) translateY(-100%);
  }

  &-mounted {
    opacity: 1;
  }

  @include mixins.mq("lg") {
    display: flex;
  }

  &-links {
    position: relative;
    display: flex;
    align-items: center;
    padding: 4px;
    background-color: var(--color-nav-bg);
    border-radius: 100px;
    color: var(--color-nav-text);
    transition:
      color var(--transition-theme),
      background-color var(--transition-theme);
    height: 54px;
    max-width: calc(100vw - 32px);
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @include mixins.mq("md") {
      height: 60px;
    }
  }

  &-bar {
    position: absolute;
    top: 4px;
    left: 4px;
    height: calc(100% - 8px);
    width: 128px;
    background: var(--color-nav-bar);
    border-radius: 100px;
    transition:
      transform 0.3s var(--ease-smooth),
      opacity 0.1s ease-in-out;
    z-index: 1;
    opacity: 0;

    &-active {
      opacity: 1;
    }
  }

  &-link {
    position: relative;
    z-index: 2;
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
    color: inherit;

    &-active {
      color: var(--color-nav-text-active);
    }
  }
}
</style>
