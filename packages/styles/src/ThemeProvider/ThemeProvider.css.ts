import { createTheme } from '@vanilla-extract/css';

import { themeContract } from '../theme.css';
import { defaultTheme } from '../themes';

export const defaultThemeStyle = createTheme(themeContract, defaultTheme);
