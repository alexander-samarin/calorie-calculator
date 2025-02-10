import { createSignal, createEffect } from "solid-js";
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
  const [weight, setWeight] = createSignal(initialState.weight);
  const [height, setHeight] = createSignal(initialState.height);
  const [age, setAge] = createSignal(initialState.age);
  const [gender, setGender] = createSignal(initialState.gender);
  const [activity, setActivity] = createSignal(initialState.activity);
  const [goal, setGoal] = createSignal(initialState.goal);

  const [BMR, setBMR] = createSignal(0);
  const [baseTDEE, setBaseTDEE] = createSignal(0);
  const [TDEE, setTDEE] = createSignal(0);

  // Save to localStorage
  createEffect(() => {
    localStorage.setItem("weight", weight());
    localStorage.setItem("height", height());
    localStorage.setItem("age", age());
    localStorage.setItem("gender", gender());
    localStorage.setItem("activity", String(activity()));
    localStorage.setItem("goal", String(goal()));
  });

  // Calculate values
  createEffect(() => {
    const bmr =
      gender() === GENDER_OPTIONS[0]
        ? 10 * Number(weight()) +
          6.25 * Number(height()) -
          5 * Number(age()) -
          161
        : 10 * Number(weight()) +
          6.25 * Number(height()) -
          5 * Number(age()) +
          5;
    const baseTdee = bmr * activity();
    const tdee = baseTdee * goal();

    setBMR(bmr > 0 ? Math.round(bmr) : 0);
    setBaseTDEE(baseTdee > 0 ? Math.round(baseTdee) : 0);
    setTDEE(tdee > 0 ? Math.round(tdee) : 0);
  });

  return (
    <main class="flex flex-col items-center p-4">
      <h1 class="text-2xl font-bold text-center mb-4">Калькулятор калорий</h1>

      <div class="stats stats-vertical md:stats-horizontal w-full max-w-md md:max-w-xl mb-6 bg-base-100 rounded-2xl shadow-md">
        <div class="stat place-items-center p-2 pb-0 md:p-4">
          <div class="stat-title text-center">Базовый расход калорий</div>
          <div class="stat-value">{BMR()}</div>
        </div>

        <div class="stat place-items-center p-2 pb-0 md:p-4">
          <div class="stat-title text-center">Общий расход калорий</div>
          <div class="stat-value">{baseTDEE()}</div>
        </div>

        <div class="stat place-items-center p-2 pb-0 md:p-4 bg-primary">
          <div class="stat-title text-center text-primary-content">
            Целевой уровень калорий
          </div>
          <div class="stat-value text-primary-content">{TDEE()}</div>
        </div>
      </div>

      <form class="flex flex-col gap-2 w-full max-w-md mx-auto">
        <label>
          <span class="label pl-4 mb-1">Вес (кг)</span>
          <input
            type="number"
            placeholder="55"
            class="input input-lg w-full"
            value={weight()}
            onInput={(e) => setWeight(e.currentTarget.value)}
          />
        </label>

        <label>
          <span class="label pl-4 mb-1">Рост (см)</span>
          <input
            type="number"
            placeholder="165"
            class="input input-lg w-full"
            value={height()}
            onInput={(e) => setHeight(e.currentTarget.value)}
          />
        </label>

        <label>
          <span class="label pl-4 mb-1">Возраст (лет)</span>
          <input
            type="number"
            placeholder="25"
            class="input input-lg w-full"
            value={age()}
            onInput={(e) => setAge(e.currentTarget.value)}
          />
        </label>

        <div>
          <span class="label pl-4 mb-1">Пол</span>
          <select
            value={gender()}
            onChange={(e) => setGender(e.currentTarget.value)}
            class="select select-lg w-full"
          >
            {GENDER_OPTIONS.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <span class="label pl-4 mb-1">Активность</span>
          <select
            value={activity()}
            onChange={(e) => setActivity(Number(e.currentTarget.value))}
            class="select select-lg w-full"
          >
            {ACTIVITY_OPTIONS.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <span class="label pl-4 mb-1">Цель</span>
          <select
            value={goal()}
            onChange={(e) => setGoal(Number(e.currentTarget.value))}
            class="select select-lg w-full"
          >
            {GOAL_OPTIONS.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </form>
    </main>
  );
}

export default App;
