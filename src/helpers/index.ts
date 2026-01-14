export const storage = {
  get: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Storage quota exceeded or private mode
    }
  },
};

/**
 * Склонение слова в зависимости от числа
 * @param n - число
 * @param forms - массив форм [для 1, для 2-4, для 5-20]
 * @example pluralize(5, ['грамм', 'грамма', 'граммов']) // 'граммов'
 */
export const pluralize = (n: number, forms: [string, string, string]): string => {
  const abs = Math.abs(n);
  const mod10 = abs % 10;
  const mod100 = abs % 100;

  if (mod100 >= 11 && mod100 <= 19) {
    return forms[2];
  }
  if (mod10 === 1) {
    return forms[0];
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return forms[1];
  }
  return forms[2];
};
