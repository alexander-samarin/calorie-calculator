import { useParams, Navigate } from "@solidjs/router";
import { type ParentProps } from "solid-js";
import Head from "~/components/Head";
import { LocaleProvider, isValidLocale } from "~/i18n";
import type { Locale } from "~/i18n";

export default function LangLayout(props: ParentProps) {
  const params = useParams<{ lang: string }>();

  // Redirect /en to /
  if (params.lang === "en") {
    return <Navigate href="/" />;
  }

  const locale = () =>
    (isValidLocale(params.lang) ? params.lang : "en") as Locale;

  return (
    <LocaleProvider locale={locale}>
      <Head />
      {props.children}
    </LocaleProvider>
  );
}
