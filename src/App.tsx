import { useState, useEffect } from "react";
import "./App.css";

const GENDER_OPTIONS = ["Женщина", "Мужчина"];
const ACTIVITY_OPTIONS = [
  { label: "Сидячий образ жизни", value: 1.2 },
  { label: "Пара тренировок в неделю", value: 1.375 },
  { label: "3-5 тренировок в неделю", value: 1.55 },
  { label: "6-7 тренировок в неделю", value: 1.725 },
  { label: "Тренировки 2 раза в день", value: 1.9 },
];
const GOAL_OPTIONS = [
  { label: "Похудение", value: 0.85 },
  { label: "Набор массы", value: 1.15 },
  { label: "Поддержание веса", value: 1 },
];

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(GENDER_OPTIONS[0]);
  const [activity, setActivity] = useState(ACTIVITY_OPTIONS[0].value);
  const [goal, setGoal] = useState(GOAL_OPTIONS[0].value);

  const [BMR, setBMR] = useState(0);
  const [baseTDEE, setBaseTDEE] = useState(0);
  const [TDEE, setTDEE] = useState(0);

  useEffect(() => {
    const BMR =
      gender === GENDER_OPTIONS[0]
        ? 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161
        : 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5;
    const baseTDEE = BMR * activity;
    const TDEE = baseTDEE * goal;
    setBMR(BMR > 0 ? Math.round(BMR) : 0);
    setBaseTDEE(baseTDEE > 0 ? Math.round(baseTDEE) : 0);
    setTDEE(TDEE > 0 ? Math.round(TDEE) : 0);
  }, [weight, height, age, gender, activity, goal]);

  return (
    <main className="flex flex-col items-center gap-8 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center">Калькулятор калорий</h1>

      <div className="stats stats-vertical md:stats-horizontal w-full max-w-xl border-2 border-base-300 shadow-md">
        <div className="stat place-items-center p-2 pb-0 md:p-4">
          <div className="stat-title text-center">Базовый расход калорий</div>
          <div className="stat-value">{BMR}</div>
        </div>

        <div className="stat place-items-center p-2 pb-0 md:p-4">
          <div className="stat-title text-center">Общий расход калорий</div>
          <div className="stat-value">{baseTDEE}</div>
        </div>

        <div className="stat place-items-center p-2 pb-0 md:p-4">
          <div className="stat-title text-center">Целевой расход калорий</div>
          <div className="stat-value text-primary">{TDEE}</div>
        </div>
      </div>

      <form className="flex flex-col gap-4 w-full max-w-md mx-auto" action="">
        <label className="floating-label">
          <input
            type="number"
            placeholder=""
            className="input input-lg w-full"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <span>Вес (кг)</span>
        </label>

        <label className="floating-label">
          <input
            type="number"
            placeholder=""
            className="input input-lg w-full"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <span>Рост (см)</span>
        </label>

        <label className="floating-label">
          <input
            type="number"
            placeholder=""
            className="input input-lg w-full"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <span>Возраст (лет)</span>
        </label>

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          defaultValue="Пол"
          className="select select-lg w-full"
        >
          <option disabled={true}>Пол</option>
          {GENDER_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={activity}
          onChange={(e) => setActivity(Number(e.target.value))}
          defaultValue="Коэффициент активности"
          className="select select-lg w-full"
        >
          <option disabled={true}>Активность</option>
          {ACTIVITY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          defaultValue="Цель"
          className="select select-lg w-full"
        >
          <option disabled={true}>Цель</option>
          {GOAL_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </main>
  );
}

export default App;
