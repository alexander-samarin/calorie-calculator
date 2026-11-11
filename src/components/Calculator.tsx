import { createSignal, For, onCleanup, onMount, Show } from "solid-js";
import BmiDisplay from "./BmiDisplay";
import NumberInput from "./NumberInput";
import RangeInput from "./RangeInput";
import Select from "./Select";
import StatsRow from "./StatsRow";
import SummaryBar from "./SummaryBar";
import {
  GENDER_OPTIONS,
  ACTIVITY_OPTIONS,
  GOAL_OPTIONS,
  GOAL_GROUPS,
  PROTEIN_PER_KG,
  FAT_PER_KG,
  PLACEHOLDERS,
  INPUT_LIMITS,
  type InputLimits,
} from "~/constants";
import { useLocale, usePluralizeGrams } from "~/i18n";
import { useCalculator, type CalculatorState } from "~/hooks/useCalculator";
import { isOutOfRange, findOptionValue } from "~/helpers";

/** Below this share of the result cards on screen the summary bar shows */
const RESULTS_VISIBLE_RATIO = 0.25;

/** How long the undo toast stays (paused while it has focus) */
const UNDO_TIMEOUT_MS = 6000;

function Calculator() {
  const { t } = useLocale();
  const pluralizeGrams = usePluralizeGrams();

  const {
    state,
    setField,
    weightKg,
    heightCm,
    result,
    clearData,
    restoreData,
    isHydrated,
  } = useCalculator();

  // "Data cleared · Undo" toast: keeps the cleared values for a few seconds
  const [undoSnapshot, setUndoSnapshot] = createSignal<CalculatorState | null>(
    null,
  );
  let undoTimer: ReturnType<typeof setTimeout> | undefined;
  const startUndoTimer = () => {
    clearTimeout(undoTimer);
    undoTimer = setTimeout(() => setUndoSnapshot(null), UNDO_TIMEOUT_MS);
  };
  onCleanup(() => clearTimeout(undoTimer));

  const handleClear = () => {
    const snapshot = clearData();
    if (!snapshot) return;
    setUndoSnapshot(snapshot);
    startUndoTimer();
  };

  const handleUndo = () => {
    const snapshot = undoSnapshot();
    clearTimeout(undoTimer);
    setUndoSnapshot(null);
    if (snapshot) restoreData(snapshot);
  };

  /** No valid weight/height/age yet: cards show dashes instead of zeros */
  const isEmpty = () => result().tdee === 0;
  // A real 0 (carbs clamped to 0) must still show as 0
  const shown = (value: number) => (isEmpty() ? null : value);

  let weightInput: HTMLInputElement | undefined;
  let heightInput: HTMLInputElement | undefined;
  let ageInput: HTMLInputElement | undefined;

  const focusForm = () => {
    if (!weightInput) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    weightInput.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
    // Same tap, so mobile browsers open the keyboard
    weightInput.focus({ preventScroll: true });
  };

  // The summary bar appears once the result cards are scrolled past (above
  // the viewport) while the calculator itself is still on screen
  let sectionRef: HTMLElement | undefined;
  let resultsRef: HTMLDivElement | undefined;
  const [resultsScrolledPast, setResultsScrolledPast] = createSignal(false);
  const [sectionOnScreen, setSectionOnScreen] = createSignal(true);

  onMount(() => {
    if (!sectionRef || !resultsRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === resultsRef) {
            // Mostly scrolled away is enough: a leftover strip is not readable
            setResultsScrolledPast(
              entry.intersectionRatio < RESULTS_VISIBLE_RATIO &&
                entry.boundingClientRect.top < 0,
            );
          } else {
            setSectionOnScreen(entry.isIntersecting);
          }
        }
      },
      { threshold: [0, RESULTS_VISIBLE_RATIO] },
    );
    observer.observe(resultsRef);
    observer.observe(sectionRef);
    onCleanup(() => observer.disconnect());
  });

  const rangeHint = (limits: InputLimits) =>
    t()
      .rangeHint.replace("{min}", String(limits.MIN))
      .replace("{max}", String(limits.MAX));

  const activityOptions = () =>
    ACTIVITY_OPTIONS.map((opt) => ({
      label: t()[opt.labelKey],
      value: opt.value,
    }));

  const goalGroups = () =>
    GOAL_GROUPS.map((group) => ({
      label: group.labelKey ? t()[group.labelKey] : null,
      options: group.options.map((opt) => ({
        label: t()[opt.labelKey],
        value: opt.value,
      })),
    }));

  return (
    <section ref={sectionRef} class="flex flex-col items-center w-full">
      <SummaryBar
        show={resultsScrolledPast() && sectionOnScreen() && result().tdee > 0}
        tdee={result().tdee}
        proteins={result().proteins}
        fats={result().fats}
        carbs={result().carbs}
      />

      <div ref={resultsRef} class="flex flex-col items-center w-full">
        <StatsRow
          items={[
            {
              title: t().basalMetabolism,
              value: shown(Math.round(result().bmr)),
              unit: t().kcal,
            },
            {
              title: t().dailyExpenditure,
              value: shown(result().baseTdee),
              unit: t().kcal,
            },
            {
              title: t().yourNorm,
              value: shown(result().tdee),
              unit: t().kcal,
              isPrimary: true,
            },
          ]}
        />

        <StatsRow
          items={[
            {
              title: t().proteins,
              value: shown(result().proteins),
              unit: pluralizeGrams(result().proteins),
            },
            {
              title: t().fats,
              value: shown(result().fats),
              unit: pluralizeGrams(result().fats),
            },
            {
              title: t().carbs,
              value: shown(result().carbs),
              unit: pluralizeGrams(result().carbs),
            },
          ]}
        />
      </div>

      <Show when={result().macrosExceedTarget}>
        <div
          role="status"
          class="alert alert-warning alert-soft w-full max-w-md md:max-w-xl mb-2 md:mb-4 text-sm"
        >
          {t().macrosExceedWarning}
        </div>
      </Show>

      <BmiDisplay weightKg={weightKg()} heightCm={heightCm()} />

      {/* Fixed-height slot (the former mt-8 gap): the hint never shifts layout.
          Waits for hydration so returning visitors don't see it flash. */}
      <div class="h-8 flex items-center">
        <Show when={isHydrated() && isEmpty()}>
          <button
            type="button"
            class="btn btn-ghost btn-sm font-medium text-base-content/80"
            onClick={focusForm}
          >
            {t().fillFormHint}{" "}
            <span aria-hidden="true" class="text-primary">
              ↓
            </span>
          </button>
        </Show>
      </div>

      <div class="flex flex-col gap-2 w-full max-w-md mx-auto">
        <fieldset class="grid grid-cols-2 gap-2">
          <legend class="sr-only">{t().gender}</legend>
          <For each={GENDER_OPTIONS}>
            {(option) => (
              <label
                class="btn btn-lg has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary"
                classList={{ "btn-primary": state.gender === option.value }}
              >
                <input
                  type="radio"
                  name="gender"
                  class="sr-only"
                  value={option.value}
                  checked={state.gender === option.value}
                  onChange={() => setField("gender", option.value)}
                />
                {t()[option.labelKey]}
              </label>
            )}
          </For>
        </fieldset>

        <NumberInput
          ref={weightInput}
          enterKeyHint="next"
          onNext={() => heightInput?.focus()}
          label={t().weight}
          value={state.weight}
          onInput={(value) => setField("weight", value)}
          placeholder={PLACEHOLDERS.WEIGHT}
          invalid={isOutOfRange(state.weight, INPUT_LIMITS.WEIGHT)}
          errorText={rangeHint(INPUT_LIMITS.WEIGHT)}
        />

        <NumberInput
          ref={heightInput}
          enterKeyHint="next"
          onNext={() => ageInput?.focus()}
          label={t().height}
          value={state.height}
          onInput={(value) => setField("height", value)}
          placeholder={PLACEHOLDERS.HEIGHT}
          invalid={isOutOfRange(state.height, INPUT_LIMITS.HEIGHT)}
          errorText={rangeHint(INPUT_LIMITS.HEIGHT)}
        />

        <NumberInput
          ref={ageInput}
          inputMode="numeric"
          enterKeyHint="done"
          label={t().age}
          value={state.age}
          onInput={(value) => setField("age", value)}
          placeholder={PLACEHOLDERS.AGE}
          invalid={isOutOfRange(state.age, INPUT_LIMITS.AGE)}
          errorText={rangeHint(INPUT_LIMITS.AGE)}
        />

        <Select
          label={t().activity}
          value={state.activity}
          onChange={(value) => {
            const activity = findOptionValue(ACTIVITY_OPTIONS, value);
            if (activity !== null) setField("activity", activity);
          }}
          options={activityOptions()}
        />

        <Select
          label={t().goal}
          value={state.goal}
          onChange={(value) => {
            const goal = findOptionValue(GOAL_OPTIONS, value);
            if (goal !== null) setField("goal", goal);
          }}
          options={goalGroups()}
        />

        <RangeInput
          label={t().proteinPerKg}
          valueLabel={`${state.proteinPerKg} ${t().gramShort}`}
          value={state.proteinPerKg}
          min={PROTEIN_PER_KG.MIN}
          max={PROTEIN_PER_KG.MAX}
          step={PROTEIN_PER_KG.STEP}
          onChange={(value) => setField("proteinPerKg", value)}
        />

        <RangeInput
          label={t().fatPerKg}
          valueLabel={`${state.fatPerKg} ${t().gramShort}`}
          value={state.fatPerKg}
          min={FAT_PER_KG.MIN}
          max={FAT_PER_KG.MAX}
          step={FAT_PER_KG.STEP}
          onChange={(value) => setField("fatPerKg", value)}
        />

        <Show when={result().macroWeightAdjusted}>
          <p class="text-xs text-base-content/70 px-4">
            {t().macroWeightNote.replace(
              "{weight}",
              String(Math.round(result().macroWeightKg)),
            )}
          </p>
        </Show>
      </div>

      <p class="text-xs w-full max-w-sm text-base-content/60 text-center mt-6">
        {t().privacyNote}
      </p>

      <button
        class="btn btn-ghost btn-sm [--size:2.75rem] text-base-content/60 mt-4 max-w-fit"
        onClick={handleClear}
      >
        {t().clearData}
      </button>

      {/* Always in the DOM so screen readers announce the message */}
      <div
        role="status"
        class="toast toast-center toast-bottom z-20 pb-[calc(1rem+env(safe-area-inset-bottom))]"
        onFocusIn={() => clearTimeout(undoTimer)}
        onFocusOut={() => {
          if (undoSnapshot()) startUndoTimer();
        }}
      >
        <Show when={undoSnapshot()}>
          <div class="alert bg-neutral text-neutral-content border-none shadow-lg gap-4 py-2 pr-2">
            <span>{t().dataCleared}</span>
            <button
              type="button"
              class="btn btn-primary btn-sm [--size:2.75rem]"
              onClick={handleUndo}
            >
              {t().undo}
            </button>
          </div>
        </Show>
      </div>
    </section>
  );
}

export default Calculator;
