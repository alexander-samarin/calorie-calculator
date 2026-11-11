/**
 * Word forms per CLDR plural category (see Intl.PluralRules).
 * Only "other" is required; missing categories fall back to it.
 */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

export type BaseDict = {
  // Calculator
  basalMetabolism: string;
  dailyExpenditure: string;
  yourNorm: string;
  proteins: string;
  fats: string;
  carbs: string;
  kcal: string;
  gramShort: string;
  grams: PluralForms;

  // Inputs
  weight: string;
  height: string;
  age: string;
  activity: string;
  goal: string;
  proteinPerKg: string;
  fatPerKg: string;
  /** Slider step buttons (screen-reader labels) */
  decrease: string;
  increase: string;
  macrosExceedWarning: string;
  macroWeightNote: string; // {weight} placeholder

  // Gender
  gender: string;
  female: string;
  male: string;

  // Activity options
  sedentary: string;
  lightActivity: string;
  moderateActivity: string;
  highActivity: string;
  veryHighActivity: string;

  // Goal options
  goalGroupLoss: string;
  goalGroupGain: string;
  mildWeightLoss: string;
  moderateWeightLoss: string;
  aggressiveWeightLoss: string;
  slowBulk: string;
  moderateBulk: string;
  fastBulk: string;
  maintenance: string;

  // App / SEO
  title: string;
  description: string;
  appName: string;

  // Love
  madeWith: string;
  channelName: string;

  // Theme
  themeSystem: string;
  themeLight: string;
  themeDark: string;

  // Settings
  language: string;
  theme: string;

  // Footer
  copyright: string;

  // Privacy
  /** Empty-state prompt that leads to the form */
  fillFormHint: string;
  privacyNote: string;
  clearData: string;
  /** Toast after clearing, with an undo button */
  dataCleared: string;
  undo: string;

  // BMI
  bmi: string;
  bmiUnderweight: string;
  bmiNormal: string;
  bmiOverweight: string;
  bmiObese: string;

  // FAQ
  faqTitle: string;

  // Validation
  rangeHint: string; // {min}, {max} placeholders

  // 404
  notFoundTitle: string;
  notFoundText: string;
  goHome: string;
};

export type Locale =
  "en" | "ru" | "pl" | "de" | "es" | "it" | "fr" | "uk" | "be";

// Single source of truth for all locales
export const LOCALES: Locale[] = [
  "en",
  "ru",
  "pl",
  "de",
  "es",
  "it",
  "fr",
  "uk",
  "be",
];

// Default locale for the app (shown at root path "/")
export const DEFAULT_LOCALE: Locale = "ru";
