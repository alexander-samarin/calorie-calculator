import { For } from "solid-js";
import { AVAILABLE_LOCALES } from "~/i18n";

const getLocalePath = (code: string): string => {
  return code === "en" ? "/" : `/${code}`;
};

function Footer() {
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
    </footer>
  );
}

export default Footer;
