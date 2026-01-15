// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { getRequestEvent } from "solid-js/web";
import { LOCALES, type Locale } from "~/i18n";

const getLocaleFromPath = (path: string): Locale => {
  const segments = path.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment && LOCALES.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return "en";
};

const getPathnameFromUrl = (url: string | undefined): string => {
  if (!url) return "/";
  try {
    return new URL(url).pathname;
  } catch {
    return "/";
  }
};

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => {
      const event = getRequestEvent();
      const pathname = getPathnameFromUrl(event?.request?.url);
      const lang = getLocaleFromPath(pathname);

      return (
        <html lang={lang}>
          <head>
            <meta charset="utf-8" />
            {assets}
          </head>
          <body>
            <div id="app">{children}</div>
            {scripts}
          </body>
        </html>
      );
    }}
  />
));
