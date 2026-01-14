import Select from "./Select";
import { useLocale, AVAILABLE_LOCALES } from "../i18n";
import type { Locale } from "../i18n";

function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <Select
      label={t().language}
      value={locale()}
      onChange={(value) => setLocale(value as Locale)}
      options={AVAILABLE_LOCALES}
    />
  );
}

export default LanguageSwitcher;
