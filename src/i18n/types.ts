export type BaseDict = {
  // Calculator
  basalMetabolism: string;
  dailyExpenditure: string;
  yourNorm: string;
  proteins: string;
  fats: string;
  carbs: string;
  kcal: string;
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

  // App
  title: string;

  // Love
  madeWith: string;
  channelName: string;
};

export type Locale = "en" | "ru" | "pl" | "de" | "es";
