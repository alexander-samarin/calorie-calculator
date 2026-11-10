import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { LOCALES, DEFAULT_LOCALE } from "./src/i18n/types.ts";

export default defineConfig({
  plugins: [solidStart(), nitro(), tailwindcss()],
  nitro: {
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/404",
        ...LOCALES.filter((lang) => lang !== DEFAULT_LOCALE).map(
          (lang) => `/${lang}`,
        ),
      ],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },
});
