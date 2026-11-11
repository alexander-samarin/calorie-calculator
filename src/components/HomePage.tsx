import Calculator from "./Calculator";
import Footer from "./Footer";
import Love from "./Love";
import Seo from "./Seo";
import { useLocale } from "~/i18n";

/** Calculator page body, shared by "/" and "/<lang>" */
function HomePage() {
  const { t } = useLocale();

  return (
    <>
      <main class="flex flex-col items-center px-4 pt-6 pb-8 md:pt-8">
        <h1 class="text-2xl font-bold text-center mb-4">{t().title}</h1>
        <Love />
        <Calculator />
        <Seo />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
