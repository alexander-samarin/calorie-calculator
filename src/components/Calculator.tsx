import { createSignal, createEffect, createMemo, For } from "solid-js";
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
} from "~/constants";
import { storage } from "~/helpers";
import { useLocale, usePluralizeGrams } from "~/i18n";

const getInitialState = () => ({
  weight: storage.get("weight") || "",
  height: storage.get("height") || "",
  age: storage.get("age") || "",
  gender: storage.get("gender") || GENDER_OPTIONS[0].value,
  activity: Number(storage.get("activity")) || ACTIVITY_OPTIONS[0].value,
  goal: Number(storage.get("goal")) || GOAL_OPTIONS[0].value,
  proteinPerKg: Number(storage.get("proteinPerKg")) || PROTEIN_PER_KG.DEFAULT,
  fatPerKg: Number(storage.get("fatPerKg")) || FAT_PER_KG.DEFAULT,
});

function Calculator() {
  const { t } = useLocale();
  const pluralizeGrams = usePluralizeGrams();
  const initialState = getInitialState();
  const [weight, setWeight] = createSignal(initialState.weight);
  const [height, setHeight] = createSignal(initialState.height);
  const [age, setAge] = createSignal(initialState.age);
  const [gender, setGender] = createSignal(initialState.gender);
  const [activity, setActivity] = createSignal(initialState.activity);
  const [goal, setGoal] = createSignal(initialState.goal);
  const [proteinPerKg, setProteinPerKg] = createSignal(
    initialState.proteinPerKg
  );
  const [fatPerKg, setFatPerKg] = createSignal(initialState.fatPerKg);

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

  createEffect(() => {
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
                onClick={() => setGender(option.value)}
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
          placeholder="55"
        />

        <NumberInput
          label={t().height}
          value={height()}
          onInput={setHeight}
          placeholder="165"
        />

        <NumberInput
          label={t().age}
          value={age()}
          onInput={setAge}
          placeholder="25"
        />

        <Select
          label={t().activity}
          value={activity()}
          onChange={(value) => setActivity(Number(value))}
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
    </section>
  );
}

export default Calculator;
