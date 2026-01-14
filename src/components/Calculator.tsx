import { createSignal, createEffect, createMemo, For } from "solid-js";
import NumberInput from "./NumberInput";
import StatCard from "./StatCard";
import Select from "./Select";
import {
  CONSTANTS,
  MIFFLIN_COEFFICIENTS,
  CALORIES_PER_GRAM,
} from "../constants";
import { storage, pluralize } from "../helpers";

const getInitialState = () => ({
  weight: storage.get("weight") || "",
  height: storage.get("height") || "",
  age: storage.get("age") || "",
  gender: storage.get("gender") || CONSTANTS.GENDER_OPTIONS[0].value,
  activity:
    Number(storage.get("activity")) || CONSTANTS.ACTIVITY_OPTIONS[0].value,
  goal: Number(storage.get("goal")) || CONSTANTS.GOAL_OPTIONS[0].value,
  proteinPerKg: Number(storage.get("proteinPerKg")) || 1.5,
  fatPerKg: Number(storage.get("fatPerKg")) || 1,
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
  const [fatPerKg, setFatPerKg] = createSignal(initialState.fatPerKg);

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
    return bmr() > 0 ? Math.round(Number(weight()) * fatPerKg()) : 0;
  });

  const carbs = createMemo(() => {
    if (bmr() <= 0) return 0;

    const { PROTEIN, FAT, CARB } = CALORIES_PER_GRAM;
    const remainingCalories = tdee() - proteins() * PROTEIN - fats() * FAT;

    return Math.max(0, Math.round(remainingCalories / CARB));
  });

  createEffect(() => {
    storage.set("weight", weight());
    storage.set("height", height());
    storage.set("age", age());
    storage.set("gender", gender());
    storage.set("activity", String(activity()));
    storage.set("goal", String(goal()));
    storage.set("proteinPerKg", String(proteinPerKg()));
    storage.set("fatPerKg", String(fatPerKg()));
  });

  return (
    <section class="flex flex-col items-center w-full">
      <div class="stats grid grid-cols-3 w-full max-w-md md:max-w-xl mb-4 bg-base-100 shadow-xl">
        <StatCard title="Базовый обмен" value={Math.round(bmr())} unit="ккал" />
        <StatCard
          title="Суточный расход"
          value={Math.round(baseTdee())}
          unit="ккал"
        />
        <StatCard
          title="Ваша норма"
          value={Math.round(tdee())}
          unit="ккал"
          isPrimary={true}
        />
      </div>

      <div class="stats grid grid-cols-3 w-full max-w-md md:max-w-xl mb-8 bg-base-100 shadow-xl">
        <StatCard
          title="Белки"
          value={proteins()}
          unit={pluralize(proteins(), ["грамм", "грамма", "граммов"])}
        />
        <StatCard
          title="Жиры"
          value={fats()}
          unit={pluralize(fats(), ["грамм", "грамма", "граммов"])}
        />
        <StatCard
          title="Углеводы"
          value={carbs()}
          unit={pluralize(carbs(), ["грамм", "грамма", "граммов"])}
        />
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

        <label class="px-2 mt-2">
          <span class="label pl-2 mb-1">
            <span class="font-bold">{fatPerKg()} г</span>
            жиров на 1 кг веса
          </span>
          <input
            class="range range-primary w-full"
            type="range"
            min={0.8}
            max={1}
            step={0.1}
            value={fatPerKg()}
            onInput={(e) => setFatPerKg(Number(e.target.value))}
          />
        </label>
      </div>
    </section>
  );
}

export default Calculator;
