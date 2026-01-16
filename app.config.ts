import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { LOCALES, DEFAULT_LOCALE } from "./src/i18n/types";

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/404",
        ...LOCALES.filter((lang) => lang !== DEFAULT_LOCALE).map((lang) => `/${lang}`),
      ],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
