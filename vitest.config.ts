import { defineConfig } from "vitest/config";

// Unit tests for pure logic (formulas, parsing, i18n helpers).
// Separate from vite.config.ts so tests do not load the SolidStart/Nitro plugins.
export default defineConfig({
  resolve: {
    alias: {
      "~": decodeURIComponent(new URL("./src", import.meta.url).pathname),
    },
  },
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
});
