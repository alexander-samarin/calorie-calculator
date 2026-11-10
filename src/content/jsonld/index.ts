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

export type FaqItem = { question: string; answer: string };

type FaqGraphNode = {
  "@type": string;
  mainEntity?: { name: string; acceptedAnswer: { text: string } }[];
};

/**
 * FAQ questions and answers from the FAQPage node of the locale's JSON-LD.
 * The visible FAQ is rendered from this too, so the structured data always
 * matches the page content (required by Google for FAQ rich results).
 */
export const getFaq = (locale: Locale): FaqItem[] => {
  const graph =
    (getJsonLd(locale) as { "@graph"?: FaqGraphNode[] })["@graph"] ?? [];
  const faqPage = graph.find((node) => node["@type"] === "FAQPage");
  return (faqPage?.mainEntity ?? []).map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  }));
};
