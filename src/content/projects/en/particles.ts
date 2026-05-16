import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Creator Ecosystem",
  theme: "dark",
  tags: ["kubernetes", "ogl", "react", "redis"],
  videoBorder: false,
  description:
    "Scaled a creator community ecosystem and contributed to major audience growth and acquisition initiatives.<br/><br/>Supported a 2500+ creator community and helped grow Instagram from 14K to 200K through content strategy, acquisition loops, and community programming.",
  components: [
    { type: "media", props: { type: "video", src: videoParticles, caption: "2500+ creator community" } },
    { type: "media", props: { type: "image", src: particles0, alt: "Creator programming", caption: "Creator programming" } },
    { type: "media", props: { type: "image", src: particles1, alt: "14K to 200K Instagram growth", caption: "14K to 200K Instagram growth" } },
    { type: "media", props: { type: "image", src: particles2, alt: "Community acquisition", caption: "Community acquisition" } },
  ],
} as const satisfies ProjectContent;
