import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Xiaomi TV+ / PatchWall",
  theme: "dark",
  tags: ["ogl", "react", "glsl", "postgresql"],
  videoBorder: false,
  description:
    "Content Platform Operations<br/><br/>Contributed to TV+ and PatchWall ecosystem operations, content workflows, platform optimization, and consumer entertainment experiences.",
  components: [
    { type: "media", props: { type: "video", src: videoCubeWar, caption: "Platform Experience" } },
    { type: "media", props: { type: "image", src: cubewar0, alt: "Content Operations", caption: "Content Operations" } },
    { type: "media", props: { type: "image", src: cubewar1, alt: "Workflow Optimization", caption: "Workflow Optimization" } },
    { type: "media", props: { type: "image", src: cubewar2, alt: "Consumer Entertainment", caption: "Consumer Entertainment" } },
    { type: "media", props: { type: "image", src: cubewar3, alt: "PatchWall Ecosystem", caption: "PatchWall Ecosystem" } },
    { type: "media", props: { type: "image", src: cubewar4, alt: "Operations at Scale", caption: "Operations at Scale" } },
    { type: "media", props: { type: "image", src: cubewar5, alt: "Engagement Loops", caption: "Engagement Loops" } },
  ],
} as const satisfies ProjectContent;
