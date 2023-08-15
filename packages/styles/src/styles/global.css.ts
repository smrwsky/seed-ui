import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

import { DEFAULT_THEME } from '../const';

export const vars = createThemeContract(DEFAULT_THEME);

export const defaultTheme = createTheme(vars, DEFAULT_THEME);

globalStyle('*', {
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('input, select, textarea', {
  outline: 'none',
});

globalStyle(':focus-visible:not(input):not(select):not(textarea)', {
  outline: 'none',
  boxShadow: vars.boxShadow.focus,
});

globalStyle('body', {
  color: vars.color.neutral900,
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.textMd.primary,

  fontSmooth: 'antialiased',
  textRendering: 'optimizeLegibility',
  backgroundColor: vars.color.white,
});

globalStyle('img', {
  fontFamily: vars.fontFamily.primary,
  fontSize: 'xs',
  letterSpacing: 'wide',
  lineHeight: 'snug',
});

globalStyle('ul', {
  listStyle: 'none',
});
