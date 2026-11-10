// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { getRequestEvent } from "solid-js/web";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "~/i18n";
import { localeRedirectScript } from "~/i18n/redirectScript";
import { themeInitScript } from "~/theme/script";

const getLocaleFromPath = (path: string): Locale => {
  const segments = path.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment && LOCALES.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return DEFAULT_LOCALE;
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content"
            />
            {pathname === "/" && <script innerHTML={localeRedirectScript} />}
            <script innerHTML={themeInitScript} />
            {assets}
            <link
              rel="icon"
              type="image/png"
              href="/favicon-96x96.png"
              sizes="96x96"
            />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta
              name="theme-color"
              media="(prefers-color-scheme: light)"
              content="#fafafa"
            />
            <meta
              name="theme-color"
              media="(prefers-color-scheme: dark)"
              content="#393c4a"
            />
            {/* Analytics: loaded once per document; client-side navigations
                are counted by PageviewTracker (src/app.tsx) */}
            <script
              data-goatcounter="https://giddy1327.goatcounter.com/count"
              async
              src="https://gc.zgo.at/count.js"
            />
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
