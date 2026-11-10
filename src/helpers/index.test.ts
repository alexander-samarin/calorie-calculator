import { describe, expect, it } from "vitest";
import {
  findOptionValue,
  isOutOfRange,
  parseClamped,
  parseInRange,
  sanitizeNumericText,
} from "./index";

const LIMITS = { MIN: 20, MAX: 300 };

describe("parseInRange / isOutOfRange", () => {
  it.each([
    ["70", 70],
    ["70.5", 70.5],
    ["20", 20],
    ["300", 300],
    ["", null],
    ["  ", null],
    ["19.9", null],
    ["301", null],
    [".", null],
    ["abc", null],
  ])("%j → %j", (value, expected) => {
    expect(parseInRange(value, LIMITS)).toBe(expected);
  });

  it("treats empty input as not out of range", () => {
    expect(isOutOfRange("", LIMITS)).toBe(false);
    expect(isOutOfRange("1", LIMITS)).toBe(true);
    expect(isOutOfRange("70", LIMITS)).toBe(false);
  });
});

describe("sanitizeNumericText (restoring saved inputs)", () => {
  it.each([
    ["70", "70"],
    ["70.5", "70.5"],
    [".5", ".5"],
    [null, null],
    ["", null],
    [".", null],
    ["1e3", null],
    ["-5", null],
    ["1.2.3", null],
    ["<script>", null],
    ["7000000", null], // longer than 6 chars
  ])("%j → %j", (value, expected) => {
    expect(sanitizeNumericText(value)).toBe(expected);
  });
});

describe("findOptionValue", () => {
  const numeric = [{ value: 1.2 }, { value: 1.55 }] as const;
  const text = [{ value: "female" }, { value: "male" }] as const;

  it("matches by string form", () => {
    expect(findOptionValue(numeric, "1.55")).toBe(1.55);
    expect(findOptionValue(text, "male")).toBe("male");
  });

  it("returns null for unknown values", () => {
    expect(findOptionValue(numeric, "7")).toBeNull();
    expect(findOptionValue(text, "robot")).toBeNull();
    expect(findOptionValue(text, null)).toBeNull();
  });
});

describe("parseClamped (restoring slider values)", () => {
  const range = { MIN: 1.2, MAX: 2.5 };

  it.each([
    ["1.5", 1.5],
    ["9", 2.5],
    ["0.1", 1.2],
    ["1.55", 1.6], // rounded to the 0.1 step
    ["NaN", null],
    ["foo", null],
    ["", null],
    [null, null],
  ])("%j → %j", (value, expected) => {
    expect(parseClamped(value, range)).toBe(expected);
  });
});
