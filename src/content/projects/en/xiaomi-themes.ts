import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Xiaomi Themes Ecosystem",
  theme: "dark",
  tags: ["three", "websockets", "react", "redis", "gray"],
  videoBorder: false,
  description:
    "Monetization & Consumer Personalization<br/><br/>Worked on monetization strategy, paid themes/fonts operations, localization workflows, regional optimization, and engagement growth across Xiaomi Themes ecosystem.<br/><br/>Metrics: 30K+ successful orders in 4 months",
  components: [
    { type: "media", props: { type: "video", src: videoSharkie, caption: "Ecosystem Growth" } },
    { type: "media", props: { type: "image", src: sharkie0, alt: "Monetization Strategy", caption: "Monetization Strategy" } },
    { type: "media", props: { type: "image", src: sharkie1, alt: "Localization Workflows", caption: "Localization Workflows" } },
    { type: "media", props: { type: "image", src: sharkie2, alt: "Paid Themes", caption: "Paid Themes" } },
    { type: "media", props: { type: "image", src: sharkie3, alt: "Regional Optimization", caption: "Regional Optimization" } },
    { type: "media", props: { type: "image", src: sharkie4, alt: "Engagement Growth", caption: "Engagement Growth" } },
  ],
} as const satisfies ProjectContent;
