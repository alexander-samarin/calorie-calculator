import { createSignal } from "solid-js";
import type { Locale, BaseDict } from "./types";
import { en } from "./locales/en";
import { ru } from "./locales/ru";
import { pl } from "./locales/pl";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { it } from "./locales/it";
import { fr } from "./locales/fr";
import { uk } from "./locales/uk";
import { storage } from "../helpers";

const dictionaries: Record<Locale, BaseDict> = {
  en,
  ru,
  pl,
  de,
  es,
  it,
  fr,
  uk,
};

const STORAGE_KEY = "locale";

const SLAVIC_LOCALES: Locale[] = ["ru", "pl", "uk"];

const isValidLocale = (value: string | null): value is Locale => {
  return (
    value === "en" ||
    value === "ru" ||
    value === "pl" ||
    value === "de" ||
    value === "es" ||
    value === "it" ||
    value === "fr" ||
    value === "uk"
  );
};

const getDefaultLocale = (): Locale => {
  const saved = storage.get(STORAGE_KEY);
  if (isValidLocale(saved)) return saved;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ru")) return "ru";
  if (browserLang.startsWith("uk")) return "uk";
  if (browserLang.startsWith("pl")) return "pl";
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("es")) return "es";
  if (browserLang.startsWith("it")) return "it";
  if (browserLang.startsWith("fr")) return "fr";
  return "en";
};

const [locale, internalSetLocale] = createSignal<Locale>(getDefaultLocale());

const setLocale = (newLocale: Locale) => {
  storage.set(STORAGE_KEY, newLocale);
  internalSetLocale(newLocale);
};

export const AVAILABLE_LOCALES: { value: Locale; label: string }[] = [
  { value: "de", label: "Deutsch" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "it", label: "Italiano" },
  { value: "pl", label: "Polski" },
  { value: "ru", label: "Русский" },
  { value: "uk", label: "Українська" },
];

export const useLocale = () => ({
  locale,
  setLocale,
  t: () => dictionaries[locale()],
});

/**
 * Pluralize for grams based on locale
 * Slavic languages (ru, pl, uk) have complex plural rules
 */
export const pluralizeGrams = (n: number): string => {
  const dict = dictionaries[locale()];
  const currentLocale = locale();

  // Slavic plural rules (Russian, Polish, Ukrainian)
  if (SLAVIC_LOCALES.includes(currentLocale)) {
    const abs = Math.abs(n);
    const mod10 = abs % 10;
    const mod100 = abs % 100;

    if (mod100 >= 11 && mod100 <= 19) {
      return dict.gram_other;
    }
    if (mod10 === 1) {
      return dict.gram_one;
    }
    if (mod10 >= 2 && mod10 <= 4) {
      return dict.gram_few || dict.gram_other;
    }
    return dict.gram_other;
  }

  // English and other languages: simple plural
  return n === 1 ? dict.gram_one : dict.gram_other;
};

export type { Locale, BaseDict };
