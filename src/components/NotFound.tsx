import { A } from "@solidjs/router";
import { Meta, Title } from "@solidjs/meta";
import { getLocalePath, useLocale } from "~/i18n";

function NotFound() {
  const { t, locale } = useLocale();

  return (
    <main class="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <Title>{`404 — ${t().notFoundTitle}`}</Title>
      <Meta name="robots" content="noindex" />
      <h1 class="text-8xl font-bold text-primary mb-4">404</h1>
      <p class="text-xl font-semibold mb-2">{t().notFoundTitle}</p>
      <p class="text-base-content/70 mb-8">{t().notFoundText}</p>
      <A href={getLocalePath(locale())} class="btn btn-primary">
        {t().goHome}
      </A>
    </main>
  );
}

export default NotFound;
