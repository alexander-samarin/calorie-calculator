import { useParams, Navigate } from "@solidjs/router";
import { type ParentProps, onMount } from "solid-js";
import Head from "~/components/Head";
import { LocaleProvider, isValidLocale, DEFAULT_LOCALE, type Locale } from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

export default function LangLayout(props: ParentProps) {
  const params = useParams<{ lang: string }>();

  // Redirect default locale to /
  if (params.lang === DEFAULT_LOCALE) {
    return <Navigate href="/" />;
  }

  const locale = () =>
    (isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE) as Locale;

  // Save locale preference
  onMount(() => {
    if (isValidLocale(params.lang)) {
      storage.set(LOCALE_STORAGE_KEY, params.lang);
    }
  });

  return (
    <LocaleProvider locale={locale}>
      <Head />
      {props.children}
    </LocaleProvider>
  );
}
