import { lazy } from "solid-js";
import { DEFAULT_LOCALE, type Locale } from "~/i18n";
import type { Component } from "solid-js";

const seoComponents: Record<Locale, Component> = {
  ru: lazy(() => import("./ru")),
  en: lazy(() => import("./en")),
  uk: lazy(() => import("./uk")),
  be: lazy(() => import("./be")),
  pl: lazy(() => import("./pl")),
  de: lazy(() => import("./de")),
  es: lazy(() => import("./es")),
  it: lazy(() => import("./it")),
  fr: lazy(() => import("./fr")),
};

export const getSeoComponent = (locale: Locale): Component => {
  return seoComponents[locale] || seoComponents[DEFAULT_LOCALE];
};
