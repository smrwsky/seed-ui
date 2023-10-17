import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

import { DEFAULT_THEME } from '../const';

export const vars = createThemeContract(DEFAULT_THEME);

export const defaultTheme = createTheme(vars, DEFAULT_THEME);

// Ignore the following lines in development mode because they are conflicting
// with bundled styles.

if (process.env.NODE_ENV !== 'development') {
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

  globalStyle('li+li', {
    marginTop: '.5em',
  });

  globalStyle('a', {
    color: vars.color.primary500,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: vars.transition.base,
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

  globalStyle('button, [type="button"], [type="submit"]', {
    border: 'none',
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
    background: 'transparent',
    WebkitTapHighlightColor: 'transparent',
    padding: 0,
    cursor: 'pointer',
  });

  globalStyle(
    'button:disabled, [type="button"]:disabled, [type="submit"]:disabled',
    {
      cursor: 'not-allowed',
    },
  );

  globalStyle('input, select, textarea', {
    outline: 'none',
  });

  globalStyle(
    'input:not([type="checkbox"]):not([type="radio"]), textarea, select',
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
      padding: '0 0.25rem',
    },
  );

  globalStyle(
    'input:not([type="checkbox"]):not([type="radio"]):not(:placeholder-shown):disabled,' +
      'textarea:not(:placeholder-shown):disabled,' +
      'select:disabled',
    {
      color: vars.color.neutral300,
      cursor: 'not-allowed',
      opacity: 1,
      WebkitTextFillColor: vars.color.neutral300,
    },
  );

  globalStyle('select', {
    appearance: 'none',
  });

  globalStyle('label', {
    display: 'block',
  });

  globalStyle('::placeholder', {
    color: vars.color.neutral200,
    opacity: 1,
  });

  globalStyle('::-ms-input-placeholder', {
    color: vars.color.neutral200,
  });

  globalStyle(':focus-visible:not(input):not(select):not(textarea)', {
    outline: 'none',
    boxShadow: vars.boxShadow.focus,
  });
}
