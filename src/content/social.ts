export const social = [
  { url: "mailto:piyushvarshney022@gmail.com", name: "mail" },
  { url: "https://www.linkedin.com/in/piyush-varshney-kpv/", name: "linkedin" },
  { url: "https://x.com/Piyushkpv", name: "x" },
  //{ url: "#INSTAGRAM", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "instagram" | "linkedin" | "x" }[];
