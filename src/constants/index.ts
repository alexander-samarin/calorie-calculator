// Коэффициенты формулы Миффлина-Сан Жеора для расчёта BMR
export const MIFFLIN_COEFFICIENTS = {
  WEIGHT: 10,
  HEIGHT: 6.25,
  AGE: 5,
  FEMALE_OFFSET: -161,
  MALE_OFFSET: 5,
} as const;

export const CONSTANTS = {
  GENDER_OPTIONS: [
    { label: "Женщина", value: "female" },
    { label: "Мужчина", value: "male" },
  ] as const,
  ACTIVITY_OPTIONS: [
    { label: "Сидячий образ жизни", value: 1.2 },
    { label: "1-2 тренировки в неделю", value: 1.375 },
    { label: "3-5 тренировок в неделю", value: 1.55 },
    { label: "6-7 тренировок в неделю", value: 1.725 },
    { label: "Тренировки 2 раза в день", value: 1.9 },
  ] as const,
  GOAL_OPTIONS: [
    { label: "Мягкое похудение", value: 0.9 },
    { label: "Умеренное похудение", value: 0.85 },
    { label: "Агрессивное похудение", value: 0.8 },
    { label: "---", value: 0, disabled: true },
    { label: "Медленный набор массы", value: 1.1 },
    { label: "Умеренный набор массы", value: 1.15 },
    { label: "Быстрый набор массы", value: 1.2 },
    { label: "---", value: 0, disabled: true },
    { label: "Поддержание веса", value: 1 },
  ] as const,
} as const;
