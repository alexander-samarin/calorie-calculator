import Calculator from "./components/Calculator";
import Love from "./components/Love";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useLocale } from "./i18n";

function App() {
  const { t } = useLocale();

  return (
    <main class="flex flex-col items-center px-4 py-8">
      <h1 class="text-2xl font-bold text-center mb-6">{t().title}</h1>
      <Calculator />
      <Love />
      <LanguageSwitcher />
    </main>
  );
}

export default App;
