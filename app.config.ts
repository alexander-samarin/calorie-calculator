import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { LOCALES } from "./src/i18n/types";

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/404",
        ...LOCALES.filter((lang) => lang !== "en").map((lang) => `/${lang}`),
      ],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
