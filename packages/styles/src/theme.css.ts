import { createThemeContract, fallbackVar } from '@vanilla-extract/css';

import { defaultTheme } from './themes';

type Contract = {
  [key: string]: string | null | Contract;
};

function normalizeVars<TValue extends Contract>(
  values: TValue,
  fallback: Contract,
): TValue {
  return Object.entries(values).reduce((acc, [key, val]) => {
    const fallbackVal: Contract[keyof Contract] = acc[key];

    if (typeof val === 'string' && typeof fallbackVal === 'string') {
      return {
        ...acc,
        [key]: fallbackVar(val, fallbackVal),
      };
    }

    if (
      typeof val === 'object' &&
      val !== null &&
      typeof fallbackVal === 'object' &&
      fallbackVal !== null
    ) {
      return {
        ...acc,
        [key]: normalizeVars(val, fallbackVal),
      };
    }

    return acc;
  }, fallback as TValue);
}

export const themeContract = createThemeContract(defaultTheme);

export const theme = normalizeVars(themeContract, defaultTheme);
