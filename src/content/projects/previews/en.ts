import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "MIUI Themes",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "100M+ users scaled",
  },
  {
    title: "Xiaomi TV+",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "+53% DAU growth",
  },
  {
    title: "BuffyWalls",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "190K+ downloads",
  },
  {
    title: "AI Content Systems",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Multilingual workflows",
  },
  {
    title: "Creator Ecosystem",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "2500+ creators",
  },
  {
    title: "Growth & Monetization",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "$1.8M+ revenue driven",
  },
] as const satisfies ProjectPreview[];
