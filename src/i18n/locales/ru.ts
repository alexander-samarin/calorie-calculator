import type { BaseDict } from "../types";

export const ru: BaseDict = {
  // Calculator
  basalMetabolism: "Базовый обмен",
  dailyExpenditure: "Суточный расход",
  yourNorm: "Ваша норма",
  proteins: "Белки",
  fats: "Жиры",
  carbs: "Углеводы",
  kcal: "ккал",
  gramShort: "г",
  grams: { one: "грамм", few: "грамма", many: "граммов", other: "грамма" },

  // Inputs
  weight: "Вес (кг)",
  height: "Рост (см)",
  age: "Возраст (лет)",
  activity: "Активность",
  goal: "Цель",
  proteinPerKg: "белков на 1 кг веса",
  fatPerKg: "жиров на 1 кг веса",
  macrosExceedWarning:
    "Белки и жиры уже превышают вашу норму калорий, на углеводы ничего не остаётся. Уменьшите количество белков или жиров на кг веса.",
  macroWeightNote:
    "Белки и жиры рассчитаны на {weight} кг: это вес при ИМТ 25 для вашего роста. При избыточном весе расчёт на полный вес завышает норму.",

  // Gender
  gender: "Пол",
  female: "Женщина",
  male: "Мужчина",

  // Activity options
  sedentary: "Сидячий образ жизни",
  lightActivity: "1-3 тренировки в неделю",
  moderateActivity: "3-5 тренировок в неделю",
  highActivity: "6-7 тренировок в неделю",
  veryHighActivity: "Тренировки 2 раза в день",

  // Goal options
  goalGroupLoss: "Похудение",
  goalGroupGain: "Набор массы",
  mildWeightLoss: "Мягкое похудение",
  moderateWeightLoss: "Умеренное похудение",
  aggressiveWeightLoss: "Агрессивное похудение",
  slowBulk: "Медленный набор массы",
  moderateBulk: "Умеренный набор массы",
  fastBulk: "Быстрый набор массы",
  maintenance: "Поддержание веса",

  // App / SEO
  title: "Калькулятор калорий",
  description:
    "Точный калькулятор калорий, БЖУ и индекса массы тела (ИМТ) с визуальной шкалой. Бесплатный расчёт от телеграм-канала «Жирно не будет 🥦»",
  appName: "Калории",

  // Love
  madeWith: "Сделан с ❤️ для телеграм-канала",
  channelName: "Жирно\u00A0не\u00A0будет\u00A0🥦",

  // Theme
  themeSystem: "Системная",
  themeLight: "Светлая",
  themeDark: "Тёмная",

  // Settings
  language: "Язык",
  theme: "Тема",
  settings: "Настройки",
  done: "Готово",
  close: "Закрыть",

  // Footer
  copyright:
    "Все права защищены. Информация носит ознакомительный характер и не заменяет консультацию врача.",

  // Privacy
  privacyNote:
    "Все данные хранятся только в вашем браузере и никогда не отправляются на сервер.",
  clearData: "Очистить данные",

  // BMI
  bmi: "ИМТ",
  bmiUnderweight: "Недостаточный вес",
  bmiNormal: "Норма",
  bmiOverweight: "Избыточный вес",
  bmiObese: "Ожирение",


  // Validation
  rangeHint: "От {min} до {max}",

  // 404
  notFoundTitle: "Страница не найдена",
  notFoundText: "Такой страницы не существует.",
  goHome: "Перейти к калькулятору",
};
