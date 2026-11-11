import Calculator from "./Calculator";
import Footer from "./Footer";
import Love from "./Love";
import SettingsModal from "./SettingsModal";
import Seo from "./Seo";
import { useLocale } from "~/i18n";

/** Calculator page body, shared by "/" and "/<lang>" */
function HomePage() {
  const { t } = useLocale();

  return (
    <>
      {/* pt-11 on mobile: the title starts below the settings button */}
      <main class="flex flex-col items-center px-4 pt-11 pb-8 md:pt-8">
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

export default HomePage;
