import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Growth & Monetization",
  theme: "light",
  tags: ["node", "three", "websockets", "react"],
  videoBorder: true,
  description:
    "Generated significant platform revenue growth through pricing optimization, ad strategy, experimentation, and funnel improvements.<br/><br/>Led monetization systems that contributed to $1.8M+ revenue driven by tighter pricing logic, ad placement strategy, and product-led growth experiments.",
  components: [
    { type: "media", props: { type: "video", src: videoPokedex, caption: "$1.8M+ revenue driven" } },
    { type: "media", props: { type: "image", src: pokedex0, alt: "Pricing optimization", caption: "Pricing optimization" } },
    { type: "media", props: { type: "image", src: pokedex1, alt: "Ad strategy", caption: "Ad strategy" } },
    { type: "media", props: { type: "image", src: pokedex2, alt: "Experimentation", caption: "Experimentation" } },
    { type: "media", props: { type: "image", src: pokedex3, alt: "Funnel improvements", caption: "Funnel improvements" } },
  ],
} as const satisfies ProjectContent;
