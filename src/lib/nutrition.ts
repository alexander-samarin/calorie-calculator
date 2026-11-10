/**
 * Pure nutrition formulas. No Solid, no DOM — easy to unit test.
 */
import {
  BMI,
  CALORIES_PER_GRAM,
  MIFFLIN_COEFFICIENTS,
  type BmiCategory,
  type GenderValue,
} from "~/constants";

export type NutritionInput = {
  /** Validated values; null when missing or out of range */
  weightKg: number | null;
  heightCm: number | null;
  ageYears: number | null;
  gender: GenderValue;
  /** Activity multiplier (1.2 … 1.9) */
  activity: number;
  /** Goal multiplier (0.8 … 1.2) */
  goal: number;
  proteinPerKg: number;
  fatPerKg: number;
};

export type NutritionResult = {
  /** Basal metabolic rate, kcal (not rounded) */
  bmr: number;
  /** Daily energy expenditure with activity, kcal */
  baseTdee: number;
  /** Calorie target for the selected goal, kcal */
  tdee: number;
  /** Grams per day */
  proteins: number;
  fats: number;
  carbs: number;
  /**
   * Protein + fat alone exceed the calorie target (carbs were clamped to 0,
   * so the macros add up to more than tdee)
   */
  macrosExceedTarget: boolean;
};

const EMPTY_RESULT: NutritionResult = {
  bmr: 0,
  baseTdee: 0,
  tdee: 0,
  proteins: 0,
  fats: 0,
  carbs: 0,
  macrosExceedTarget: false,
};

/** Mifflin–St Jeor; 0 when any input is missing */
export const calculateBmr = (
  weightKg: number | null,
  heightCm: number | null,
  ageYears: number | null,
  gender: GenderValue,
): number => {
  if (weightKg === null || heightCm === null || ageYears === null) return 0;

  const { WEIGHT, HEIGHT, AGE, FEMALE_OFFSET, MALE_OFFSET } =
    MIFFLIN_COEFFICIENTS;
  const offset = gender === "female" ? FEMALE_OFFSET : MALE_OFFSET;

  return Math.max(0, WEIGHT * weightKg + HEIGHT * heightCm - AGE * ageYears + offset);
};

/**
 * Calories and macros. Protein and fat are set per kg of body weight;
 * carbs take the remaining calories (never below 0).
 */
export const calculateNutrition = (input: NutritionInput): NutritionResult => {
  const bmr = calculateBmr(input.weightKg, input.heightCm, input.ageYears, input.gender);
  if (bmr <= 0 || input.weightKg === null) return EMPTY_RESULT;

  const baseTdee = Math.round(bmr * input.activity);
  const tdee = Math.round(baseTdee * input.goal);
  const proteins = Math.round(input.weightKg * input.proteinPerKg);
  const fats = Math.round(input.weightKg * input.fatPerKg);

  const { PROTEIN, FAT, CARB } = CALORIES_PER_GRAM;
  const remainingCalories = tdee - proteins * PROTEIN - fats * FAT;
  const carbs = Math.max(0, Math.round(remainingCalories / CARB));

  return {
    bmr,
    baseTdee,
    tdee,
    proteins,
    fats,
    carbs,
    macrosExceedTarget: remainingCalories < 0,
  };
};

/** Body mass index; 0 when any input is missing */
export const calculateBmi = (
  weightKg: number | null,
  heightCm: number | null,
): number => {
  if (weightKg === null || heightCm === null) return 0;
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
};

/** WHO category; null for an empty BMI (0) */
export const getBmiCategory = (bmi: number): BmiCategory | null => {
  if (bmi <= 0) return null;
  if (bmi < BMI.UNDERWEIGHT) return "underweight";
  if (bmi < BMI.NORMAL) return "normal";
  if (bmi < BMI.OVERWEIGHT) return "overweight";
  return "obese";
};
