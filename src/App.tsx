import Calculator from "./components/Calculator";
import Love from "./components/Love";
import SettingsModal from "./components/SettingsModal";
import { useLocale } from "./i18n";

function App() {
  const { t } = useLocale();

  return (
    <>
      <div class="absolute top-2 md:top-4 right-2 md:right-4">
        <SettingsModal />
      </div>
      <main class="flex flex-col items-center px-4 py-8">
        <h1 class="text-2xl font-bold text-center mb-6">{t().title}</h1>
        <Calculator />
        <Love />
      </main>
    </>
  );
}

export default App;
