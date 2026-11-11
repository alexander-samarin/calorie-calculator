import type { BaseDict } from "../types";

export const uk: BaseDict = {
  // Calculator
  basalMetabolism: "Базовий обмін",
  dailyExpenditure: "Добова витрата",
  yourNorm: "Ваша норма",
  proteins: "Білки",
  fats: "Жири",
  carbs: "Вуглеводи",
  kcal: "ккал",
  gramShort: "г",
  grams: { one: "грам", few: "грами", many: "грамів", other: "грама" },

  // Inputs
  weight: "Вага (кг)",
  height: "Зріст (см)",
  age: "Вік (років)",
  activity: "Активність",
  goal: "Ціль",
  proteinPerKg: "білків на 1 кг ваги",
  fatPerKg: "жирів на 1 кг ваги",
  macrosExceedWarning:
    "Білки та жири вже перевищують вашу норму калорій, на вуглеводи нічого не залишається. Зменште кількість білків або жирів на кг ваги.",
  macroWeightNote:
    "Білки та жири розраховано на {weight} кг: це вага при ІМТ 25 для вашого зросту. При надмірній вазі розрахунок на повну вагу завищує норму.",

  // Gender
  gender: "Стать",
  female: "Жінка",
  male: "Чоловік",

  // Activity options
  sedentary: "Сидячий спосіб життя",
  lightActivity: "1-3 тренування на тиждень",
  moderateActivity: "3-5 тренувань на тиждень",
  highActivity: "6-7 тренувань на тиждень",
  veryHighActivity: "2 тренування на день",

  // Goal options
  goalGroupLoss: "Схуднення",
  goalGroupGain: "Набір маси",
  mildWeightLoss: "М'яке схуднення",
  moderateWeightLoss: "Помірне схуднення",
  aggressiveWeightLoss: "Інтенсивне схуднення",
  slowBulk: "Повільний набір маси",
  moderateBulk: "Помірний набір маси",
  fastBulk: "Швидкий набір маси",
  maintenance: "Підтримка ваги",

  // App / SEO
  title: "Калькулятор калорій",
  description:
    "Точний калькулятор калорій, БЖВ та індексу маси тіла (ІМТ) з візуальною шкалою. Безкоштовний розрахунок від телеграм-каналу «Жирно не буде 🥦»",
  appName: "Калорії",

  // Love
  madeWith: "Зроблений з ❤️ для телеграм-каналу",
  channelName: "Жирно\u00A0не\u00A0буде\u00A0🥦",

  // Theme
  themeSystem: "Системна",
  themeLight: "Світла",
  themeDark: "Темна",

  // Settings
  language: "Мова",
  theme: "Тема",
  settings: "Налаштування",
  done: "Готово",
  close: "Закрити",

  // Footer
  copyright:
    "Усі права захищені. Інформація має довідковий характер і не замінює консультацію лікаря.",

  // Privacy
  fillFormHint: "Введіть вагу, зріст і вік",
  privacyNote:
    "Усі дані зберігаються лише у вашому браузері та ніколи не надсилаються на сервер.",
  clearData: "Очистити дані",
  dataCleared: "Дані очищено",
  undo: "Скасувати",

  // BMI
  bmi: "ІМТ",
  bmiUnderweight: "Недостатня вага",
  bmiNormal: "Норма",
  bmiOverweight: "Надмірна вага",
  bmiObese: "Ожиріння",

  // FAQ
  faqTitle: "Часті запитання (FAQ)",

  // Validation
  rangeHint: "Від {min} до {max}",

  // 404
  notFoundTitle: "Сторінку не знайдено",
  notFoundText: "Такої сторінки не існує.",
  goHome: "Перейти до калькулятора",
};
