import { createSignal, createEffect, createMemo, For } from "solid-js";
import NumberInput from "./NumberInput";
import StatCard from "./StatCard";
import { CONSTANTS } from "../constants";
import { storage } from "../helpers";

const getInitialState = () => ({
  weight: storage.get("weight") || "",
  height: storage.get("height") || "",
  age: storage.get("age") || "",
  gender: storage.get("gender") || CONSTANTS.GENDER_OPTIONS[0],
  activity:
    Number(storage.get("activity")) || CONSTANTS.ACTIVITY_OPTIONS[0].value,
  goal: Number(storage.get("goal")) || CONSTANTS.GOAL_OPTIONS[0].value,
});

function App() {
  const initialState = getInitialState();
  const [weight, setWeight] = createSignal(initialState.weight);
  const [height, setHeight] = createSignal(initialState.height);
  const [age, setAge] = createSignal(initialState.age);
  const [gender, setGender] = createSignal(initialState.gender);
  const [activity, setActivity] = createSignal(initialState.activity);
  const [goal, setGoal] = createSignal(initialState.goal);

  const bmr = createMemo(() => {
    const w = Number(weight());
    const h = Number(height());
    const a = Number(age());

    if (!w || !h || !a) return 0;

    return gender() === CONSTANTS.GENDER_OPTIONS[0]
      ? 10 * w + 6.25 * h - 5 * a - 161
      : 10 * w + 6.25 * h - 5 * a + 5;
  });

  const baseTdee = createMemo(() => {
    const base = bmr();
    return base > 0 ? Math.round(base * activity()) : 0;
  });

  const tdee = createMemo(() => {
    const base = baseTdee();
    return base > 0 ? Math.round(base * goal()) : 0;
  });

  createEffect(() => {
    storage.set("weight", weight());
    storage.set("height", height());
    storage.set("age", age());
    storage.set("gender", gender());
    storage.set("activity", String(activity()));
    storage.set("goal", String(goal()));
  });

  return (
    <main class="flex flex-col items-center p-4">
      <h1 class="text-2xl font-bold text-center mb-4">Калькулятор калорий</h1>

      <div class="stats stats-vertical md:stats-horizontal w-full max-w-md md:max-w-xl mb-6 bg-base-100 rounded-2xl shadow-md">
        <StatCard title="Базовый расход калорий" value={bmr()} />
        <StatCard title="Общий расход калорий" value={baseTdee()} />
        <StatCard
          title="Целевой уровень калорий"
          value={tdee()}
          isPrimary={true}
        />
      </div>

      <form class="flex flex-col gap-2 w-full max-w-md mx-auto">
        <NumberInput
          label="Вес (кг)"
          value={weight()}
          onInput={setWeight}
          placeholder="55"
        />
        <NumberInput
          label="Рост (см)"
          value={height()}
          onInput={setHeight}
          placeholder="165"
        />
        <NumberInput
          label="Возраст (лет)"
          value={age()}
          onInput={setAge}
          placeholder="25"
        />

        <div>
          <span class="label pl-4 mb-1">Пол</span>
          <select
            value={gender()}
            onChange={(e) => setGender(e.currentTarget.value)}
            class="select select-lg w-full"
          >
            <For each={CONSTANTS.GENDER_OPTIONS}>
              {(option) => <option value={option}>{option}</option>}
            </For>
          </select>
        </div>

        <div>
          <span class="label pl-4 mb-1">Активность</span>
          <select
            value={activity()}
            onChange={(e) => setActivity(Number(e.currentTarget.value))}
            class="select select-lg w-full"
          >
            <For each={CONSTANTS.ACTIVITY_OPTIONS}>
              {(option) => <option value={option.value}>{option.label}</option>}
            </For>
          </select>
        </div>

        <div>
          <span class="label pl-4 mb-1">Цель</span>
          <select
            value={goal()}
            onChange={(e) => setGoal(Number(e.currentTarget.value))}
            class="select select-lg w-full"
          >
            <For each={CONSTANTS.GOAL_OPTIONS}>
              {(option) => <option value={option.value}>{option.label}</option>}
            </For>
          </select>
        </div>
      </form>
    </main>
  );
}

export default App;
