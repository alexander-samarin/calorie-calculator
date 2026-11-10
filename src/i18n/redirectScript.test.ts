import { describe, expect, it } from "vitest";
import { localeRedirectScript } from "./redirectScript";

const CHROME =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

/** Runs the inline script with fake browser globals; returns the redirect target */
const run = ({
  userAgent = CHROME,
  language = "en-US",
  saved = null as string | null,
  search = "",
  hash = "",
} = {}): string | null => {
  let target: string | null = null;
  const navigator = { userAgent, language };
  const localStorage = { getItem: () => saved };
  const location = {
    search,
    hash,
    replace: (url: string) => {
      target = url;
    },
  };
  new Function("navigator", "localStorage", "location", localeRedirectScript)(
    navigator,
    localStorage,
    location,
  );
  return target;
};

describe("localeRedirectScript", () => {
  it("redirects to the browser language", () => {
    expect(run({ language: "en-US" })).toBe("/en");
    expect(run({ language: "de" })).toBe("/de");
  });

  it("stays on / for the default locale and unknown languages", () => {
    expect(run({ language: "ru-RU" })).toBeNull();
    expect(run({ language: "ja-JP" })).toBeNull();
  });

  it("prefers the saved locale over the browser language", () => {
    expect(run({ language: "en-US", saved: "fr" })).toBe("/fr");
    expect(run({ language: "en-US", saved: "ru" })).toBeNull();
  });

  it("ignores an invalid saved locale", () => {
    expect(run({ language: "pl-PL", saved: "xx" })).toBe("/pl");
  });

  it("keeps query and hash", () => {
    expect(run({ search: "?utm_source=tg", hash: "#calc" })).toBe(
      "/en?utm_source=tg#calc",
    );
  });

  it.each([
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/140.0.0.0 Safari/537.36",
  ])("never redirects crawlers: %s", (userAgent) => {
    expect(run({ userAgent, language: "en-US" })).toBeNull();
  });
});
