import { describe, expect, it } from "vitest";
import {
  calculateBmi,
  calculateBmr,
  calculateNutrition,
  getBmiCategory,
  getMacroWeight,
  type NutritionInput,
} from "./nutrition";

const base: NutritionInput = {
  weightKg: 70,
  heightCm: 175,
  ageYears: 30,
  gender: "male",
  activity: 1.2,
  goal: 0.9,
  proteinPerKg: 1.5,
  fatPerKg: 1,
};

describe("calculateBmr (Mifflin–St Jeor)", () => {
  it("matches the formula for men and women", () => {
    // 10*70 + 6.25*175 - 5*30 = 1643.75
    expect(calculateBmr(70, 175, 30, "male")).toBe(1648.75);
    expect(calculateBmr(70, 175, 30, "female")).toBe(1482.75);
  });

  it("returns 0 when any input is missing", () => {
    expect(calculateBmr(null, 175, 30, "male")).toBe(0);
    expect(calculateBmr(70, null, 30, "male")).toBe(0);
    expect(calculateBmr(70, 175, null, "male")).toBe(0);
  });

  it("never returns a negative value", () => {
    expect(calculateBmr(1, 1, 120, "female")).toBe(0);
  });
});

describe("calculateNutrition", () => {
  it("computes calories and macros", () => {
    expect(calculateNutrition(base)).toEqual({
      bmr: 1648.75,
      baseTdee: 1979,
      tdee: 1781,
      proteins: 105,
      fats: 70,
      carbs: 183,
      macroWeightKg: 70,
      macroWeightAdjusted: false,
      macrosExceedTarget: false,
    });
  });

  it("returns zeros when inputs are incomplete", () => {
    const result = calculateNutrition({ ...base, ageYears: null });
    expect(result.tdee).toBe(0);
    expect(result.proteins).toBe(0);
    expect(result.macrosExceedTarget).toBe(false);
  });

  it("uses the weight at BMI 25 for macros when overweight", () => {
    const result = calculateNutrition({
      ...base,
      weightKg: 150,
      heightCm: 150,
      ageYears: 60,
      gender: "female",
      goal: 0.8,
    });
    expect(result.macroWeightAdjusted).toBe(true);
    expect(result.macroWeightKg).toBeCloseTo(56.25);
    expect(result.tdee).toBe(1898); // calories still from the actual weight
    expect([result.proteins, result.fats, result.carbs]).toEqual([84, 56, 265]);
    expect(result.macrosExceedTarget).toBe(false);
  });

  it("flags when protein and fat exceed the target and clamps carbs to 0", () => {
    const result = calculateNutrition({
      ...base,
      weightKg: 60,
      heightCm: 155,
      ageYears: 80,
      gender: "female",
      goal: 0.8,
      proteinPerKg: 2.5,
      fatPerKg: 1.2,
    });
    expect(result.carbs).toBe(0);
    expect(result.macrosExceedTarget).toBe(true);
  });
});

describe("getMacroWeight", () => {
  it("keeps the actual weight up to BMI 25", () => {
    expect(getMacroWeight(70, 175)).toBe(70);
    expect(getMacroWeight(76.5, 175)).toBe(76.5);
  });

  it("caps at the weight for BMI 25", () => {
    expect(getMacroWeight(80, 175)).toBeCloseTo(76.5625);
  });
});

describe("BMI", () => {
  it("calculates BMI", () => {
    expect(calculateBmi(70, 175)).toBeCloseTo(22.857, 3);
    expect(calculateBmi(null, 175)).toBe(0);
  });

  it.each([
    [0, null],
    [18.4, "underweight"],
    [18.5, "normal"],
    [24.9, "normal"],
    [25, "overweight"],
    [29.9, "overweight"],
    [30, "obese"],
  ])("BMI %s → %s", (bmi, category) => {
    expect(getBmiCategory(bmi)).toBe(category);
  });
});
