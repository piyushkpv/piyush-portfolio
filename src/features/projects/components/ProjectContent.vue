<script setup lang="ts">
import Layout from "../../../components/Layout.vue";
import ProjectHero from "./ProjectHero.vue";
import ProjectComponent from "./ProjectComponent.vue";
import Link from "../../../components/Link.vue";
import NextProject from "./NextProject.vue";
import { previews } from "../../../content/projects/previews";
import { ref, computed, onMounted } from "vue";

import type { ProjectContent, ProjectPreview } from "../../../content/types";

const { content, projectId } = defineProps<{
  content: ProjectContent;
  projectId: string;
}>();

const loadedPreviews = ref<ProjectPreview[] | null>(null);

const loadPreviews = async () => {
  const module = await previews.en();
  loadedPreviews.value = module.default;
};

const nextProject = computed(() => {
  const previews = loadedPreviews.value;
  if (!previews) return null;

  const currentIndex = previews.findIndex((p) => p.slug === projectId);
  if (currentIndex === -1) return null;

  const nextIndex = (currentIndex + 1) % previews.length;

  return previews[nextIndex];
});

onMounted(loadPreviews);
</script>

<template>
  <Layout class="project-content">
    <ProjectHero :content="content" :projectId="projectId" />
    <div class="project-content-components">
      <div
        v-for="(component, index) in content.components"
        :key="`${component.type}-${index}`"
        class="grid project-content-grid"
      >
        <ProjectComponent :type="component.type" :props="component.props" :index="index" />
      </div>
    </div>
    <div class="grid project-content-next-project-grid">
      <Link
        v-if="nextProject"
        :to="`/project/${nextProject.slug}`"
        replace
        class="project-content-next-project"
        data-cursor="arrow"
        data-sound="click"
      >
        <NextProject :project="nextProject" />
      </Link>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.project-content {
  color: var(--color-text-400);

  &-grid {
    row-gap: var(--space-sm);

    @include mixins.mq("md") {
      row-gap: var(--space-xxl);
    }
  }

  &-next-project {
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 3 / 11;
    }

    @include mixins.mq("lg") {
      grid-column: 4 / 10;
    }

    @include mixins.mq("xl") {
      grid-column: 5 / 9;
    }

    &-grid {
      padding: 0 var(--space-outer);
      padding-top: var(--space-xl);
      padding-bottom: var(--space-xxxl);
    }
  }

  &-components {
    padding: 20px var(--space-outer);
    background-color: var(--color-background-400);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xxl);
    gap: var(--space-xxl);

    @include mixins.mq("md") {
      padding: 64px var(--space-outer);
    }
  }
}

.project-case-study {
  padding: var(--space-xl) var(--space-outer);
  gap: var(--space-xl);

  @include mixins.mq("md") {
    padding: var(--space-xxxl) var(--space-outer);
  }

  &-main {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);

    @include mixins.mq("md") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 8;
    }
  }

  &-sidebar {
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 8 / 13;
    }

    @include mixins.mq("lg") {
      grid-column: 8 / 12;
    }
  }

  &-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  &-label {
    font-family: "ProFontWindows", monospace;
    text-transform: uppercase;
    color: var(--color-cyan-400);
    font-size: var(--font-size-sm);
    letter-spacing: 0.1em;
  }

  &-text {
    font-size: var(--font-size-md);
    line-height: 1.6;
    color: var(--color-text-400);

    @include mixins.mq("md") {
      font-size: var(--font-size-lg);
    }
  }
}

.project-metrics-list {
  list-style: none;
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.project-metric-item {
  font-family: "Urbanist", sans-serif;
  font-weight: 700;
  font-size: var(--font-size-md);
  color: var(--color-text-400);
  position: relative;
  padding-left: var(--space-md);

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--color-cyan-400);
  }
}
</style>
