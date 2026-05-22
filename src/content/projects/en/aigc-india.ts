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
    "AI Content Operations & Scale<br/><br/>Built and scaled AI-generated content workflows for India market operations, improving content generation efficiency and supporting large-scale ecosystem growth.",
  components: [
    { type: "media", props: { type: "video", src: videoParticles, caption: "AI Workflows" } },
    { type: "media", props: { type: "image", src: particles0, alt: "Content Generation", caption: "Content Generation" } },
    { type: "media", props: { type: "image", src: particles1, alt: "India Operations", caption: "India Operations" } },
    { type: "media", props: { type: "image", src: particles2, alt: "Ecosystem Scale", caption: "Ecosystem Scale" } },
  ],
} as const satisfies ProjectContent;
