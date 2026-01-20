import { createSignal, createMemo, createEffect, onMount } from "solid-js";
import {
  GENDER_OPTIONS,
  ACTIVITY_OPTIONS,
  GOAL_OPTIONS,
  MIFFLIN_COEFFICIENTS,
  CALORIES_PER_GRAM,
  PROTEIN_PER_KG,
  FAT_PER_KG,
  type GenderValue,
  type ActivityValue,
} from "~/constants";
import { storage } from "~/helpers";

export function useCalculator() {
  // Initialize with defaults
  const [weight, setWeight] = createSignal("");
  const [height, setHeight] = createSignal("");
  const [age, setAge] = createSignal("");
  const [gender, setGender] = createSignal<GenderValue>(
    GENDER_OPTIONS[0].value,
  );
  const [activity, setActivity] = createSignal<ActivityValue>(
    ACTIVITY_OPTIONS[0].value,
  );
  const [goal, setGoal] = createSignal<number>(GOAL_OPTIONS[0].value);
  const [proteinPerKg, setProteinPerKg] = createSignal<number>(
    PROTEIN_PER_KG.DEFAULT,
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

  return {
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
  };
}
