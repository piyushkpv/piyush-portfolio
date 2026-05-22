import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "AIGC India Operations",
  theme: "light",
  tags: ["html", "css", "javascript", "three"],
  videoBorder: false,
  description:
    "AI Content Operations & Scale for the Indian market ecosystem.",
  problem:
    "Inconsistent content quality and slow turnaround times for regional content needs, hindering large-scale ecosystem growth and user engagement in the India market.",
  strategy:
    "Developed and scaled AI-generated content (AIGC) workflows to automate content creation while maintaining high localization quality and regional relevance.",
  execution:
    "Built and optimized end-to-end AIGC pipelines, integrated automation tools for metadata generation, and established quality control frameworks for AI-assisted operations.",
  outcomes:
    "Significantly improved content generation efficiency and supported large-scale growth across the regional ecosystem through scalable AI systems.",
  metrics: [
    "Scalable content systems established",
    "Workflow optimization for regional ops",
    "Enhanced content efficiency",
  ],
  components: [
    { type: "media", props: { type: "video", src: videoParticles, caption: "AI Workflows" } },
    { type: "media", props: { type: "image", src: particles0, alt: "Content Generation", caption: "Content Generation" } },
    { type: "media", props: { type: "image", src: particles1, alt: "India Operations", caption: "India Operations" } },
    { type: "media", props: { type: "image", src: particles2, alt: "Ecosystem Scale", caption: "Ecosystem Scale" } },
  ],
} as const satisfies ProjectContent;
