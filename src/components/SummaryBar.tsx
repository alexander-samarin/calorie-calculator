import { For } from "solid-js";
import { useLocale } from "~/i18n";

type SummaryBarProps = {
  show: boolean;
  tdee: number;
  proteins: number;
  fats: number;
  carbs: number;
};

/**
 * Compact copy of the results pinned to the top on mobile, shown while the
 * full result cards are scrolled out of view (e.g. when editing the form).
 * Hidden from assistive tech: it duplicates the cards above.
 */
function SummaryBar(props: SummaryBarProps) {
  const { t } = useLocale();

  const macros = () => [
    { label: t().proteins, value: props.proteins },
    { label: t().fats, value: props.fats },
    { label: t().carbs, value: props.carbs },
  ];

  return (
    <div
      aria-hidden="true"
      class="fixed inset-x-0 top-0 z-10 md:hidden bg-base-100/95 backdrop-blur shadow-md pt-[env(safe-area-inset-top)] motion-safe:transition-[translate,visibility] motion-safe:duration-200"
      classList={{ "-translate-y-full invisible": !props.show }}
    >
      <div class="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-1 max-w-md mx-auto p-2 text-center leading-tight">
        <div class="rounded-box bg-primary text-primary-content py-1">
          <div class="text-xs hyphens-auto">{t().yourNorm}</div>
          <div class="font-bold">
            {props.tdee} <span class="text-xs font-normal">{t().kcal}</span>
          </div>
        </div>
        <For each={macros()}>
          {(item) => (
            <div class="py-1 min-w-0">
              <div class="text-xs text-base-content/70 hyphens-auto break-words">
                {item.label}
              </div>
              <div class="font-bold">
                {item.value}{" "}
                <span class="text-xs font-normal">{t().gramShort}</span>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default SummaryBar;
