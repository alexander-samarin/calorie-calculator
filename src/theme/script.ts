import { STORAGE_KEY, LIGHT_THEME, DARK_THEME } from "./index";

/**
 * Inline <head> script: applies the saved theme before the first paint.
 * Without it the page is painted with the system theme and switches only
 * after the app hydrates (visible flash when the saved theme differs).
 * Must produce the same data-theme as applyTheme() in ./index.ts.
 */
export const themeInitScript = `(function () {
  try {
    var theme = localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
    if (theme !== ${JSON.stringify(LIGHT_THEME)} && theme !== ${JSON.stringify(DARK_THEME)}) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ${JSON.stringify(DARK_THEME)}
        : ${JSON.stringify(LIGHT_THEME)};
    }
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();`;
