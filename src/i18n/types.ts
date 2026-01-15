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
  gram_one: string;
  gram_few?: string; // Only for languages with "few" form (like Russian)
  gram_other: string;

  // Inputs
  weight: string;
  height: string;
  age: string;
  activity: string;
  goal: string;
  proteinPerKg: string;
  fatPerKg: string;

  // Gender
  female: string;
  male: string;

  // Activity options
  sedentary: string;
  lightActivity: string;
  moderateActivity: string;
  highActivity: string;
  veryHighActivity: string;

  // Goal options
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
  settings: string;
};

export type Locale =
  | "en"
  | "ru"
  | "pl"
  | "de"
  | "es"
  | "it"
  | "fr"
  | "uk"
  | "be";

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
