import { createTheme } from '@vanilla-extract/css';

import { defaultTheme } from '../const';
import { vars } from '../vars.css';

export const defaultThemeStyle = createTheme(vars, defaultTheme);
