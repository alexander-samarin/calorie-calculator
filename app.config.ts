import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

const LOCALES = ["en", "ru", "pl", "de", "es", "it", "fr", "uk", "be"];

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      routes: ["/", "/404", ...LOCALES.map((lang) => `/${lang}`)],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
