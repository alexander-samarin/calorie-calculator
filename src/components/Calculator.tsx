import { createSignal, createEffect, createMemo, For, onMount } from "solid-js";
import NumberInput from "./NumberInput";
import RangeInput from "./RangeInput";
import Select from "./Select";
import StatCard from "./StatCard";
import {
  GENDER_OPTIONS,
  ACTIVITY_OPTIONS,
  GOAL_OPTIONS,
  MIFFLIN_COEFFICIENTS,
  CALORIES_PER_GRAM,
  PROTEIN_PER_KG,
  FAT_PER_KG,
  PLACEHOLDERS,
  type GenderValue,
  type ActivityValue,
} from "~/constants";
import { storage } from "~/helpers";
import { useLocale, usePluralizeGrams } from "~/i18n";

function Calculator() {
  const { t } = useLocale();
  const pluralizeGrams = usePluralizeGrams();

  // Initialize with defaults, load from localStorage on mount
  const [weight, setWeight] = createSignal("");
  const [height, setHeight] = createSignal("");
  const [age, setAge] = createSignal("");
  const [gender, setGender] = createSignal<GenderValue>(
    GENDER_OPTIONS[0].value
  );
  const [activity, setActivity] = createSignal<ActivityValue>(
    ACTIVITY_OPTIONS[0].value
  );
  const [goal, setGoal] = createSignal<number>(GOAL_OPTIONS[0].value);
  const [proteinPerKg, setProteinPerKg] = createSignal<number>(
    PROTEIN_PER_KG.DEFAULT
  );
  const [fatPerKg, setFatPerKg] = createSignal<number>(FAT_PER_KG.DEFAULT);
  const [isHydrated, setIsHydrated] = createSignal(false);

  // Load saved values from localStorage after mount
  onMount(() => {
    const savedWeight = storage.get("weight");
    const savedHeight = storage.get("height");
    const savedAge = storage.get("age");
    const savedGender = storage.get("gender");
    const savedActivity = storage.get("activity");
    const savedGoal = storage.get("goal");
    const savedProteinPerKg = storage.get("proteinPerKg");
    const savedFatPerKg = storage.get("fatPerKg");

    if (savedWeight) setWeight(savedWeight);
    if (savedHeight) setHeight(savedHeight);
    if (savedAge) setAge(savedAge);
    if (savedGender) setGender(savedGender as GenderValue);
    if (savedActivity) setActivity(Number(savedActivity) as ActivityValue);
    if (savedGoal) setGoal(Number(savedGoal));
    if (savedProteinPerKg) setProteinPerKg(Number(savedProteinPerKg));
    if (savedFatPerKg) setFatPerKg(Number(savedFatPerKg));

    setIsHydrated(true);
  });

  const bmr = createMemo(() => {
    const w = Number(weight());
    const h = Number(height());
    const a = Number(age());

    if (!w || !h || !a) return 0;

    const { WEIGHT, HEIGHT, AGE, FEMALE_OFFSET, MALE_OFFSET } =
      MIFFLIN_COEFFICIENTS;
    const baseBmr = WEIGHT * w + HEIGHT * h - AGE * a;

    return gender() === GENDER_OPTIONS[0].value
      ? baseBmr + FEMALE_OFFSET
      : baseBmr + MALE_OFFSET;
  });

  const baseTdee = createMemo(() => {
    const base = bmr();
    return base > 0 ? Math.round(base * activity()) : 0;
  });

  const tdee = createMemo(() => {
    const base = baseTdee();
    return base > 0 ? Math.round(base * goal()) : 0;
  });

  const proteins = createMemo(() => {
    return bmr() > 0 ? Math.round(Number(weight()) * proteinPerKg()) : 0;
  });

  const fats = createMemo(() => {
    return bmr() > 0 ? Math.round(Number(weight()) * fatPerKg()) : 0;
  });

  const carbs = createMemo(() => {
    if (bmr() <= 0) return 0;

    const { PROTEIN, FAT, CARB } = CALORIES_PER_GRAM;
    const remainingCalories = tdee() - proteins() * PROTEIN - fats() * FAT;

    return Math.max(0, Math.round(remainingCalories / CARB));
  });

  // Save to localStorage only after hydration to avoid overwriting with defaults
  createEffect(() => {
    if (!isHydrated()) return;

    storage.set("weight", weight());
    storage.set("height", height());
    storage.set("age", age());
    storage.set("gender", gender());
    storage.set("activity", String(activity()));
    storage.set("goal", String(goal()));
    storage.set("proteinPerKg", String(proteinPerKg()));
    storage.set("fatPerKg", String(fatPerKg()));
  });

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

  const clearData = () => {
    // Reset all values to defaults
    setWeight("");
    setHeight("");
    setAge("");
    setGender(GENDER_OPTIONS[0].value);
    setActivity(ACTIVITY_OPTIONS[0].value);
    setGoal(GOAL_OPTIONS[0].value);
    setProteinPerKg(PROTEIN_PER_KG.DEFAULT);
    setFatPerKg(FAT_PER_KG.DEFAULT);

    // Clear localStorage
    storage.set("weight", "");
    storage.set("height", "");
    storage.set("age", "");
    storage.set("gender", "");
    storage.set("activity", "");
    storage.set("goal", "");
    storage.set("proteinPerKg", "");
    storage.set("fatPerKg", "");
  };

  return (
    <section class="flex flex-col items-center w-full">
      <div class="stats grid grid-cols-3 w-full max-w-md md:max-w-xl mb-4 bg-base-100 shadow-xl">
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

      <div class="stats grid grid-cols-3 w-full max-w-md md:max-w-xl mb-8 bg-base-100 shadow-xl">
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

      <div class="flex flex-col gap-2 w-full max-w-md mx-auto">
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

      <button
        class="btn btn-ghost btn-sm text-base-content/50 mt-4 mb-2 max-w-fit"
        onClick={clearData}
      >
        {t().clearData}
      </button>

      <p class="text-xs w-full max-w-sm text-base-content/50 text-center">
        {t().privacyNote}
      </p>
    </section>
  );
}

export default Calculator;
