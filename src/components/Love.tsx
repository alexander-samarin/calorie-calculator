import { useLocale } from "~/i18n";

function Love() {
  const { t } = useLocale();

  return (
    <section class="prose prose-sm text-center mt-8">
      <p>
        {t().madeWith} <br />{" "}
        <a
          href="https://t.me/zhirno_ne_budet"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t().channelName}
        </a>
      </p>
    </section>
  );
}

export default Love;
