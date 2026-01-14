import { createSignal } from "solid-js";
import { storage } from "../helpers";

export type Theme = "system" | "light" | "dark";

const STORAGE_KEY = "theme";
const LIGHT_THEME = "cupcake";
const DARK_THEME = "dracula";

const isValidTheme = (value: string | null): value is Theme => {
  return value === "system" || value === "light" || value === "dark";
};

const getDefaultTheme = (): Theme => {
  const saved = storage.get(STORAGE_KEY);
  if (isValidTheme(saved)) return saved;
  return "system";
};

const getSystemTheme = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  const effectiveTheme = theme === "system" ? getSystemTheme() : theme;
  const daisyTheme = effectiveTheme === "dark" ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute("data-theme", daisyTheme);
};

const [theme, internalSetTheme] = createSignal<Theme>(getDefaultTheme());

// Apply theme on init
applyTheme(theme());

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (theme() === "system") {
      applyTheme("system");
    }
  });

const setTheme = (newTheme: Theme) => {
  storage.set(STORAGE_KEY, newTheme);
  internalSetTheme(newTheme);
  applyTheme(newTheme);
};

export const useTheme = () => ({
  theme,
  setTheme,
});
