import { For } from "solid-js";
import { useLocale } from "~/i18n";
import { getFaq } from "~/content/jsonld";

/** Visible FAQ, rendered from the same data as the FAQPage JSON-LD */
function Faq() {
  const { t, locale } = useLocale();

  return (
    <>
      <h2 class="text-lg">{t().faqTitle}</h2>
      <For each={getFaq(locale())}>
        {(item) => (
          <>
            <h3 class="text-lg">{item.question}</h3>
            <p>{item.answer}</p>
          </>
        )}
      </For>
    </>
  );
}

export default Faq;
