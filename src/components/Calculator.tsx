import { createSignal, createEffect, createMemo } from "solid-js";
import NumberInput from "./NumberInput";
import StatCard from "./StatCard";
import Select from "./Select";
import { CONSTANTS } from "../constants";
import { storage } from "../helpers";

const getInitialState = () => ({
  weight: storage.get("weight") || "",
  height: storage.get("height") || "",
  age: storage.get("age") || "",
  gender: storage.get("gender") || CONSTANTS.GENDER_OPTIONS[0].value,
  activity:
    Number(storage.get("activity")) || CONSTANTS.ACTIVITY_OPTIONS[0].value,
  goal: Number(storage.get("goal")) || CONSTANTS.GOAL_OPTIONS[0].value,
});

function Calculator() {
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

    return gender() === CONSTANTS.GENDER_OPTIONS[0].value
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
    <section class="flex flex-col items-center">
      <div class="stats stats-vertical md:stats-horizontal w-full max-w-md md:max-w-xl mb-6 bg-base-100 rounded-2xl shadow-md">
        <StatCard title="Базовый расход калорий" value={Math.round(bmr())} />
        <StatCard title="Общий расход калорий" value={Math.round(baseTdee())} />
        <StatCard
          title="Целевой уровень калорий"
          value={Math.round(tdee())}
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

        <Select
          label="Пол"
          value={gender()}
          onChange={(value) => setGender(value)}
          options={[...CONSTANTS.GENDER_OPTIONS]}
        />

        <Select
          label="Активность"
          value={activity()}
          onChange={(value) => setActivity(Number(value))}
          options={[...CONSTANTS.ACTIVITY_OPTIONS]}
        />

        <Select
          label="Цель"
          value={goal()}
          onChange={(value) => setGoal(Number(value))}
          options={[...CONSTANTS.GOAL_OPTIONS]}
        />
      </form>
    </section>
  );
}

export default Calculator;
