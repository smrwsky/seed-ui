import { createTheme } from '@vanilla-extract/css';

import { vars } from '../vars.css';
import { defaultTheme } from '../const';

export const defaultThemeStyle = createTheme(vars, defaultTheme);
