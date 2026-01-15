import { Suspense } from "solid-js";
import { Dynamic } from "solid-js/web";
import { useLocale } from "~/i18n";
import { getSeoComponent } from "~/content/seo";

function Seo() {
  const { locale } = useLocale();

  return (
    <section class="prose prose-sm mt-8 max-w-4xl">
      <Suspense fallback={<div class="loading loading-spinner" />}>
        <Dynamic component={getSeoComponent(locale())} />
      </Suspense>
    </section>
  );
}

export default Seo;
