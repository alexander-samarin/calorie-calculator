import {
  batch,
  createSignal,
  createMemo,
  createEffect,
  onMount,
} from "solid-js";
import { createStore } from "solid-js/store";
import {
  GENDER_OPTIONS,
  ACTIVITY_OPTIONS,
  GOAL_OPTIONS,
  PROTEIN_PER_KG,
  FAT_PER_KG,
  INPUT_LIMITS,
  type GenderValue,
  type ActivityValue,
  type GoalValue,
} from "~/constants";
import {
  storage,
  parseInRange,
  sanitizeNumericText,
  findOptionValue,
  parseClamped,
} from "~/helpers";
import { calculateNutrition } from "~/lib/nutrition";

export type CalculatorState = {
  /** Raw input text, as typed */
  weight: string;
  height: string;
  age: string;
  gender: GenderValue;
  activity: ActivityValue;
  goal: GoalValue;
  proteinPerKg: number;
  fatPerKg: number;
};

const DEFAULT_STATE: CalculatorState = {
  weight: "",
  height: "",
  age: "",
  gender: GENDER_OPTIONS[0].value,
  activity: ACTIVITY_OPTIONS[0].value,
  goal: GOAL_OPTIONS[0].value,
  proteinPerKg: PROTEIN_PER_KG.DEFAULT,
  fatPerKg: FAT_PER_KG.DEFAULT,
};

const FIELDS = Object.keys(DEFAULT_STATE) as (keyof CalculatorState)[];

/**
 * Restores a field from its localStorage string (key = field name).
 * Stale or tampered values return null and the field keeps its default;
 * slider values are clamped to their range.
 */
const RESTORE: {
  [K in keyof CalculatorState]: (
    stored: string | null,
  ) => CalculatorState[K] | null;
} = {
  weight: sanitizeNumericText,
  height: sanitizeNumericText,
  age: sanitizeNumericText,
  gender: (stored) => findOptionValue(GENDER_OPTIONS, stored),
  activity: (stored) => findOptionValue(ACTIVITY_OPTIONS, stored),
  goal: (stored) => findOptionValue(GOAL_OPTIONS, stored),
  proteinPerKg: (stored) => parseClamped(stored, PROTEIN_PER_KG),
  fatPerKg: (stored) => parseClamped(stored, FAT_PER_KG),
};

const restoreField = <K extends keyof CalculatorState>(
  key: K,
  target: Partial<CalculatorState>,
) => {
  const value = RESTORE[key](storage.get(key));
  if (value !== null) target[key] = value;
};

export function useCalculator() {
  const [state, setState] = createStore<CalculatorState>({ ...DEFAULT_STATE });
  const [isHydrated, setIsHydrated] = createSignal(false);

  // Load saved values after mount (SSR always renders the defaults)
  onMount(() => {
    const restored: Partial<CalculatorState> = {};
    for (const key of FIELDS) restoreField(key, restored);

    batch(() => {
      setState(restored);
      setIsHydrated(true);
    });
  });

  // Only non-default values are kept in localStorage; a field equal to its
  // default is removed. So resetting the state (clearData) also clears storage.
  // Runs only after hydration to avoid overwriting saved values with defaults.
  createEffect(() => {
    if (!isHydrated()) return;

    for (const key of FIELDS) {
      const value = state[key];
      if (value === DEFAULT_STATE[key]) storage.remove(key);
      else storage.set(key, String(value));
    }
  });

  // Validated numbers; null when empty or out of INPUT_LIMITS
  const weightKg = createMemo(() =>
    parseInRange(state.weight, INPUT_LIMITS.WEIGHT),
  );
  const heightCm = createMemo(() =>
    parseInRange(state.height, INPUT_LIMITS.HEIGHT),
  );
  const ageYears = createMemo(() => parseInRange(state.age, INPUT_LIMITS.AGE));

  const result = createMemo(() =>
    calculateNutrition({
      weightKg: weightKg(),
      heightCm: heightCm(),
      ageYears: ageYears(),
      gender: state.gender,
      activity: state.activity,
      goal: state.goal,
      proteinPerKg: state.proteinPerKg,
      fatPerKg: state.fatPerKg,
    }),
  );

  const setField = <K extends keyof CalculatorState>(
    key: K,
    value: CalculatorState[K],
  ) => setState(key, value);

  /** Reset every field to its default (also clears localStorage) */
  const clearData = () => setState({ ...DEFAULT_STATE });

  return { state, setField, weightKg, heightCm, result, clearData };
}
