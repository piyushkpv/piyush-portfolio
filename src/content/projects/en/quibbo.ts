import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "BuffyWalls",
  theme: "light",
  tags: ["react", "css", "websockets", "three"],
  videoBorder: true,
  description:
    "Wallpaper platform with 190K+ downloads and strong retention driven through UX and engagement optimization.<br/><br/>Improved product loops around discovery, personalization, repeat usage, and content quality to sustain healthy user engagement.",
  components: [
    { type: "media", props: { type: "video", src: videoQuibbo, caption: "190K+ downloads" } },
    { type: "media", props: { type: "image", src: quibbo0, alt: "Wallpaper discovery", caption: "Wallpaper discovery" } },
    { type: "media", props: { type: "image", src: quibbo1, alt: "Retention loops", caption: "Retention loops" } },
    { type: "media", props: { type: "image", src: quibbo2, alt: "Personalization", caption: "Personalization" } },
    { type: "media", props: { type: "image", src: quibbo3, alt: "Content quality", caption: "Content quality" } },
    { type: "media", props: { type: "image", src: quibbo4, alt: "Mobile UX", caption: "Mobile UX" } },
    { type: "media", props: { type: "image", src: quibbo5, alt: "Engagement optimization", caption: "Engagement optimization" } },
  ],
} as const satisfies ProjectContent;
