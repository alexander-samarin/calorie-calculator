import { Title, Meta, Link } from "@solidjs/meta";
import { For } from "solid-js";
import {
  useLocale,
  getLocalePath,
  LOCALES,
  DEFAULT_LOCALE,
  type Locale,
} from "~/i18n";
import { getJsonLd } from "~/content/jsonld";

const OG_IMAGE_URL = "https://caloriecalc.cc/og.png";
const SITE_URL = "https://caloriecalc.cc";

/** Absolute URL of a locale's page (matches public/sitemap.xml) */
const getLocaleUrl = (locale: Locale): string =>
  `${SITE_URL}${getLocalePath(locale)}`;

/** Open Graph expects language_TERRITORY */
const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  pl: "pl_PL",
  de: "de_DE",
  es: "es_ES",
  it: "it_IT",
  fr: "fr_FR",
  uk: "uk_UA",
  be: "be_BY",
};

function Head() {
  const { t, locale } = useLocale();

  const jsonLd = () => JSON.stringify(getJsonLd(locale()));
  const canonicalUrl = () => getLocaleUrl(locale());

  return (
    <>
      <Title>{t().title}</Title>
      <Meta name="description" content={t().description} />
      {/* Static tags (viewport, icons, manifest, theme-color) live in
          src/entry-server.tsx so every page, including 404, has them */}
      <Meta name="apple-mobile-web-app-title" content={t().appName} />

      {/* Open Graph */}
      <Meta property="og:title" content={t().title} />
      <Meta property="og:description" content={t().description} />
      <Meta property="og:image" content={OG_IMAGE_URL} />
      <Meta property="og:url" content={canonicalUrl()} />
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content={t().title} />
      <Meta property="og:locale" content={OG_LOCALES[locale()]} />
      <For each={LOCALES.filter((code) => code !== locale())}>
        {(code) => (
          <Meta property="og:locale:alternate" content={OG_LOCALES[code]} />
        )}
      </For>

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:image" content={OG_IMAGE_URL} />

      {/* SEO */}
      <Link rel="canonical" href={canonicalUrl()} />

      {/* Hreflang alternate links for all languages */}
      <For each={LOCALES}>
        {(localeCode) => (
          <Link
            rel="alternate"
            hreflang={localeCode}
            href={getLocaleUrl(localeCode)}
          />
        )}
      </For>

      {/* x-default hreflang for language negotiation */}
      <Link rel="alternate" hreflang="x-default" href={getLocaleUrl(DEFAULT_LOCALE)} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" innerHTML={jsonLd()} />
    </>
  );
}

export default Head;
