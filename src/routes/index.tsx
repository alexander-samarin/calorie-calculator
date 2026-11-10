import { onMount } from "solid-js";
import Calculator from "~/components/Calculator";
import Footer from "~/components/Footer";
import Head from "~/components/Head";
import Love from "~/components/Love";
import SettingsModal from "~/components/SettingsModal";
import Seo from "~/components/Seo";
import {
  LocaleProvider,
  useLocale,
  DEFAULT_LOCALE,
  isValidLocale,
} from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

function HomeContent() {
  const { t } = useLocale();

  // Visitors with another preferred language are redirected before paint by
  // the inline script (src/i18n/redirectScript.ts). Reaching this page means
  // the default locale is wanted: remember it if nothing is saved yet.
  onMount(() => {
    if (!isValidLocale(storage.get(LOCALE_STORAGE_KEY))) {
      storage.set(LOCALE_STORAGE_KEY, DEFAULT_LOCALE);
    }
  });

  return (
    <>
      <Head />
      <main class="flex flex-col items-center px-4 py-8">
        <h1 class="text-2xl font-bold text-center mb-4">{t().title}</h1>
        <Love />
        <Calculator />
        <SettingsModal />
        <Seo />
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  // Always the default locale; see redirect note in HomeContent
  return (
    <LocaleProvider locale={() => DEFAULT_LOCALE}>
      <HomeContent />
    </LocaleProvider>
  );
}
