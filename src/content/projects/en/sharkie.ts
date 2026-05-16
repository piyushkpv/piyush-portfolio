import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "AI Content Systems",
  theme: "light",
  tags: ["postgresql", "javascript", "glsl", "html"],
  videoBorder: false,
  description:
    "Built multilingual AI-assisted content workflows and automation systems across multiple regions.<br/><br/>Created repeatable operating systems for localization, content QA, regional publishing, and AI-assisted production to improve speed and consistency.",
  components: [
    { type: "media", props: { type: "video", src: videoSharkie, caption: "AI-assisted workflows" } },
    { type: "media", props: { type: "image", src: sharkie0, alt: "Multilingual systems", caption: "Multilingual systems" } },
    { type: "media", props: { type: "image", src: sharkie1, alt: "Regional operations", caption: "Regional operations" } },
    { type: "media", props: { type: "image", src: sharkie2, alt: "Automation workflows", caption: "Automation workflows" } },
    { type: "media", props: { type: "image", src: sharkie3, alt: "Content QA", caption: "Content QA" } },
    { type: "media", props: { type: "image", src: sharkie4, alt: "Publishing scale", caption: "Publishing scale" } },
  ],
} as const satisfies ProjectContent;
