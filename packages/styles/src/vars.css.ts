import { createThemeContract } from '@vanilla-extract/css';

import { defaultTheme } from './const';

export const vars = createThemeContract(defaultTheme);
