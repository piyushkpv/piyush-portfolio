import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MIUI Themes",
  theme: "dark",
  tags: ["next", "node", "three", "html"],
  videoBorder: false,
  description:
    "Scaled monetization and content strategies across 100M+ users through experimentation, localization, and engagement optimization.<br/><br/>Focused on pricing, content performance, regional growth loops, and user funnel improvements across a large-scale consumer ecosystem.",
  components: [
    { type: "media", props: { type: "image", src: streakon0, alt: "100M+ users scaled", caption: "100M+ users scaled" } },
    { type: "media", props: { type: "image", src: streakon1, alt: "Monetization strategy", caption: "Monetization strategy" } },
    { type: "media", props: { type: "image", src: streakon2, alt: "Localized content loops", caption: "Localized content loops" } },
    { type: "media", props: { type: "image", src: streakon3, alt: "Engagement optimization", caption: "Engagement optimization" } },
  ],
} as const satisfies ProjectContent;
