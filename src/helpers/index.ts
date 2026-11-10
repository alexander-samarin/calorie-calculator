import type { InputLimits } from "~/constants";

const isBrowser = typeof window !== "undefined";

export const storage = {
  get: (key: string): string | null => {
    if (!isBrowser) return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string): void => {
    if (!isBrowser) return;
    try {
      localStorage.setItem(key, value);
    } catch {
      // Storage quota exceeded or private mode
    }
  },
  remove: (key: string): void => {
    if (!isBrowser) return;
    try {
      localStorage.removeItem(key);
    } catch {
      // Storage unavailable
    }
  },
};

/**
 * Parses a numeric input string. Returns null for empty, non-numeric
 * or out-of-range values.
 */
export const parseInRange = (
  value: string,
  limits: InputLimits,
): number | null => {
  if (value.trim() === "") return null;
  const n = Number(value);
  if (!Number.isFinite(n) || n < limits.MIN || n > limits.MAX) return null;
  return n;
};

/** True when the field has a value that parseInRange rejects */
export const isOutOfRange = (value: string, limits: InputLimits): boolean =>
  value.trim() !== "" && parseInRange(value, limits) === null;

/** Max length of a stored numeric field ("123.45") */
const MAX_NUMERIC_TEXT_LENGTH = 6;

/**
 * Returns the stored text of a numeric input if it looks like something the
 * user could have typed (digits with an optional single dot), otherwise null.
 */
export const sanitizeNumericText = (value: string | null): string | null => {
  if (!value || value.length > MAX_NUMERIC_TEXT_LENGTH) return null;
  return /^\d*\.?\d*$/.test(value) && /\d/.test(value) ? value : null;
};

/**
 * Finds the option whose value matches the stored string
 * (numbers are compared by their string form). Returns null if none.
 */
export const findOptionValue = <T extends string | number>(
  options: readonly { value: T }[],
  stored: string | null,
): T | null => {
  if (stored === null) return null;
  return (
    options.find((option) => String(option.value) === stored)?.value ?? null
  );
};

/**
 * Parses a stored slider value and clamps it to [MIN, MAX], rounded to
 * one decimal (all slider steps are 0.1). Returns null if not a number.
 */
export const parseClamped = (
  stored: string | null,
  range: { readonly MIN: number; readonly MAX: number },
): number | null => {
  if (stored === null || stored.trim() === "") return null;
  const n = Number(stored);
  if (!Number.isFinite(n)) return null;
  const clamped = Math.min(range.MAX, Math.max(range.MIN, n));
  return Math.round(clamped * 10) / 10;
};
