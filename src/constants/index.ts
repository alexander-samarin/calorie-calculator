// Storage keys
export const LOCALE_STORAGE_KEY = "locale";

// Mifflin–St Jeor equation coefficients for BMR
export const MIFFLIN_COEFFICIENTS = {
  WEIGHT: 10,
  HEIGHT: 6.25,
  AGE: 5,
  FEMALE_OFFSET: -161,
  MALE_OFFSET: 5,
} as const;

// Energy per gram of macronutrient, kcal
export const CALORIES_PER_GRAM = {
  PROTEIN: 4,
  FAT: 9,
  CARB: 4,
} as const;

// BMI thresholds (WHO classification) and the visual scale range
export const BMI = {
  UNDERWEIGHT: 18.5,
  NORMAL: 25,
  OVERWEIGHT: 30,
  SCALE_MIN: 15,
  SCALE_MAX: 40,
} as const;

export type BmiCategory = "underweight" | "normal" | "overweight" | "obese";

// Protein and fat per kg of body weight, g (slider ranges)
export const PROTEIN_PER_KG = {
  MIN: 1.2,
  MAX: 2.5,
  STEP: 0.1,
  DEFAULT: 1.5,
} as const;

export const FAT_PER_KG = {
  MIN: 0.8,
  MAX: 1.2,
  STEP: 0.1,
  DEFAULT: 1,
} as const;

// Accepted input ranges; out-of-range values are excluded from calculations
export const INPUT_LIMITS = {
  WEIGHT: { MIN: 20, MAX: 300 },
  HEIGHT: { MIN: 100, MAX: 250 },
  AGE: { MIN: 10, MAX: 120 },
} as const;

export type InputLimits = { readonly MIN: number; readonly MAX: number };

// Default placeholder values for inputs
export const PLACEHOLDERS = {
  WEIGHT: "55",
  HEIGHT: "165",
  AGE: "25",
} as const;

// Keys for i18n translation
export const GENDER_OPTIONS = [
  { labelKey: "female", value: "female" },
  { labelKey: "male", value: "male" },
] as const;

export const ACTIVITY_OPTIONS = [
  { labelKey: "sedentary", value: 1.2 },
  { labelKey: "lightActivity", value: 1.375 },
  { labelKey: "moderateActivity", value: 1.55 },
  { labelKey: "highActivity", value: 1.725 },
  { labelKey: "veryHighActivity", value: 1.9 },
] as const;

export const GOAL_OPTIONS = [
  { labelKey: "mildWeightLoss", value: 0.9, disabled: false },
  { labelKey: "moderateWeightLoss", value: 0.85, disabled: false },
  { labelKey: "aggressiveWeightLoss", value: 0.8, disabled: false },
  { labelKey: null, value: 0, disabled: true },
  { labelKey: "slowBulk", value: 1.1, disabled: false },
  { labelKey: "moderateBulk", value: 1.15, disabled: false },
  { labelKey: "fastBulk", value: 1.2, disabled: false },
  { labelKey: null, value: 0, disabled: true },
  { labelKey: "maintenance", value: 1, disabled: false },
] as const;

// Exported types for constants
export type GenderValue = (typeof GENDER_OPTIONS)[number]["value"];
export type ActivityValue = (typeof ACTIVITY_OPTIONS)[number]["value"];
export type GoalOption = (typeof GOAL_OPTIONS)[number];
