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
        <div class="text-2xl font-bold text-center mb-6">{t().title}</div>
        <Calculator />
        <div class="mt-8">
          <SettingsModal />
        </div>
        <Love />
        <Seo />
      </main>
      <Footer />
    </>
  );
}
