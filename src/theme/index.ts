import { createSignal, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { storage } from "~/helpers";

export const STORAGE_KEY = "theme";
const SYSTEM_THEME = "system" as const;
export const LIGHT_THEME = "light" as const;
export const DARK_THEME = "dark" as const;

export type Theme =
  | typeof SYSTEM_THEME
  | typeof LIGHT_THEME
  | typeof DARK_THEME;

const DEFAULT_THEME: Theme = SYSTEM_THEME;

const isValidTheme = (value: string | null): value is Theme => {
  return (
    value === SYSTEM_THEME || value === LIGHT_THEME || value === DARK_THEME
  );
};

const getSystemTheme = (): typeof LIGHT_THEME | typeof DARK_THEME => {
  if (isServer) return LIGHT_THEME;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? DARK_THEME
    : LIGHT_THEME;
};

const applyTheme = (theme: Theme) => {
  if (isServer) return;
  const effectiveTheme = theme === SYSTEM_THEME ? getSystemTheme() : theme;
  const daisyTheme = effectiveTheme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
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

/**
 * One-time client initialization. The system theme listener lives for the
 * whole page lifetime — it must not be tied to a component, otherwise it is
 * removed when that component unmounts (e.g. on locale navigation).
 */
const initTheme = () => {
  if (initialized || isServer) return;
  initialized = true;

  // Load saved theme after hydration (SSR always renders the default)
  const saved = storage.get(STORAGE_KEY);
  if (isValidTheme(saved)) {
    setThemeSignal(saved);
  }
  applyTheme(theme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (theme() === SYSTEM_THEME) applyTheme(SYSTEM_THEME);
    });
};

export const useTheme = () => {
  onMount(initTheme);
  return { theme, setTheme };
};
