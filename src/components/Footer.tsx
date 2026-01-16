import { For } from "solid-js";
import { AVAILABLE_LOCALES, DEFAULT_LOCALE, useLocale } from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

const getLocalePath = (code: string): string => {
  return code === DEFAULT_LOCALE ? "/" : `/${code}`;
};

const currentYear = new Date().getFullYear();

function Footer() {
  const { t } = useLocale();

  const handleLangClick = (locale: string) => {
    storage.set(LOCALE_STORAGE_KEY, locale);
  };

  return (
    <footer class="w-full border-t border-base-300 py-6">
      <nav class="max-w-2xl mx-auto px-4">
        <ul class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          <For each={AVAILABLE_LOCALES}>
            {(lang) => (
              <li>
                <a
                  href={getLocalePath(lang.value)}
                  class="text-base-content/70 hover:text-primary transition-colors"
                  hreflang={lang.value}
                  onClick={() => handleLangClick(lang.value)}
                >
                  {lang.label}
                </a>
              </li>
            )}
          </For>
        </ul>
      </nav>
      <p class="text-center text-xs text-base-content/50 mt-4 px-4">
        © {currentYear} CalorieCalc.cc. {t().copyright}
      </p>
    </footer>
  );
}

export default Footer;
