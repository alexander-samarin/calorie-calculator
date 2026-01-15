import { createSignal, onMount, onCleanup } from "solid-js";
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

// Module-level signal for consistent SSR/CSR hydration
const [theme, setThemeSignal] = createSignal<Theme>(DEFAULT_THEME);
let initialized = false;

const setTheme = (newTheme: Theme) => {
  storage.set(STORAGE_KEY, newTheme);
  setThemeSignal(newTheme);
  applyTheme(newTheme);
};

export const useTheme = () => {
  onMount(() => {
    if (initialized || isServer) return;
    initialized = true;

    // Load saved theme from storage after hydration
    const saved = storage.get(STORAGE_KEY);
    if (isValidTheme(saved)) {
      setThemeSignal(saved);
    }

    // Apply theme
    applyTheme(theme());

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme() === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    onCleanup(() => mediaQuery.removeEventListener("change", handleChange));
  });

  return { theme, setTheme };
};
