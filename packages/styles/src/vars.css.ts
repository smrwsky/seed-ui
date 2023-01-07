import { createThemeContract } from '@vanilla-extract/css';

import defaultTheme from './const/default-theme';

export const vars = createThemeContract(defaultTheme);
