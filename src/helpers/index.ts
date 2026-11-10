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
