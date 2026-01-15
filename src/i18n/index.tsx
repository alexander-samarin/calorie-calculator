import {
  createContext,
  useContext,
  type ParentProps,
  type Accessor,
} from "solid-js";
import type { Locale, BaseDict } from "./types";
import { en } from "./locales/en";
import { ru } from "./locales/ru";
import { pl } from "./locales/pl";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { it } from "./locales/it";
import { fr } from "./locales/fr";
import { uk } from "./locales/uk";
import { be } from "./locales/be";

const dictionaries: Record<Locale, BaseDict> = {
  en,
  ru,
  pl,
  de,
  es,
  it,
  fr,
  uk,
  be,
};

export const LOCALES: Locale[] = [
  "en",
  "ru",
  "pl",
  "de",
  "es",
  "it",
  "fr",
  "uk",
  "be",
];

const SLAVIC_LOCALES: Locale[] = ["ru", "pl", "uk", "be"];

export const isValidLocale = (
  value: string | null | undefined
): value is Locale => {
  return LOCALES.includes(value as Locale);
};

// Context for locale - stores an accessor for reactivity
const LocaleContext = createContext<Accessor<Locale>>(() => "en" as Locale);

export function LocaleProvider(
  props: ParentProps<{ locale: Accessor<Locale> }>
) {
  return (
    <LocaleContext.Provider value={props.locale}>
      {props.children}
    </LocaleContext.Provider>
  );
}

export const AVAILABLE_LOCALES: { value: Locale; label: string }[] = [
  { value: "be", label: "Беларуская" },
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "it", label: "Italiano" },
  { value: "pl", label: "Polski" },
  { value: "ru", label: "Русский" },
  { value: "es", label: "Español" },
  { value: "uk", label: "Українська" },
];

export const useLocale = () => {
  const locale = useContext(LocaleContext);
  return {
    locale,
    t: () => dictionaries[locale()],
  };
};

/**
 * Pluralize for grams based on current locale from context
 */
export const usePluralizeGrams = () => {
  const { locale, t } = useLocale();

  return (n: number): string => {
    const dict = t();
    const currentLocale = locale();

    // Slavic plural rules (Russian, Polish, Ukrainian, Belarusian)
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
};

export type { Locale, BaseDict };
