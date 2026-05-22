import { ref, watchEffect } from "vue";

export type Theme = "light" | "dark";

const THEME_KEY = "portfolio-theme";

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
  if (savedTheme) return savedTheme;
  
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const theme = ref<Theme>(getInitialTheme());

export const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};

watchEffect(() => {
  localStorage.setItem(THEME_KEY, theme.value);
  document.documentElement.setAttribute("data-theme", theme.value);
});
