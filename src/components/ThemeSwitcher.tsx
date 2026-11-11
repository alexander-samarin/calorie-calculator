import { For } from "solid-js";
import { useTheme, type Theme } from "~/theme";
import { useLocale } from "~/i18n";

type ThemeOption = {
  value: Theme;
  labelKey: "themeSystem" | "themeLight" | "themeDark";
  /** Heroicons outline path */
  icon: string;
};

const THEME_OPTIONS: ThemeOption[] = [
  {
    value: "system",
    labelKey: "themeSystem",
    icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
  },
  {
    value: "light",
    labelKey: "themeLight",
    icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
  },
  {
    value: "dark",
    labelKey: "themeDark",
    icon: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z",
  },
];

/** Compact icon-only theme picker (radio group) for the footer */
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  return (
    <fieldset class="flex gap-1 p-1 rounded-full bg-base-200">
      <legend class="sr-only">{t().theme}</legend>
      <For each={THEME_OPTIONS}>
        {(option) => (
          <label
            title={t()[option.labelKey]}
            class="btn btn-ghost btn-circle [--size:2.75rem] text-base-content/60 has-checked:bg-base-100 has-checked:text-base-content has-checked:shadow-sm has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary"
          >
            <input
              type="radio"
              name="theme"
              class="sr-only"
              value={option.value}
              checked={theme() === option.value}
              onChange={() => setTheme(option.value)}
            />
            <span class="sr-only">{t()[option.labelKey]}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              class="size-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d={option.icon} />
            </svg>
          </label>
        )}
      </For>
    </fieldset>
  );
}

export default ThemeSwitcher;
