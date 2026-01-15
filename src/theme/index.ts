import { createSignal, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { storage } from "~/helpers";

export type Theme = "system" | "light" | "dark";

const STORAGE_KEY = "theme";
const LIGHT_THEME = "cupcake";
const DARK_THEME = "dracula";
const DEFAULT_THEME: Theme = "system";

const isValidTheme = (value: string | null): value is Theme => {
  return value === "system" || value === "light" || value === "dark";
};

const getSystemTheme = (): "light" | "dark" => {
  if (isServer) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  if (isServer) return;
  const effectiveTheme = theme === "system" ? getSystemTheme() : theme;
  const daisyTheme = effectiveTheme === "dark" ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute("data-theme", daisyTheme);
};

// Always start with default value for consistent SSR/CSR hydration
const [theme, internalSetTheme] = createSignal<Theme>(DEFAULT_THEME);

let initialized = false;

const initTheme = () => {
  if (initialized || isServer) return;
  initialized = true;

  // Load saved theme from storage after hydration
  const saved = storage.get(STORAGE_KEY);
  if (isValidTheme(saved)) {
    internalSetTheme(saved);
  }

  // Apply theme
  applyTheme(theme());

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (theme() === "system") {
        applyTheme("system");
      }
    });
};

const setTheme = (newTheme: Theme) => {
  storage.set(STORAGE_KEY, newTheme);
  internalSetTheme(newTheme);
  applyTheme(newTheme);
};

export const useTheme = () => {
  onMount(() => {
    initTheme();
  });

  return {
    theme,
    setTheme,
  };
};
