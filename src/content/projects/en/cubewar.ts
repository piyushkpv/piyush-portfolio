import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Xiaomi TV+",
  theme: "dark",
  tags: ["redis", "websockets", "react", "kubernetes"],
  videoBorder: false,
  description:
    "Improved DAU growth and content discovery experiences across FAST and CTV ecosystems.<br/><br/>Drove +53% DAU growth by improving discovery surfaces, content navigation, engagement loops, and performance visibility across the product funnel.",
  components: [
    { type: "media", props: { type: "video", src: videoCubeWar, caption: "+53% DAU growth" } },
    { type: "media", props: { type: "image", src: cubewar0, alt: "Content discovery", caption: "Content discovery" } },
    { type: "media", props: { type: "image", src: cubewar1, alt: "FAST ecosystem", caption: "FAST ecosystem" } },
    { type: "media", props: { type: "image", src: cubewar2, alt: "CTV experience", caption: "CTV experience" } },
    { type: "media", props: { type: "image", src: cubewar3, alt: "User journeys", caption: "User journeys" } },
    { type: "media", props: { type: "image", src: cubewar4, alt: "Engagement loops", caption: "Engagement loops" } },
    { type: "media", props: { type: "image", src: cubewar5, alt: "Growth reporting", caption: "Growth reporting" } },
  ],
} as const satisfies ProjectContent;
