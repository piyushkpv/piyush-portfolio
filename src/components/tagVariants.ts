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
  three: "Experimentation",
  websockets: "User Funnels",
  react: "Analytics",
  redis: "Growth Systems",
  gray: "Insights",
  html: "Localization",
  css: "Retention",
  javascript: "Automation",
  node: "Monetization",
  next: "Product Strategy",
  kubernetes: "Content Ecosystems",
  postgresql: "AI Workflows",
  ogl: "Creator Growth",
  glsl: "Regional Ops",
} as const satisfies Record<TagVariant, string>;
