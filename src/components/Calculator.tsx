import { For } from "solid-js";
import BmiDisplay from "./BmiDisplay";
import NumberInput from "./NumberInput";
import RangeInput from "./RangeInput";
import Select from "./Select";
import StatsRow from "./StatsRow";
import {
  GENDER_OPTIONS,
  ACTIVITY_OPTIONS,
  GOAL_OPTIONS,
  PROTEIN_PER_KG,
  FAT_PER_KG,
  PLACEHOLDERS,
  INPUT_LIMITS,
  type InputLimits,
} from "~/constants";
import { useLocale, usePluralizeGrams } from "~/i18n";
import { useCalculator } from "~/hooks/useCalculator";
import { isOutOfRange, findOptionValue } from "~/helpers";

function Calculator() {
  const { t } = useLocale();
  const pluralizeGrams = usePluralizeGrams();

  const { state, setField, weightKg, heightCm, result, clearData } =
    useCalculator();

  const rangeHint = (limits: InputLimits) =>
    t()
      .rangeHint.replace("{min}", String(limits.MIN))
      .replace("{max}", String(limits.MAX));

  const activityOptions = () =>
    ACTIVITY_OPTIONS.map((opt) => ({
      label: t()[opt.labelKey],
      value: opt.value,
    }));

  const goalOptions = () =>
    GOAL_OPTIONS.map((opt) => ({
      label: opt.labelKey ? t()[opt.labelKey] : "---",
      value: opt.value,
      disabled: opt.disabled,
    }));

  return (
    <section class="flex flex-col items-center w-full">
      <StatsRow
        items={[
          { title: t().basalMetabolism, value: Math.round(result().bmr), unit: t().kcal },
          { title: t().dailyExpenditure, value: result().baseTdee, unit: t().kcal },
          { title: t().yourNorm, value: result().tdee, unit: t().kcal, isPrimary: true },
        ]}
      />

      <StatsRow
        items={[
          { title: t().proteins, value: result().proteins, unit: pluralizeGrams(result().proteins) },
          { title: t().fats, value: result().fats, unit: pluralizeGrams(result().fats) },
          { title: t().carbs, value: result().carbs, unit: pluralizeGrams(result().carbs) },
        ]}
      />

      <BmiDisplay weightKg={weightKg()} heightCm={heightCm()} />

      <div class="flex flex-col gap-2 w-full max-w-md mx-auto mt-8">
        <div class="flex gap-2">
          <For each={GENDER_OPTIONS}>
            {(option) => (
              <button
                class={`btn btn-lg ${
                  state.gender === option.value ? "btn-primary" : ""
                }`}
                onClick={() => setField("gender", option.value)}
              >
                {t()[option.labelKey]}
              </button>
            )}
          </For>
        </div>

        <NumberInput
          label={t().weight}
          value={state.weight}
          onInput={(value) => setField("weight", value)}
          placeholder={PLACEHOLDERS.WEIGHT}
          invalid={isOutOfRange(state.weight, INPUT_LIMITS.WEIGHT)}
          errorText={rangeHint(INPUT_LIMITS.WEIGHT)}
        />

        <NumberInput
          label={t().height}
          value={state.height}
          onInput={(value) => setField("height", value)}
          placeholder={PLACEHOLDERS.HEIGHT}
          invalid={isOutOfRange(state.height, INPUT_LIMITS.HEIGHT)}
          errorText={rangeHint(INPUT_LIMITS.HEIGHT)}
        />

        <NumberInput
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
          options={goalOptions()}
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
      </div>

      <p class="text-xs w-full max-w-sm text-base-content/60 text-center mt-6">
        {t().privacyNote}
      </p>

      <button
        class="btn btn-ghost btn-sm text-base-content/60 mt-4 max-w-fit"
        onClick={clearData}
      >
        {t().clearData}
      </button>
    </section>
  );
}

export default Calculator;
