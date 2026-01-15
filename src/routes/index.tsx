import { useNavigate } from "@solidjs/router";
import { onMount } from "solid-js";
import { isServer } from "solid-js/web";
import Calculator from "~/components/Calculator";
import Footer from "~/components/Footer";
import Head from "~/components/Head";
import Love from "~/components/Love";
import SettingsModal from "~/components/SettingsModal";
import Seo from "~/components/Seo";
import { LocaleProvider, useLocale, LOCALES, type Locale } from "~/i18n";

const detectBrowserLocale = (): Locale => {
  if (isServer) return "en";

  const browserLang = navigator.language.toLowerCase();

  for (const locale of LOCALES) {
    if (browserLang.startsWith(locale)) {
      return locale;
    }
  }

  return "en";
};

function HomeContent() {
  const { t } = useLocale();
  const navigate = useNavigate();

  onMount(() => {
    const locale = detectBrowserLocale();
    // Only redirect if browser language is not English
    if (locale !== "en") {
      navigate(`/${locale}`, { replace: true });
    }
  });

  return (
    <>
      <Head />
      <main class="flex flex-col items-center px-4 py-8">
        <div class="text-2xl font-bold text-center mb-6">{t().title}</div>
        <Calculator />
        <SettingsModal />
        <Love />
        <Seo />
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  // Render English version as default (good for SEO)
  // Will redirect to browser language after hydration if not English
  return (
    <LocaleProvider locale={() => "en"}>
      <HomeContent />
    </LocaleProvider>
  );
}
