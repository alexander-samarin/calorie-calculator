import { createSignal, createEffect, createMemo, For } from "solid-js";
import NumberInput from "./NumberInput";
import StatCard from "./StatCard";
import Select from "./Select";
import { CONSTANTS, MIFFLIN_COEFFICIENTS } from "../constants";
import { storage } from "../helpers";

const getInitialState = () => ({
  weight: storage.get("weight") || "",
  height: storage.get("height") || "",
  age: storage.get("age") || "",
  gender: storage.get("gender") || CONSTANTS.GENDER_OPTIONS[0].value,
  activity:
    Number(storage.get("activity")) || CONSTANTS.ACTIVITY_OPTIONS[0].value,
  goal: Number(storage.get("goal")) || CONSTANTS.GOAL_OPTIONS[0].value,
  proteinPerKg: Number(storage.get("proteinPerKg")) || 1.5,
});

function Calculator() {
  const initialState = getInitialState();
  const [weight, setWeight] = createSignal(initialState.weight);
  const [height, setHeight] = createSignal(initialState.height);
  const [age, setAge] = createSignal(initialState.age);
  const [gender, setGender] = createSignal(initialState.gender);
  const [activity, setActivity] = createSignal(initialState.activity);
  const [goal, setGoal] = createSignal(initialState.goal);
  const [proteinPerKg, setProteinPerKg] = createSignal(
    initialState.proteinPerKg
  );

  const bmr = createMemo(() => {
    const w = Number(weight());
    const h = Number(height());
    const a = Number(age());

    if (!w || !h || !a) return 0;

    const { WEIGHT, HEIGHT, AGE, FEMALE_OFFSET, MALE_OFFSET } =
      MIFFLIN_COEFFICIENTS;
    const baseBmr = WEIGHT * w + HEIGHT * h - AGE * a;

    return gender() === CONSTANTS.GENDER_OPTIONS[0].value
      ? baseBmr + FEMALE_OFFSET
      : baseBmr + MALE_OFFSET;
  });

  const baseTdee = createMemo(() => {
    const base = bmr();
    return base > 0 ? Math.round(base * activity()) : 0;
  });

  const tdee = createMemo(() => {
    const base = baseTdee();
    return base > 0 ? Math.round(base * goal()) : 0;
  });

  const proteins = createMemo(() => {
    return bmr() > 0 ? Math.round(Number(weight()) * proteinPerKg()) : 0;
  });

  const fats = createMemo(() => {
    return bmr() > 0 ? Math.round(Number(weight())) : 0;
  });

  const carbs = createMemo(() => {
    return bmr() > 0
      ? Math.round((tdee() - proteins() * 4 - fats() * 9) / 4)
      : 0;
  });

  createEffect(() => {
    storage.set("weight", weight());
    storage.set("height", height());
    storage.set("age", age());
    storage.set("gender", gender());
    storage.set("activity", String(activity()));
    storage.set("goal", String(goal()));
    storage.set("proteinPerKg", String(proteinPerKg()));
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

      <div class="stats stats-horizontal w-full max-w-md md:max-w-xl mb-6 bg-base-100 rounded-2xl shadow-md">
        <StatCard title="Белки (г)" value={proteins()} />
        <StatCard title="Жиры (г)" value={fats()} />
        <StatCard title="Углеводы (г)" value={carbs()} />
      </div>

      <div class="flex flex-col gap-2 w-full max-w-md mx-auto">
        <div class="flex gap-2">
          <For each={CONSTANTS.GENDER_OPTIONS}>
            {(option) => (
              <button
                class={`btn btn-lg ${
                  gender() === option.value ? "btn-primary" : ""
                }`}
                onClick={() => setGender(option.value)}
              >
                {option.label}
              </button>
            )}
          </For>
        </div>

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
          label="Активность"
          value={activity()}
          onChange={(value) => setActivity(Number(value))}
          options={CONSTANTS.ACTIVITY_OPTIONS}
        />

        <Select
          label="Цель"
          value={goal()}
          onChange={(value) => setGoal(Number(value))}
          options={CONSTANTS.GOAL_OPTIONS}
        />

        <label class="px-2 mt-2">
          <span class="label pl-2 mb-1">
            <span class="font-bold">{proteinPerKg()} г</span>
            белков на 1 кг веса
          </span>
          <input
            class="range range-primary w-full"
            type="range"
            min={1.2}
            max={2.5}
            step={0.1}
            value={proteinPerKg()}
            onInput={(e) => setProteinPerKg(Number(e.target.value))}
          />
        </label>
      </div>
    </section>
  );
}

export default Calculator;
