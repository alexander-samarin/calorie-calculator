import { Title, Meta, Link } from "@solidjs/meta";
import { For, createEffect } from "solid-js";
import { isServer } from "solid-js/web";
import { useLocale, LOCALES, type Locale } from "~/i18n";
import { getJsonLd } from "~/content/jsonld";

const OG_IMAGE_URL = "https://caloriecalc.cc/og.png";
const SITE_URL = "https://caloriecalc.cc";

/**
 * Get the absolute URL for a given locale
 */
const getLocaleUrl = (localeCode: Locale): string => {
  return localeCode === "en" ? SITE_URL : `${SITE_URL}/${localeCode}`;
};

/**
 * Get the canonical URL for the current page
 */
const getCanonicalUrl = (currentLocale: Locale): string => {
  return currentLocale === "en" ? SITE_URL : `${SITE_URL}/${currentLocale}`;
};

function Head() {
  const { t, locale } = useLocale();

  const jsonLd = () => JSON.stringify(getJsonLd(locale()));
  const canonicalUrl = () => getCanonicalUrl(locale());

  // Update html lang attribute reactively
  createEffect(() => {
    if (!isServer) {
      document.documentElement.lang = locale();
    }
  });

  return (
    <>
      <Title>{t().title}</Title>
      <Meta name="description" content={t().description} />
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />

      {/* Favicons */}
      <Link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <Link rel="shortcut icon" href="/favicon.ico" />
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Meta name="apple-mobile-web-app-title" content={t().appName} />
      <Link rel="manifest" href="/site.webmanifest" />

      {/* Theme color */}
      <Meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#efeae6"
      />
      <Meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#232530"
      />

      {/* Open Graph */}
      <Meta property="og:title" content={t().title} />
      <Meta property="og:description" content={t().description} />
      <Meta property="og:image" content={OG_IMAGE_URL} />
      <Meta property="og:url" content={canonicalUrl()} />
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content={t().title} />
      <Meta property="og:locale" content={locale()} />

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
      <Link rel="alternate" hreflang="x-default" href={SITE_URL} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" innerHTML={jsonLd()} />
    </>
  );
}

export default Head;
