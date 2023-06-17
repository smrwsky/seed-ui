import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

import { DEFAULT_THEME } from '../const';

export const vars = createThemeContract(DEFAULT_THEME);

export const defaultTheme = createTheme(vars, DEFAULT_THEME);

globalStyle('body', {
  color: vars.color.neutral900,
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.textMd.primary,

  fontSmooth: 'antialiased',
  textRendering: 'optimizeLegibility',
  backgroundColor: vars.color.white,
});
