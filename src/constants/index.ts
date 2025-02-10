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
    { label: "Похудение", value: 0.85 },
    { label: "Набор массы", value: 1.15 },
    { label: "Поддержание веса", value: 1 },
  ] as const,
} as const;
