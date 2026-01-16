import { DEFAULT_LOCALE, type Locale } from "~/i18n";
import jsonLdRu from "./ru";
import jsonLdEn from "./en";
import jsonLdUk from "./uk";
import jsonLdBe from "./be";
import jsonLdPl from "./pl";
import jsonLdDe from "./de";
import jsonLdEs from "./es";
import jsonLdIt from "./it";
import jsonLdFr from "./fr";

const jsonLdData: Record<Locale, object> = {
  ru: jsonLdRu,
  en: jsonLdEn,
  uk: jsonLdUk,
  be: jsonLdBe,
  pl: jsonLdPl,
  de: jsonLdDe,
  es: jsonLdEs,
  it: jsonLdIt,
  fr: jsonLdFr,
};

export const getJsonLd = (locale: Locale): object => {
  return jsonLdData[locale] || jsonLdData[DEFAULT_LOCALE];
};
