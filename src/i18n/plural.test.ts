import { describe, expect, it } from "vitest";
import { selectPluralForm } from "./plural";
import { LOCALES, type BaseDict, type Locale } from "./types";
import { be } from "./locales/be";
import { de } from "./locales/de";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { it as itDict } from "./locales/it";
import { pl } from "./locales/pl";
import { ru } from "./locales/ru";
import { uk } from "./locales/uk";

const dictionaries: Record<Locale, BaseDict> = { be, de, en, es, fr, it: itDict, pl, ru, uk };

const grams = (locale: Locale, n: number) =>
  `${n} ${selectPluralForm(locale, dictionaries[locale].grams, n)}`;

describe("selectPluralForm: grams", () => {
  it.each([
    ["ru", [1, 2, 5, 11, 21, 22, 25, 101, 112], "1 грамм, 2 грамма, 5 граммов, 11 граммов, 21 грамм, 22 грамма, 25 граммов, 101 грамм, 112 граммов"],
    ["uk", [1, 2, 5, 21], "1 грам, 2 грами, 5 грамів, 21 грам"],
    ["be", [1, 2, 5, 21], "1 грам, 2 грамы, 5 грамаў, 21 грам"],
    ["pl", [1, 2, 5, 21, 22, 101], "1 gram, 2 gramy, 5 gramów, 21 gramów, 22 gramy, 101 gramów"],
    ["en", [0, 1, 2], "0 grams, 1 gram, 2 grams"],
    ["fr", [0, 1, 2], "0 gramme, 1 gramme, 2 grammes"],
    ["es", [1, 2], "1 gramo, 2 gramos"],
    ["it", [1, 2], "1 grammo, 2 grammi"],
    ["de", [1, 2], "1 Gramm, 2 Gramm"],
  ] as [Locale, number[], string][])("%s", (locale, numbers, expected) => {
    expect(numbers.map((n) => grams(locale, n)).join(", ")).toBe(expected);
  });

  // Every plural category a language uses for whole grams must have its own
  // form; otherwise the "other" fallback would silently produce a wrong word.
  it.each(LOCALES)("%s defines all forms used for 0–1000", (locale) => {
    const rules = new Intl.PluralRules(locale);
    const forms = dictionaries[locale].grams;
    for (let n = 0; n <= 1000; n++) {
      expect(forms[rules.select(n)], `${locale}: ${n}`).toBeDefined();
    }
  });
});
