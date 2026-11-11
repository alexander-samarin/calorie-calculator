import { For } from "solid-js";
import { AVAILABLE_LOCALES, getLocalePath, useLocale } from "~/i18n";
import { storage } from "~/helpers";
import { LOCALE_STORAGE_KEY } from "~/constants";

const currentYear = new Date().getFullYear();

function Footer() {
  const { t } = useLocale();

  const handleLangClick = (locale: string) => {
    storage.set(LOCALE_STORAGE_KEY, locale);
  };

  return (
    <footer class="w-full border-t border-base-300 py-3">
      <nav class="max-w-2xl mx-auto px-4">
        <ul class="flex flex-wrap justify-center gap-x-4 text-sm">
          <For each={AVAILABLE_LOCALES}>
            {(lang) => (
              <li>
                <a
                  href={getLocalePath(lang.value)}
                  class="inline-flex items-center min-h-11 text-base-content/70 hover:text-primary transition-colors"
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
      <p class="text-center text-xs text-base-content/50 mt-2 px-4">
        © {currentYear} CalorieCalc.cc. {t().copyright}
      </p>
    </footer>
  );
}

export default Footer;
