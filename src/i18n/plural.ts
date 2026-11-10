import type { PluralForms } from "./types";

const rulesCache = new Map<string, Intl.PluralRules>();

/** Picks the word form for n by CLDR plural rules; falls back to "other" */
export const selectPluralForm = (
  locale: string,
  forms: PluralForms,
  n: number,
): string => {
  let rules = rulesCache.get(locale);
  if (!rules) {
    rules = new Intl.PluralRules(locale);
    rulesCache.set(locale, rules);
  }
  return forms[rules.select(n)] ?? forms.other;
};
