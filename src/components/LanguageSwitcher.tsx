import { useNavigate } from "@solidjs/router";
import Select from "./Select";
import { useLocale, AVAILABLE_LOCALES } from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    // Save locale before navigation to prevent redirect back
    storage.set(LOCALE_STORAGE_KEY, value);
    const path = value === "en" ? "/" : `/${value}`;
    navigate(path, { replace: true });
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
