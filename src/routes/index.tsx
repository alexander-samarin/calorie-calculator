import { useNavigate } from "@solidjs/router";
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
  detectLocale,
} from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

function HomeContent() {
  const { t } = useLocale();
  const navigate = useNavigate();

  onMount(() => {
    const locale = detectLocale();
    if (locale !== DEFAULT_LOCALE) {
      navigate(`/${locale}`, { replace: true });
    } else {
      // Save default locale as preferred
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
  // Render default locale version (good for SEO)
  // Will redirect to browser language after hydration if different
  return (
    <LocaleProvider locale={() => DEFAULT_LOCALE}>
      <HomeContent />
    </LocaleProvider>
  );
}
