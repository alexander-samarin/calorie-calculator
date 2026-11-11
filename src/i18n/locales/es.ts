import type { BaseDict } from "../types";

export const es: BaseDict = {
  // Calculator
  basalMetabolism: "Metabolismo basal",
  dailyExpenditure: "Gasto diario",
  yourNorm: "Tu norma",
  proteins: "Proteínas",
  fats: "Grasas",
  carbs: "Carbohidratos",
  kcal: "kcal",
  gramShort: "g",
  grams: { one: "gramo", other: "gramos" },

  // Inputs
  weight: "Peso (kg)",
  height: "Altura (cm)",
  age: "Edad (años)",
  activity: "Actividad",
  goal: "Objetivo",
  proteinPerKg: "proteína por 1 kg de peso",
  fatPerKg: "grasa por 1 kg de peso",
  decrease: "Disminuir",
  increase: "Aumentar",
  macrosExceedWarning:
    "Las proteínas y las grasas ya superan tu objetivo de calorías y no queda nada para los carbohidratos. Reduce las proteínas o las grasas por kg.",
  macroWeightNote:
    "Las proteínas y las grasas se calculan para {weight} kg, el peso con IMC 25 para tu estatura. Con exceso de peso, usar el peso total sobrestima las necesidades.",

  // Gender
  gender: "Sexo",
  female: "Mujer",
  male: "Hombre",

  // Activity options
  sedentary: "Estilo de vida sedentario",
  lightActivity: "1-3 entrenamientos por semana",
  moderateActivity: "3-5 entrenamientos por semana",
  highActivity: "6-7 entrenamientos por semana",
  veryHighActivity: "2 entrenamientos por día",

  // Goal options
  goalGroupLoss: "Pérdida de peso",
  goalGroupGain: "Aumento de masa",
  mildWeightLoss: "Pérdida de peso suave",
  moderateWeightLoss: "Pérdida de peso moderada",
  aggressiveWeightLoss: "Pérdida de peso agresiva",
  slowBulk: "Volumen lento",
  moderateBulk: "Volumen moderado",
  fastBulk: "Volumen rápido",
  maintenance: "Mantenimiento",

  // App / SEO
  title: "Calculadora de calorías",
  description:
    "Calculadora precisa de calorías, macros e IMC con escala visual. Cálculo gratuito del canal de Telegram «Zhirno ne budet 🥦»",
  appName: "Calorías",

  // Love
  madeWith: "Hecho con ❤️ para el canal de Telegram",
  channelName: "Zhirno\u00A0ne\u00A0budet\u00A0🥦",

  // Theme
  themeSystem: "Sistema",
  themeLight: "Claro",
  themeDark: "Oscuro",

  // Settings
  language: "Idioma",
  theme: "Tema",
  settings: "Ajustes",
  done: "Listo",
  close: "Cerrar",

  // Footer
  copyright:
    "Todos los derechos reservados. La información tiene fines meramente informativos y no sustituye la consulta médica.",

  // Privacy
  fillFormHint: "Introduce peso, altura y edad",
  privacyNote:
    "Todos los datos se almacenan solo en su navegador y nunca se envían a un servidor.",
  clearData: "Borrar datos",
  dataCleared: "Datos borrados",
  undo: "Deshacer",

  // BMI
  bmi: "IMC",
  bmiUnderweight: "Bajo peso",
  bmiNormal: "Normal",
  bmiOverweight: "Sobrepeso",
  bmiObese: "Obesidad",

  // FAQ
  faqTitle: "Preguntas frecuentes (FAQ)",

  // Validation
  rangeHint: "De {min} a {max}",

  // 404
  notFoundTitle: "Página no encontrada",
  notFoundText: "Esta página no existe.",
  goHome: "Ir a la calculadora",
};
