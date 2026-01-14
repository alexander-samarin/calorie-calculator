import { For } from "solid-js";
import { useLocale, AVAILABLE_LOCALES } from "../i18n";
import type { Locale } from "../i18n";

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <select
      class="select select-sm mt-8 opacity-50 hover:opacity-100 transition-opacity"
      value={locale()}
      onChange={(e) => setLocale(e.currentTarget.value as Locale)}
    >
      <For each={AVAILABLE_LOCALES}>
        {(lang) => <option value={lang.value}>{lang.label}</option>}
      </For>
    </select>
  );
}

export default LanguageSwitcher;
