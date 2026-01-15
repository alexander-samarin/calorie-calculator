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

// Keys for i18n translation
export const GENDER_OPTIONS = [
  { labelKey: "female" as const, value: "female" },
  { labelKey: "male" as const, value: "male" },
];

export const ACTIVITY_OPTIONS = [
  { labelKey: "sedentary" as const, value: 1.2 },
  { labelKey: "lightActivity" as const, value: 1.375 },
  { labelKey: "moderateActivity" as const, value: 1.55 },
  { labelKey: "highActivity" as const, value: 1.725 },
  { labelKey: "veryHighActivity" as const, value: 1.9 },
];

export const GOAL_OPTIONS = [
  { labelKey: "mildWeightLoss" as const, value: 0.9 },
  { labelKey: "moderateWeightLoss" as const, value: 0.85 },
  { labelKey: "aggressiveWeightLoss" as const, value: 0.8 },
  { labelKey: null, value: 0, disabled: true },
  { labelKey: "slowBulk" as const, value: 1.1 },
  { labelKey: "moderateBulk" as const, value: 1.15 },
  { labelKey: "fastBulk" as const, value: 1.2 },
  { labelKey: null, value: 0, disabled: true },
  { labelKey: "maintenance" as const, value: 1 },
];
