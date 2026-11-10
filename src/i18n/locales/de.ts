import type { BaseDict } from "../types";

export const de: BaseDict = {
  // Calculator
  basalMetabolism: "Grundumsatz",
  dailyExpenditure: "Tagesbedarf",
  yourNorm: "Deine Norm",
  proteins: "Eiweiß",
  fats: "Fette",
  carbs: "Kohlenhydrate",
  kcal: "kcal",
  gramShort: "g",
  grams: { one: "Gramm", other: "Gramm" },

  // Inputs
  weight: "Gewicht (kg)",
  height: "Größe (cm)",
  age: "Alter (Jahre)",
  activity: "Aktivität",
  goal: "Ziel",
  proteinPerKg: "Eiweiß pro 1 kg Körpergewicht",
  fatPerKg: "Fett pro 1 kg Körpergewicht",
  macrosExceedWarning:
    "Eiweiß und Fett allein überschreiten bereits Ihren Kalorienbedarf, für Kohlenhydrate bleibt nichts übrig. Verringern Sie Eiweiß oder Fett pro kg.",

  // Gender
  gender: "Geschlecht",
  female: "Frau",
  male: "Mann",

  // Activity options
  sedentary: "Sitzende Tätigkeit",
  lightActivity: "1-3 Trainings pro Woche",
  moderateActivity: "3-5 Trainings pro Woche",
  highActivity: "6-7 Trainings pro Woche",
  veryHighActivity: "2 Trainings pro Tag",

  // Goal options
  goalGroupLoss: "Abnehmen",
  goalGroupGain: "Muskelaufbau",
  mildWeightLoss: "Leichtes Abnehmen",
  moderateWeightLoss: "Moderates Abnehmen",
  aggressiveWeightLoss: "Intensives Abnehmen",
  slowBulk: "Langsamer Masseaufbau",
  moderateBulk: "Moderater Masseaufbau",
  fastBulk: "Schneller Masseaufbau",
  maintenance: "Gewicht halten",

  // App / SEO
  title: "Kalorienrechner",
  description:
    "Präziser Kalorien-, Makronährstoff- und BMI-Rechner mit visueller Skala. Kostenlose Berechnung vom Telegram-Kanal «Zhirno ne budet 🥦»",
  appName: "Kalorien",

  // Love
  madeWith: "Mit ❤️ erstellt für den Telegram-Kanal",
  channelName: "Zhirno\u00A0ne\u00A0budet\u00A0🥦",

  // Theme
  themeSystem: "System",
  themeLight: "Hell",
  themeDark: "Dunkel",

  // Settings
  language: "Sprache",
  theme: "Thema",
  settings: "Einstellungen",
  done: "Fertig",
  close: "Schließen",

  // Footer
  copyright:
    "Alle Rechte vorbehalten. Die Informationen dienen ausschließlich Informationszwecken und ersetzen keine ärztliche Beratung.",

  // Privacy
  privacyNote:
    "Alle Daten werden nur in Ihrem Browser gespeichert und niemals an einen Server gesendet.",
  clearData: "Daten löschen",

  // BMI
  bmi: "BMI",
  bmiUnderweight: "Untergewicht",
  bmiNormal: "Normalgewicht",
  bmiOverweight: "Übergewicht",
  bmiObese: "Adipositas",

  // Validation
  rangeHint: "Von {min} bis {max}",

  // 404
  notFoundTitle: "Seite nicht gefunden",
  notFoundText: "Diese Seite existiert nicht.",
  goHome: "Zum Rechner",
};
