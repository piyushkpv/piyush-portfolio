import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Xiaomi Themes Ecosystem",
    slug: "xiaomi-themes",
    thumbnail: thumbnailSharkie,
    description: "30K+ successful orders",
  },
  {
    title: "AIGC India Operations",
    slug: "aigc-india",
    thumbnail: thumbnailParticles,
    description: "AI content scale",
  },
  {
    title: "WallRio & BuffyWalls",
    slug: "wallrio-buffywalls",
    thumbnail: thumbnailQuibbo,
    description: "Engagement & Retention",
  },
  {
    title: "Xiaomi TV+ / PatchWall",
    slug: "xiaomi-tv-patchwall",
    thumbnail: thumbnailCubeWar,
    description: "Platform Experience",
  },
] as const satisfies ProjectPreview[];
