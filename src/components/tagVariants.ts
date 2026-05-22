export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Growth",
  websockets: "Monetization",
  react: "Consumer Tech",
  redis: "Localization",
  gray: "AI Content",
  html: "AI Operations",
  css: "Scalable Systems",
  javascript: "Automation",
  node: "Product Strategy",
  next: "Retention",
  kubernetes: "UX Thinking",
  postgresql: "Engagement",
  ogl: "Platform Exp.",
  glsl: "Operations",
} as const satisfies Record<TagVariant, string>;
