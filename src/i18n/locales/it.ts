import type { BaseDict } from "../types";

export const it: BaseDict = {
  // Calculator
  basalMetabolism: "Metabolismo basale",
  dailyExpenditure: "Fabbisogno giornaliero",
  yourNorm: "La tua norma",
  proteins: "Proteine",
  fats: "Grassi",
  carbs: "Carboidrati",
  kcal: "kcal",
  gramShort: "g",
  grams: { one: "grammo", other: "grammi" },

  // Inputs
  weight: "Peso (kg)",
  height: "Altezza (cm)",
  age: "Età (anni)",
  activity: "Attività",
  goal: "Obiettivo",
  proteinPerKg: "proteine per 1 kg di peso",
  fatPerKg: "grassi per 1 kg di peso",
  decrease: "Diminuisci",
  increase: "Aumenta",
  macrosExceedWarning:
    "Proteine e grassi superano già il tuo fabbisogno calorico e non resta nulla per i carboidrati. Riduci proteine o grassi per kg.",
  macroWeightNote:
    "Proteine e grassi sono calcolati per {weight} kg, il peso con IMC 25 per la tua altezza. In caso di sovrappeso, usare il peso totale sovrastima il fabbisogno.",

  // Gender
  gender: "Sesso",
  female: "Donna",
  male: "Uomo",

  // Activity options
  sedentary: "Stile di vita sedentario",
  lightActivity: "1-3 allenamenti a settimana",
  moderateActivity: "3-5 allenamenti a settimana",
  highActivity: "6-7 allenamenti a settimana",
  veryHighActivity: "2 allenamenti al giorno",

  // Goal options
  goalGroupLoss: "Perdita di peso",
  goalGroupGain: "Aumento di massa",
  mildWeightLoss: "Dimagrimento leggero",
  moderateWeightLoss: "Dimagrimento moderato",
  aggressiveWeightLoss: "Dimagrimento intenso",
  slowBulk: "Massa lenta",
  moderateBulk: "Massa moderata",
  fastBulk: "Massa rapida",
  maintenance: "Mantenimento",

  // App / SEO
  title: "Calcolatore di calorie",
  seoTitle: "Calcolatore di calorie e macro — calorie per dimagrire",
  description:
    "Calorie e macro per dimagrire, mantenere il peso o mettere massa con la formula di Mifflin-St Jeor. Proteine e grassi per kg, IMC. Gratis, senza registrazione.",
  appName: "Calorie",

  // Love
  madeWith: "Fatto con ❤️ per il canale Telegram",
  channelName: "Zhirno\u00A0ne\u00A0budet\u00A0🥦",

  // Theme
  themeSystem: "Sistema",
  themeLight: "Chiaro",
  themeDark: "Scuro",

  // Settings
  language: "Lingua",
  theme: "Tema",

  // Footer
  copyright:
    "Tutti i diritti riservati. Le informazioni hanno carattere puramente informativo e non sostituiscono il parere medico.",

  // Privacy
  fillFormHint: "Inserisci peso, altezza ed età",
  privacyNote:
    "Tutti i dati sono memorizzati solo nel tuo browser e non vengono mai inviati a un server.",
  clearData: "Cancella dati",
  dataCleared: "Dati cancellati",
  undo: "Annulla",

  // BMI
  bmi: "IMC",
  bmiUnderweight: "Sottopeso",
  bmiNormal: "Normale",
  bmiOverweight: "Sovrappeso",
  bmiObese: "Obesità",

  // FAQ
  faqTitle: "Domande frequenti (FAQ)",

  // Validation
  rangeHint: "Da {min} a {max}",

  // 404
  notFoundTitle: "Pagina non trovata",
  notFoundText: "Questa pagina non esiste.",
  goHome: "Vai al calcolatore",
};
