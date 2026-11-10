import { batch, createSignal, createMemo, createEffect, onMount } from "solid-js";
import {
  GENDER_OPTIONS,
  ACTIVITY_OPTIONS,
  GOAL_OPTIONS,
  MIFFLIN_COEFFICIENTS,
  CALORIES_PER_GRAM,
  PROTEIN_PER_KG,
  FAT_PER_KG,
  INPUT_LIMITS,
  type GenderValue,
  type ActivityValue,
} from "~/constants";
import {
  storage,
  parseInRange,
  sanitizeNumericText,
  findOptionValue,
  parseClamped,
} from "~/helpers";

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
  // Saved values may be stale or tampered with: anything invalid is ignored
  // (the field keeps its default), slider values are clamped to their range.
  onMount(() => {
    const savedWeight = sanitizeNumericText(storage.get("weight"));
    const savedHeight = sanitizeNumericText(storage.get("height"));
    const savedAge = sanitizeNumericText(storage.get("age"));
    const savedGender = findOptionValue(GENDER_OPTIONS, storage.get("gender"));
    const savedActivity = findOptionValue(ACTIVITY_OPTIONS, storage.get("activity"));
    const savedGoal = findOptionValue(
      GOAL_OPTIONS.filter((option) => !option.disabled),
      storage.get("goal"),
    );
    const savedProteinPerKg = parseClamped(storage.get("proteinPerKg"), PROTEIN_PER_KG);
    const savedFatPerKg = parseClamped(storage.get("fatPerKg"), FAT_PER_KG);

    batch(() => {
      if (savedWeight !== null) setWeight(savedWeight);
      if (savedHeight !== null) setHeight(savedHeight);
      if (savedAge !== null) setAge(savedAge);
      if (savedGender !== null) setGender(savedGender);
      if (savedActivity !== null) setActivity(savedActivity);
      if (savedGoal !== null) setGoal(savedGoal);
      if (savedProteinPerKg !== null) setProteinPerKg(savedProteinPerKg);
      if (savedFatPerKg !== null) setFatPerKg(savedFatPerKg);
      setIsHydrated(true);
    });
  });

  // Validated numbers; null when empty or out of INPUT_LIMITS
  const weightKg = createMemo(() => parseInRange(weight(), INPUT_LIMITS.WEIGHT));
  const heightCm = createMemo(() => parseInRange(height(), INPUT_LIMITS.HEIGHT));
  const ageYears = createMemo(() => parseInRange(age(), INPUT_LIMITS.AGE));

  const bmr = createMemo(() => {
    const w = weightKg();
    const h = heightCm();
    const a = ageYears();

    if (w === null || h === null || a === null) return 0;

    const { WEIGHT, HEIGHT, AGE, FEMALE_OFFSET, MALE_OFFSET } =
      MIFFLIN_COEFFICIENTS;
    const baseBmr = WEIGHT * w + HEIGHT * h - AGE * a;
    const offset = gender() === "female" ? FEMALE_OFFSET : MALE_OFFSET;

    return Math.max(0, baseBmr + offset);
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
    return bmr() > 0 ? Math.round((weightKg() ?? 0) * proteinPerKg()) : 0;
  });

  const fats = createMemo(() => {
    return bmr() > 0 ? Math.round((weightKg() ?? 0) * fatPerKg()) : 0;
  });

  const carbs = createMemo(() => {
    if (bmr() <= 0) return 0;

    const { PROTEIN, FAT, CARB } = CALORIES_PER_GRAM;
    const remainingCalories = tdee() - proteins() * PROTEIN - fats() * FAT;

    return Math.max(0, Math.round(remainingCalories / CARB));
  });

  // Only non-default values are kept in localStorage; a field equal to its
  // default is removed. So resetting the signals (clearData) also clears storage.
  const persist = (key: string, value: string | number, defaultValue: string | number) => {
    if (value === defaultValue) storage.remove(key);
    else storage.set(key, String(value));
  };

  // Save to localStorage only after hydration to avoid overwriting with defaults
  createEffect(() => {
    if (!isHydrated()) return;

    persist("weight", weight(), "");
    persist("height", height(), "");
    persist("age", age(), "");
    persist("gender", gender(), GENDER_OPTIONS[0].value);
    persist("activity", activity(), ACTIVITY_OPTIONS[0].value);
    persist("goal", goal(), GOAL_OPTIONS[0].value);
    persist("proteinPerKg", proteinPerKg(), PROTEIN_PER_KG.DEFAULT);
    persist("fatPerKg", fatPerKg(), FAT_PER_KG.DEFAULT);
  });

  const clearData = () => {
    // Reset all values to defaults in one update; the effect above then
    // removes every key from localStorage
    batch(() => {
      setWeight("");
      setHeight("");
      setAge("");
      setGender(GENDER_OPTIONS[0].value);
      setActivity(ACTIVITY_OPTIONS[0].value);
      setGoal(GOAL_OPTIONS[0].value);
      setProteinPerKg(PROTEIN_PER_KG.DEFAULT);
      setFatPerKg(FAT_PER_KG.DEFAULT);
    });
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
    weightKg,
    heightCm,
    bmr,
    baseTdee,
    tdee,
    proteins,
    fats,
    carbs,
    clearData,
  };
}
