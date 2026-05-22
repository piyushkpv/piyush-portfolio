<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import { ref, onMounted } from "vue";
import Banner from "../../../components/Banner.vue";
import gsap from "gsap";

import logoXiaomi from "../../../assets/logos/xiaomi.png";
import logoNuntiare from "../../../assets/logos/nuntiare.jpg";

const experienceRef = ref<HTMLElement | null>(null);

const experiences = [
  {
    company: "XIAOMI INDIA",
    logo: logoXiaomi,
    role: "Product Manager",
    period: "Sep 2022 – Present",
    location: "Bengaluru, India",
    highlights: [
      "Managed growth & monetization for 100M+ ecosystem",
      "Increased global revenue by 29.87% and India by 46.13%",
      "Generated $1.8M+ ad revenue growth (+44.78%)",
      "Improved FAST/OTT engagement by 53.25%",
      "Led multilingual AI-driven content operations",
      "Scaled Instagram 14K → 200K (~30% downloads)",
    ],
  },
  {
    company: "NUNTIARE PROMOTIONS",
    logo: logoNuntiare,
    role: "Product & Growth Specialist",
    period: "Nov 2020 – Aug 2022",
    location: "Remote",
    highlights: [
      "Improved acquisition growth by 15–25%",
      "Increased campaign ROI by 20%+",
      "Improved conversion funnels by ~18%",
      "Supported product and growth decisions with analytics",
    ],
  },
];

onMounted(() => {
  if (!experienceRef.value) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 840px)", () => {
    const timeline = experienceRef.value?.querySelector(".experience-timeline-path");
    const items = experienceRef.value?.querySelectorAll(".experience-item");
    const dots = experienceRef.value?.querySelectorAll(".experience-timeline-dot");

    if (timeline) {
      gsap.from(timeline, {
        scrollTrigger: {
          trigger: experienceRef.value,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });
    }

    items?.forEach((item, index) => {
      const isEven = index % 2 === 0;
      const content = item.querySelector(".experience-content");
      const dot = dots?.[index];

      if (content) {
        gsap.from(content, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          opacity: 0,
          x: isEven ? -40 : 40,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (dot) {
        gsap.from(dot, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "back.out(1.7)",
        });
      }
    });
  });

  mm.add("(max-width: 839px)", () => {
    const items = experienceRef.value?.querySelectorAll(".experience-item");
    const dots = experienceRef.value?.querySelectorAll(".experience-timeline-dot");

    items?.forEach((item, index) => {
      const content = item.querySelector(".experience-content");
      const dot = dots?.[index];

      if (content) {
        gsap.from(content, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (dot) {
        gsap.from(dot, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "back.out(1.7)",
        });
      }
    });
  });
});
</script>

<template>
  <div class="experience" id="experience" ref="experienceRef">
    <div class="grid">
      <div class="experience-header">
        <Banner class="experience-title-banner" copy="CAREER" size="sm" animated />
        <h2 class="experience-title-copy">{{ t("experience") }}</h2>
      </div>

      <div class="experience-timeline">
        <div class="experience-timeline-path"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="exp.company"
          class="experience-item"
          :class="{ 'experience-item-even': index % 2 === 0, 'experience-item-odd': index % 2 !== 0 }"
        >
          <div class="experience-timeline-dot">
            <div class="experience-timeline-dot-inner"></div>
          </div>

          <div class="experience-card">
            <div class="experience-card-content">
              <div class="experience-card-top">
                <div class="experience-brand">
                  <div class="experience-logo-container">
                    <img :src="exp.logo" :alt="exp.company" class="experience-logo-img" />
                  </div>
                  <div class="experience-info">
                    <h3 class="experience-company">{{ exp.company }}</h3>
                    <p class="experience-role">{{ exp.role }}</p>
                  </div>
                </div>
                <div class="experience-meta">
                  <span class="experience-period">{{ exp.period }}</span>
                  <span class="experience-location">{{ exp.location }}</span>
                </div>
              </div>

              <div class="experience-card-bottom">
                <ul class="experience-highlights">
                  <li v-for="highlight in exp.highlights" :key="highlight" class="experience-highlight">
                    <span class="experience-highlight-icon">
                      <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="3" fill="currentColor" />
                      </svg>
                    </span>
                    {{ highlight }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience {
  width: 100%;
  padding: 40px 0 100px 0;
  position: relative;
  background-color: transparent;

  @include mixins.mq("md") {
    padding: 64px 0 160px 0;
  }

  &-header {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    margin-bottom: 60px;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
      margin-bottom: 80px;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }
  }

  &-title-copy {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);
    color: var(--color-text-400);
    transition: color 0.4s ease;

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-title-banner {
    position: absolute;
    top: 0;
    left: -8px;
    transform: translate(0, -20%) rotate(-4deg);

    @include mixins.mq("lg") {
      left: -16px;
      transform: translate(0, -20%) rotate(-6deg);
    }
  }

  &-timeline {
    grid-column: 1 / 13;
    position: relative;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;

    @include mixins.mq("md") {
      gap: 0;
    }

    &-path {
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom, transparent, var(--color-cyan-400), transparent);
      opacity: 0.3;

      @include mixins.mq("md") {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &-dot {
      position: absolute;
      left: 20px;
      top: 40px;
      transform: translateX(-50%);
      width: 10px;
      height: 10px;
      z-index: 10;

      @include mixins.mq("md") {
        left: 50%;
      }

      &-inner {
        width: 100%;
        height: 100%;
        background: var(--color-white-400);
        border: 2px solid var(--color-cyan-400);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(var(--color-cyan-400-rgb), 0.5);
      }
    }
  }

  &-item {
    position: relative;
    width: 100%;
    padding-left: 54px;
    padding-right: var(--space-outer);

    @include mixins.mq("md") {
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 40px;
      display: flex;
      justify-content: flex-start;

      &-odd {
        justify-content: flex-end;
      }
    }
  }

  &-card {
    position: relative;
    width: 100%;
    max-width: 500px;
    background: var(--color-surface);
    opacity: 0.8;
    backdrop-filter: blur(20px);
    border: 1px solid var(--color-surface);
    border-radius: 32px;
    transition: all 0.4s var(--ease-smooth);
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.03),
      inset 0 0 20px rgba(var(--color-cyan-400-rgb), 0.05);

    @include mixins.hover {
      &:hover {
        transform: translateY(-8px);
        opacity: 1;
        box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.06),
          0 0 20px rgba(var(--color-cyan-400-rgb), 0.1);
      }
    }

    @include mixins.mq("md") {
      max-width: 460px;
    }

    @include mixins.mq("lg") {
      max-width: 500px;
    }

    &-content {
      padding: 32px;
    }

    &-top {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }
  }

  &-brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &-logo-container {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-white-400);
    border-radius: 14px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    color: var(--color-text-400);
    padding: 6px;
    overflow: hidden;
  }

  &-logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &-company {
    font-size: 20px;
    font-weight: 900;
    color: var(--color-text-400);
    letter-spacing: -0.01em;
    transition: color 0.4s ease;
  }

  &-role {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-cyan-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &-meta {
    display: flex;
    gap: 12px;
    font-family: "ProFontWindows", monospace;
    font-size: 11px;
    color: var(--color-text-300);
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.4s ease;
  }

  &-highlights {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &-highlight {
    font-size: 14px;
    color: var(--color-text-400);
    line-height: 1.5;
    position: relative;
    padding-left: 20px;
    font-weight: 500;
    transition: color 0.4s ease;

    &-icon {
      position: absolute;
      left: 0;
      top: 6px;
      width: 8px;
      height: 8px;
      color: var(--color-cyan-400);
    }
  }
}

@include mixins.mq("md") {
  .experience-item-even {
    padding-right: 50%;
    
    .experience-card {
      margin-right: 32px;
    }
  }

  .experience-item-odd {
    padding-left: 50%;
    
    .experience-card {
      margin-left: 32px;
    }
  }
}
</style>
