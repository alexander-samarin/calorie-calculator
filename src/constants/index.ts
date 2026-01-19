// Storage keys
export const LOCALE_STORAGE_KEY = "locale";

// Коэффициенты формулы Миффлина-Сан Жеора для расчёта BMR
export const MIFFLIN_COEFFICIENTS = {
  WEIGHT: 10,
  HEIGHT: 6.25,
  AGE: 5,
  FEMALE_OFFSET: -161,
  MALE_OFFSET: 5,
} as const;

// Калорийность макронутриентов (ккал на 1 грамм)
export const CALORIES_PER_GRAM = {
  PROTEIN: 4,
  FAT: 9,
  CARB: 4,
} as const;

// BMI (ИМТ) пороговые значения по классификации ВОЗ
export const BMI = {
  UNDERWEIGHT: 18.5,
  NORMAL: 25,
  OVERWEIGHT: 30,
  SCALE_MIN: 15,
  SCALE_MAX: 40,
} as const;

export type BmiCategory = "underweight" | "normal" | "overweight" | "obese";

// Диапазоны для белков и жиров на кг веса
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
