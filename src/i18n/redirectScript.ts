import { LOCALE_STORAGE_KEY } from "~/constants";
import { LOCALES, DEFAULT_LOCALE } from "./types";

/**
 * Inline <head> script for "/" (the default-locale page): sends visitors whose
 * preferred language differs to its page before anything is painted, so the
 * default-locale content never flashes.
 *
 * Crawlers are never redirected — "/" must be indexed with its own content.
 * Locale detection mirrors detectLocale() in ./index.tsx: saved choice first,
 * then navigator.language prefix.
 */
export const localeRedirectScript = `(function () {
  try {
    if (/bot|crawl|spider|slurp|yandex|lighthouse|headless/i.test(navigator.userAgent)) return;
    var locales = ${JSON.stringify(LOCALES)};
    var locale = localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)});
    if (locales.indexOf(locale) === -1) {
      var lang = (navigator.language || "").toLowerCase();
      locale = ${JSON.stringify(DEFAULT_LOCALE)};
      for (var i = 0; i < locales.length; i++) {
        if (lang.indexOf(locales[i]) === 0) { locale = locales[i]; break; }
      }
    }
    if (locale !== ${JSON.stringify(DEFAULT_LOCALE)}) {
      location.replace("/" + locale + location.search + location.hash);
    }
  } catch (e) {}
})();`;
