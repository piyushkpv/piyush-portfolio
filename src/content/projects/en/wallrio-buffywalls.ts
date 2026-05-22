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
    "Wallpaper Product & Engagement Strategy<br/><br/>Developed premium wallpaper ecosystem concepts focused on retention, personalization, monetization psychology, and visual content discovery.",
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
