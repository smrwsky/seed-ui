import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

import { DEFAULT_THEME } from '../const';

export const vars = createGlobalTheme(':root', DEFAULT_THEME);

globalStyle('body', {
  color: vars.color.neutral900,
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.textMd.secondary,

  fontSmooth: 'antialiased',
  textRendering: 'optimizeLegibility',
  backgroundColor: vars.color.white,
});
