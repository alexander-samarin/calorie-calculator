import Select from "./Select";
import { useTheme } from "~/theme";
import { useLocale } from "~/i18n";
import type { Theme } from "~/theme";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  const options = () => [
    { value: "system", label: t().themeSystem },
    { value: "light", label: t().themeLight },
    { value: "dark", label: t().themeDark },
  ];

  return (
    <Select
      label={t().theme}
      value={theme()}
      onChange={(value) => setTheme(value as Theme)}
      options={options()}
    />
  );
}

export default ThemeSwitcher;
