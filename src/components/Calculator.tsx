import { For } from "solid-js";
import BmiDisplay from "./BmiDisplay";
import NumberInput from "./NumberInput";
import RangeInput from "./RangeInput";
import Select from "./Select";
import StatCard from "./StatCard";
import {
  GENDER_OPTIONS,
  ACTIVITY_OPTIONS,
  GOAL_OPTIONS,
  PROTEIN_PER_KG,
  FAT_PER_KG,
  PLACEHOLDERS,
  type GenderValue,
  type ActivityValue,
} from "~/constants";
import { useLocale, usePluralizeGrams } from "~/i18n";
import { useCalculator } from "~/hooks/useCalculator";

function Calculator() {
  const { t } = useLocale();
  const pluralizeGrams = usePluralizeGrams();

  const {
    weight,
    setWeight,
    height,
    setHeight,
    age,
    setAge,
    gender,
    setGender,
    activity,
    setActivity,
    goal,
    setGoal,
    proteinPerKg,
    setProteinPerKg,
    fatPerKg,
    setFatPerKg,
    bmr,
    baseTdee,
    tdee,
    proteins,
    fats,
    carbs,
    clearData,
  } = useCalculator();

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
      <div class="stats grid grid-cols-3 w-full max-w-md md:max-w-xl mb-2 md:mb-4 bg-base-100 shadow-xl">
        <StatCard
          title={t().basalMetabolism}
          value={Math.round(bmr())}
          unit={t().kcal}
        />
        <StatCard
          title={t().dailyExpenditure}
          value={Math.round(baseTdee())}
          unit={t().kcal}
        />
        <StatCard
          title={t().yourNorm}
          value={Math.round(tdee())}
          unit={t().kcal}
          isPrimary={true}
        />
      </div>

      <div class="stats grid grid-cols-3 w-full max-w-md md:max-w-xl mb-2 md:mb-4 bg-base-100 shadow-xl">
        <StatCard
          title={t().proteins}
          value={proteins()}
          unit={pluralizeGrams(proteins())}
        />
        <StatCard
          title={t().fats}
          value={fats()}
          unit={pluralizeGrams(fats())}
        />
        <StatCard
          title={t().carbs}
          value={carbs()}
          unit={pluralizeGrams(carbs())}
        />
      </div>

      <BmiDisplay weight={weight} height={height} />

      <div class="flex flex-col gap-2 w-full max-w-md mx-auto mt-8">
        <div class="flex gap-2">
          <For each={GENDER_OPTIONS}>
            {(option) => (
              <button
                class={`btn btn-lg ${
                  gender() === option.value ? "btn-primary" : ""
                }`}
                onClick={() => setGender(option.value as GenderValue)}
              >
                {t()[option.labelKey]}
              </button>
            )}
          </For>
        </div>

        <NumberInput
          label={t().weight}
          value={weight()}
          onInput={setWeight}
          placeholder={PLACEHOLDERS.WEIGHT}
        />

        <NumberInput
          label={t().height}
          value={height()}
          onInput={setHeight}
          placeholder={PLACEHOLDERS.HEIGHT}
        />

        <NumberInput
          label={t().age}
          value={age()}
          onInput={setAge}
          placeholder={PLACEHOLDERS.AGE}
        />

        <Select
          label={t().activity}
          value={activity()}
          onChange={(value) => setActivity(Number(value) as ActivityValue)}
          options={activityOptions()}
        />

        <Select
          label={t().goal}
          value={goal()}
          onChange={(value) => setGoal(Number(value))}
          options={goalOptions()}
        />

        <RangeInput
          label={t().proteinPerKg}
          valueLabel={`${proteinPerKg()} ${t().gramShort}`}
          value={proteinPerKg()}
          min={PROTEIN_PER_KG.MIN}
          max={PROTEIN_PER_KG.MAX}
          step={PROTEIN_PER_KG.STEP}
          onChange={setProteinPerKg}
        />

        <RangeInput
          label={t().fatPerKg}
          valueLabel={`${fatPerKg()} ${t().gramShort}`}
          value={fatPerKg()}
          min={FAT_PER_KG.MIN}
          max={FAT_PER_KG.MAX}
          step={FAT_PER_KG.STEP}
          onChange={setFatPerKg}
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
