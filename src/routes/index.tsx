import { onMount } from "solid-js";
import Head from "~/components/Head";
import HomePage from "~/components/HomePage";
import { LocaleProvider, DEFAULT_LOCALE, isValidLocale } from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

/**
 * "/" is always the default locale. Visitors who prefer another language are
 * redirected before paint by the inline script (src/i18n/redirectScript.ts).
 */
export default function Home() {
  // Reaching this page means the default locale is wanted:
  // remember it if nothing is saved yet
  onMount(() => {
    if (!isValidLocale(storage.get(LOCALE_STORAGE_KEY))) {
      storage.set(LOCALE_STORAGE_KEY, DEFAULT_LOCALE);
    }
  });

  return (
    <LocaleProvider locale={() => DEFAULT_LOCALE}>
      <Head />
      <HomePage />
    </LocaleProvider>
  );
}
