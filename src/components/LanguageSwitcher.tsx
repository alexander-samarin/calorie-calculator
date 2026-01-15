import { useNavigate } from "@solidjs/router";
import Select from "./Select";
import { useLocale, AVAILABLE_LOCALES } from "~/i18n";
import type { Locale } from "~/i18n";

function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    navigate(`/${value as Locale}`, { replace: true });
  };

  return (
    <Select
      label={t().language}
      value={locale()}
      onChange={handleChange}
      options={AVAILABLE_LOCALES}
    />
  );
}

export default LanguageSwitcher;
