import { defineConfig } from "vitest/config";

// Unit tests for pure logic (formulas, parsing, i18n helpers).
// Separate from app.config.ts: the SolidStart/vinxi config is not a Vite config.
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
