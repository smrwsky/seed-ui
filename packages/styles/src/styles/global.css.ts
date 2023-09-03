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

globalStyle('body', {
  color: vars.color.neutral900,
  fontFamily: vars.fontFamily.primary,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.wider,
  lineHeight: vars.lineHeight.normal,
  fontSmooth: 'antialiased',
  textRendering: 'optimizeLegibility',
});

globalStyle('ol, ul', {
  paddingInlineStart: '1.5em',
});

globalStyle('ul', {
  listStyle: 'none',
});

globalStyle('li', {
  position: 'relative',
});

globalStyle('li:not(:last-of-type)', {
  marginBottom: '.5em',
});

globalStyle('a', {
  color: vars.color.primary500,
  cursor: 'pointer',
  textDecoration: 'none',
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

globalStyle('a:visited', {
  color: vars.color.secondary500,
});

globalStyle('img', {
  fontFamily: vars.fontFamily.primary,
  fontSize: 'xs',
  letterSpacing: 'wide',
  lineHeight: 'snug',
});

globalStyle('input, select, textarea', {
  outline: 'none',
});

globalStyle(
  'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), select, textarea',
  {
    flex: 1,
    maxWidth: '100%',
    width: '100%',
    borderRadius: 0,
    border: 0,
    fontFamily: vars.fontFamily.primary,
    fontSize: vars.fontSize.md,
    fontWeight: vars.fontWeight.regular,
    letterSpacing: vars.letterSpacing.wider,
    lineHeight: vars.lineHeight.normal,
    background: 'transparent',
    outline: 'none',
    padding: '0 0.25rem',
  },
);

globalStyle(
  'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):disabled, select:disabled, textarea:disabled',
  {
    color: vars.color.neutral200,
    cursor: 'not-allowed',
    opacity: 1,
    WebkitTextFillColor: vars.color.neutral200,
  },
);

globalStyle('::placeholder', {
  color: vars.color.neutral100,
  opacity: 1,
});

globalStyle(':focus-visible:not(input):not(select):not(textarea)', {
  outline: 'none',
  boxShadow: vars.boxShadow.focus,
});
