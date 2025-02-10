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

const getInitialState = () => ({
  weight: localStorage.getItem("weight") || "",
  height: localStorage.getItem("height") || "",
  age: localStorage.getItem("age") || "",
  gender: localStorage.getItem("gender") || GENDER_OPTIONS[0],
  activity:
    Number(localStorage.getItem("activity")) || ACTIVITY_OPTIONS[0].value,
  goal: Number(localStorage.getItem("goal")) || GOAL_OPTIONS[0].value,
});

function App() {
  const initialState = getInitialState();
  const [weight, setWeight] = useState(initialState.weight);
  const [height, setHeight] = useState(initialState.height);
  const [age, setAge] = useState(initialState.age);
  const [gender, setGender] = useState(initialState.gender);
  const [activity, setActivity] = useState(initialState.activity);
  const [goal, setGoal] = useState(initialState.goal);

  const [BMR, setBMR] = useState(0);
  const [baseTDEE, setBaseTDEE] = useState(0);
  const [TDEE, setTDEE] = useState(0);

  useEffect(() => {
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("activity", String(activity));
    localStorage.setItem("goal", String(goal));
  }, [weight, height, age, gender, activity, goal]);

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
    <main className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Калькулятор калорий
      </h1>

      <div className="stats stats-vertical md:stats-horizontal w-full max-w-md md:max-w-xl mb-6 bg-base-100 rounded-2xl shadow-md">
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

      <form
        className="flex flex-col gap-2 w-full max-w-md mx-auto bg-base-100 p-4 pb-6 rounded-2xl shadow-md"
        action=""
      >
        <label>
          <span className="label pl-4 mb-1">Вес (кг)</span>
          <input
            type="number"
            placeholder="55"
            className="input input-lg w-full"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <label>
          <span className="label pl-4 mb-1">Рост (см)</span>
          <input
            type="number"
            placeholder="165"
            className="input input-lg w-full"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <label>
          <span className="label pl-4 mb-1">Возраст (лет)</span>
          <input
            type="number"
            placeholder="25"
            className="input input-lg w-full"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <div>
          <span className="label pl-4 mb-1">Пол</span>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="select select-lg w-full"
          >
            {GENDER_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="label pl-4 mb-1">Активность</span>
          <select
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
            className="select select-lg w-full"
          >
            {ACTIVITY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="label pl-4 mb-1">Цель</span>
          <select
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="select select-lg w-full"
          >
            {GOAL_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </form>
    </main>
  );
}

export default App;
