import Calculator from "~/components/Calculator";
import Footer from "~/components/Footer";
import Love from "~/components/Love";
import SettingsModal from "~/components/SettingsModal";
import Seo from "~/components/Seo";
import { useLocale } from "~/i18n";

export default function LangHome() {
  const { t } = useLocale();

  return (
    <>
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
