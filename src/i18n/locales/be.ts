import type { BaseDict } from "../types";

export const be: BaseDict = {
  // Calculator
  basalMetabolism: "Базавы абмен",
  dailyExpenditure: "Сутачны расход",
  yourNorm: "Ваша норма",
  proteins: "Бялкі",
  fats: "Тлушчы",
  carbs: "Вугляводы",
  kcal: "ккал",
  gramShort: "г",
  grams: { one: "грам", few: "грамы", many: "грамаў", other: "грама" },

  // Inputs
  weight: "Вага (кг)",
  height: "Рост (см)",
  age: "Узрост (гадоў)",
  activity: "Актыўнасць",
  goal: "Мэта",
  proteinPerKg: "бялкоў на 1 кг вагі",
  fatPerKg: "тлушчаў на 1 кг вагі",
  macrosExceedWarning:
    "Бялкі і тлушчы ўжо перавышаюць вашу норму калорый, на вугляводы нічога не застаецца. Зменшыце колькасць бялкоў або тлушчаў на кг вагі.",
  macroWeightNote:
    "Бялкі і тлушчы разлічаны на {weight} кг: гэта вага пры ІМТ 25 для вашага росту. Пры залішняй вазе разлік на поўную вагу завышае норму.",

  // Gender
  gender: "Пол",
  female: "Жанчына",
  male: "Мужчына",

  // Activity options
  sedentary: "Сядзячы лад жыцця",
  lightActivity: "1-3 трэніроўкі на тыдзень",
  moderateActivity: "3-5 трэніровак на тыдзень",
  highActivity: "6-7 трэніровак на тыдзень",
  veryHighActivity: "2 трэніроўкі на дзень",

  // Goal options
  goalGroupLoss: "Пахудзенне",
  goalGroupGain: "Набор масы",
  mildWeightLoss: "Мяккае пахуданне",
  moderateWeightLoss: "Умеранае пахуданне",
  aggressiveWeightLoss: "Інтэнсіўнае пахуданне",
  slowBulk: "Павольны набор масы",
  moderateBulk: "Умераны набор масы",
  fastBulk: "Хуткі набор масы",
  maintenance: "Падтрымка вагі",

  // App / SEO
  title: "Калькулятар калорый",
  description:
    "Дакладны калькулятар калорый, БЖВ і індэкса масы цела (ІМТ) з візуальнай шкалой. Бясплатны разлік ад тэлеграм-канала «Жирно не будет 🥦»",
  appName: "Калорыі",

  // Love
  madeWith: "Зроблены з ❤️ для тэлеграм-канала",
  channelName: "Жирно\u00A0не\u00A0будет\u00A0🥦",

  // Theme
  themeSystem: "Сістэмная",
  themeLight: "Светлая",
  themeDark: "Цёмная",

  // Settings
  language: "Мова",
  theme: "Тэма",
  settings: "Налады",
  done: "Гатова",
  close: "Закрыць",

  // Footer
  copyright:
    "Усе правы абаронены. Інфармацыя мае даведачны характар і не замяняе кансультацыю ўрача.",

  // Privacy
  privacyNote:
    "Усе даныя захоўваюцца толькі ў вашым браўзеры і ніколі не адпраўляюцца на сервер.",
  clearData: "Ачысціць даныя",

  // BMI
  bmi: "ІМТ",
  bmiUnderweight: "Недастатковая вага",
  bmiNormal: "Норма",
  bmiOverweight: "Лішняя вага",
  bmiObese: "Атлусценне",

  // FAQ
  faqTitle: "Частыя пытанні (FAQ)",

  // Validation
  rangeHint: "Ад {min} да {max}",

  // 404
  notFoundTitle: "Старонка не знойдзена",
  notFoundText: "Такой старонкі не існуе.",
  goHome: "Перайсці да калькулятара",
};
