import { Suspense, ErrorBoundary } from "solid-js";
import { Dynamic } from "solid-js/web";
import { useLocale } from "~/i18n";
import { getSeoComponent } from "~/content/seo";
import Faq from "./Faq";

function Seo() {
  const { locale } = useLocale();

  return (
    <section class="prose prose-sm mt-8 md:mt-12 max-w-4xl">
      <ErrorBoundary fallback={null}>
        <Suspense fallback={<div class="loading loading-spinner" />}>
          <Dynamic component={getSeoComponent(locale())} />
        </Suspense>
      </ErrorBoundary>
      <Faq />
    </section>
  );
}

export default Seo;
