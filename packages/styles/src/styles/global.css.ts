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

  globalStyle('img', {
    fontFamily: vars.fontFamily.primary,
    fontSize: 'xs',
    letterSpacing: 'wide',
    lineHeight: 'snug',
  });

  globalStyle('label', {
    display: 'block',
  });

  // button styles

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

  // base inputs styles

  globalStyle('input, select, textarea', {
    outline: 'none',
  });

  globalStyle(
    'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), textarea, select',
    {
      width: '100%',
      maxWidth: '100%',
      borderRadius: 0,
      border: 0,
      fontFamily: vars.fontFamily.primary,
      fontSize: vars.fontSize.md,
      fontWeight: vars.fontWeight.regular,
      letterSpacing: vars.letterSpacing.wider,
      lineHeight: vars.lineHeight.normal,
      background: 'transparent',
      padding: '0 0.25rem',
      cursor: 'pointer',
    },
  );

  globalStyle('::placeholder', {
    color: vars.color.neutral400,
    opacity: 1,
  });

  globalStyle(
    'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):disabled,' +
      'textarea:disabled,' +
      'select:disabled',
    {
      color: vars.color.neutral900,
      opacity: 0.4,
      WebkitTextFillColor: vars.color.neutral900,
    },
  );

  globalStyle(
    'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):disabled::placeholder,' +
      'textarea:disabled::placeholder,' +
      'select:disabled::placeholder',
    {
      opacity: 0.4,
    },
  );

  globalStyle('select', {
    appearance: 'none',
  });

  globalStyle(':focus-visible:not(input):not(select):not(textarea)', {
    outline: 'none',
    boxShadow: vars.boxShadow.focus,
  });

  // radio and checkbox styles

  globalStyle('[type=checkbox], [type=radio]', {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    border: `1px solid ${vars.color.neutral300}`,
    color: vars.color.primary500,
    lineHeight: '100%',
    verticalAlign: 'middle',
    backgroundColor: vars.color.neutral100,
    backgroundOrigin: 'border-box',
    transition: vars.transition.base,
    WebkitPrintColorAdjust: 'exact',
    printColorAdjust: 'exact',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    margin: '0.25em',
    cursor: 'pointer',
  });

  globalStyle('[type=checkbox]', {
    borderRadius: vars.borderRadius.sm,
  });

  globalStyle('[type=radio]', {
    borderRadius: vars.borderRadius.full,
  });

  globalStyle('[type=checkbox]:checked, [type=radio]:checked', {
    borderColor: 'transparent',
    backgroundColor: vars.color.primary500,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  globalStyle('[type=checkbox]:checked', {
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3E%3C/svg%3E\")",
    backgroundSize: '62.5%',
  });

  globalStyle('[type=radio]:checked', {
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='16px' height='16px'><circle cx='8' cy='8' r='8' fill='white'/%3E%3C/svg%3E\")",
    backgroundSize: '37.5%',
  });

  globalStyle('[type=checkbox]:focus, [type=radio]:focus', {
    boxShadow: vars.boxShadow.focus,
  });

  globalStyle(
    '[type=checkbox][data-invalid="true"], [type=radio][data-invalid="true"]',
    {
      borderColor: vars.color.danger400,
    },
  );

  globalStyle(
    '[type=checkbox][data-invalid="true"]:checked, [type=radio][data-invalid="true"]:checked',
    {
      borderColor: 'transparent',
      backgroundColor: vars.color.danger500,
    },
  );

  globalStyle(
    '[type=checkbox][data-invalid="true"]:focus, [type=radio][data-invalid="true"]:focus',
    {
      boxShadow: vars.boxShadow.focusDanger,
    },
  );

  globalStyle('[type=checkbox]:disabled, [type=radio]:disabled', {
    opacity: 0.4,
  });

  // range input styles

  globalStyle('[type="range"]', {
    WebkitAppearance: 'none',
    appearance: 'none',
    width: '100%',
    background: 'transparent',
    cursor: 'pointer',
  });

  globalStyle('[type="range"]::-webkit-slider-runnable-track', {
    height: '0.25rem',
    borderRadius: vars.borderRadius.full,
    background: vars.color.neutral100,
    boxShadow: vars.boxShadow.inset,
  });

  globalStyle('[type="range"]::-moz-range-track', {
    height: '0.25rem',
    borderRadius: vars.borderRadius.full,
    background: vars.color.neutral100,
    boxShadow: vars.boxShadow.inset,
  });

  globalStyle('[type="range"]::-webkit-slider-thumb', {
    WebkitAppearance: 'none',
    appearance: 'none',
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: vars.borderRadius.full,
    background: vars.color.primary500,
    boxShadow: vars.boxShadow.sm,
    transition: vars.transition.base,
    marginTop: '-0.25rem',
  });

  globalStyle('[type="range"]::-moz-range-thumb', {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: vars.borderRadius.full,
    border: 'none',
    background: vars.color.primary500,
    boxShadow: vars.boxShadow.sm,
    transition: vars.transition.base,
  });

  globalStyle('[type="range"]:hover::-webkit-slider-thumb', {
    transform: 'scale(1.33)',
  });

  globalStyle('[type="range"]:hover::-moz-range-thumb', {
    transform: 'scale(1.33)',
  });

  globalStyle('[type="range"]:focus', {
    outline: 'none',
  });

  globalStyle('[type="range"]:focus::-webkit-slider-thumb', {
    boxShadow: vars.boxShadow.focus,
  });

  globalStyle('[type="range"]:focus::-moz-range-thumb', {
    boxShadow: vars.boxShadow.focus,
  });

  globalStyle('[type="range"][data-invalid="true"]::-webkit-slider-thumb', {
    background: vars.color.danger500,
  });

  globalStyle(
    '[type="range"][data-invalid="true"]:focus::-webkit-slider-thumb',
    {
      boxShadow: vars.boxShadow.focusDanger,
    },
  );

  globalStyle('[type="range"]:disabled::-webkit-slider-thumb', {
    background: vars.color.neutral300,
    transform: 'none',
  });

  globalStyle('[type="range"]:disabled::-moz-range-thumb', {
    background: vars.color.neutral300,
    transform: 'none',
  });

  globalStyle(':disabled', {
    cursor: 'not-allowed',
  });
}
