import { For } from "solid-js";
import { AVAILABLE_LOCALES, useLocale } from "~/i18n";

const getLocalePath = (code: string): string => {
  return code === "en" ? "/" : `/${code}`;
};

const currentYear = new Date().getFullYear();

function Footer() {
  const { t } = useLocale();

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
