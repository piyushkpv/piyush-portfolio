import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WallRio & BuffyWalls",
  theme: "dark",
  tags: ["node", "next", "kubernetes", "postgresql"],
  videoBorder: false,
  description:
    "Wallpaper Product & Engagement Strategy focused on premium visual content discovery.",
  problem:
    "High user churn and low monetization in the wallpaper app space due to lack of personalization and weak engagement loops.",
  strategy:
    "Developed premium wallpaper ecosystem concepts centered on personalization, retention psychology, and high-quality visual discovery to improve user lifetime value.",
  execution:
    "Designed engagement systems based on visual content discovery trends, optimized monetization psychology through premium content placement, and built retention-focused personalization engines.",
  outcomes:
    "Created a premium brand identity and established scalable engagement loops that significantly improved user retention and personalization quality.",
  metrics: [
    "Improved user retention strategy",
    "Enhanced personalization quality",
    "Premium brand identity established",
  ],
  components: [
    { type: "media", props: { type: "video", src: videoQuibbo, caption: "Visual Content Discovery" } },
    { type: "media", props: { type: "image", src: quibbo0, alt: "Product Concepts", caption: "Product Concepts" } },
    { type: "media", props: { type: "image", src: quibbo1, alt: "Retention Strategy", caption: "Retention Strategy" } },
    { type: "media", props: { type: "image", src: quibbo2, alt: "Personalization", caption: "Personalization" } },
    { type: "media", props: { type: "image", src: quibbo3, alt: "Monetization Psychology", caption: "Monetization Psychology" } },
    { type: "media", props: { type: "image", src: quibbo4, alt: "Engagement Loops", caption: "Engagement Loops" } },
    { type: "media", props: { type: "image", src: quibbo5, alt: "Premium Ecosystem", caption: "Premium Ecosystem" } },
  ],
} as const satisfies ProjectContent;
