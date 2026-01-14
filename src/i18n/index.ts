import { createSignal } from "solid-js";
import type { Locale, BaseDict } from "./types";
import { en } from "./locales/en";
import { ru } from "./locales/ru";
import { pl } from "./locales/pl";
import { storage } from "../helpers";

const dictionaries: Record<Locale, BaseDict> = { en, ru, pl };

const STORAGE_KEY = "locale";

const isValidLocale = (value: string | null): value is Locale => {
  return value === "en" || value === "ru" || value === "pl";
};

const getDefaultLocale = (): Locale => {
  const saved = storage.get(STORAGE_KEY);
  if (isValidLocale(saved)) return saved;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ru")) return "ru";
  if (browserLang.startsWith("pl")) return "pl";
  return "en";
};

const [locale, internalSetLocale] = createSignal<Locale>(getDefaultLocale());

const setLocale = (newLocale: Locale) => {
  storage.set(STORAGE_KEY, newLocale);
  internalSetLocale(newLocale);
};

export const AVAILABLE_LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "English" },
  { value: "pl", label: "Polski" },
  { value: "ru", label: "Русский" },
];

export const useLocale = () => ({
  locale,
  setLocale,
  t: () => dictionaries[locale()],
});

/**
 * Pluralize for grams based on locale
 * Slavic languages (ru, pl) have complex plural rules
 */
export const pluralizeGrams = (n: number): string => {
  const dict = dictionaries[locale()];
  const currentLocale = locale();

  // Slavic plural rules (Russian, Polish)
  if (currentLocale === "ru" || currentLocale === "pl") {
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
