import {
  createContext,
  createEffect,
  createMemo,
  useContext,
  type ParentProps,
  type Accessor,
} from "solid-js";
import { isServer } from "solid-js/web";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";
import { LOCALES, DEFAULT_LOCALE, type Locale, type BaseDict } from "./types";
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

export { LOCALES, DEFAULT_LOCALE };

export const isValidLocale = (
  value: string | null | undefined
): value is Locale => {
  return LOCALES.includes(value as Locale);
};

/** Path of the home page for a locale ("/" for the default locale) */
export const getLocalePath = (locale: Locale): string =>
  locale === DEFAULT_LOCALE ? "/" : `/${locale}`;

/**
 * Preferred locale of the visitor: saved choice first, then browser language.
 * Client-only — always returns DEFAULT_LOCALE on the server.
 */
export const detectLocale = (): Locale => {
  if (isServer) return DEFAULT_LOCALE;

  const savedLocale = storage.get(LOCALE_STORAGE_KEY);
  if (isValidLocale(savedLocale)) return savedLocale;

  const browserLang = navigator.language.toLowerCase();
  return LOCALES.find((locale) => browserLang.startsWith(locale)) ?? DEFAULT_LOCALE;
};

// Context for locale - stores an accessor for reactivity
const LocaleContext = createContext<Accessor<Locale>>(() => DEFAULT_LOCALE);

export function LocaleProvider(
  props: ParentProps<{ locale: Accessor<Locale> }>
) {
  // Keep <html lang> in sync on client-side navigation
  createEffect(() => {
    if (!isServer) document.documentElement.lang = props.locale();
  });

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
 * Pluralize "gram" for the current locale using CLDR plural rules
 */
export const usePluralizeGrams = () => {
  const { locale, t } = useLocale();
  const pluralRules = createMemo(() => new Intl.PluralRules(locale()));

  return (n: number): string => {
    const forms = t().grams;
    return forms[pluralRules().select(n)] ?? forms.other;
  };
};

export type { Locale, BaseDict };
