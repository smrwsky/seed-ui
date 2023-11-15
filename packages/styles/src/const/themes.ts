import hexToRgba from 'hex-to-rgba';

import { Theme } from '../types';

import { colors } from './colors';

export const DEFAULT_THEME: Theme = {
  border: {
    thin: '1px solid',
    medium: '2px solid',
    thick: '4px solid',
    none: 'none',
  },

  borderRadius: {
    'xs': '0.125rem', // 2px
    'sm': '0.25rem', // 4px
    'md': '0.375rem', // 6px
    'lg': '0.5rem', // 8px
    'xl': '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
    'full': '9999px',
    'none': 'none',
  },

  boxShadow: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.06)',

    primary: `0 1px 3px 0 ${hexToRgba(
      colors.blue500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.blue500, 0.1)}`,

    accent: `0 1px 3px 0 ${hexToRgba(
      colors.purple500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.purple500, 0.1)}`,

    light:
      '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',

    focus: `0 0 0 3px ${hexToRgba(colors.blue400, 0.5)}`,
    focusDanger: `0 0 0 3px ${hexToRgba(colors.red400, 0.5)}`,
    inset: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },

  color: {
    black: colors.black,
    white: colors.white,

    primary900: colors.blue900,
    primary800: colors.blue800,
    primary700: colors.blue700,
    primary600: colors.blue600,
    primary500: colors.blue500,
    primary400: colors.blue400,
    primary300: colors.blue300,
    primary200: colors.blue200,
    primary100: colors.blue100,
    primary50: colors.blue50,

    accent900: colors.purple900,
    accent800: colors.purple800,
    accent700: colors.purple700,
    accent600: colors.purple600,
    accent500: colors.purple500,
    accent400: colors.purple400,
    accent300: colors.purple300,
    accent200: colors.purple200,
    accent100: colors.purple100,
    accent50: colors.purple50,

    info900: colors.cian900,
    info800: colors.cian800,
    info700: colors.cian700,
    info600: colors.cian600,
    info500: colors.cian500,
    info400: colors.cian400,
    info300: colors.cian300,
    info200: colors.cian200,
    info100: colors.cian100,
    info50: colors.cian50,

    success900: colors.green900,
    success800: colors.green800,
    success700: colors.green700,
    success600: colors.green600,
    success500: colors.green500,
    success400: colors.green400,
    success300: colors.green300,
    success200: colors.green200,
    success100: colors.green100,
    success50: colors.green50,

    warning900: colors.orange900,
    warning800: colors.orange800,
    warning700: colors.orange700,
    warning600: colors.orange600,
    warning500: colors.orange500,
    warning400: colors.orange400,
    warning300: colors.orange300,
    warning200: colors.orange200,
    warning100: colors.orange100,
    warning50: colors.orange50,

    danger900: colors.red900,
    danger800: colors.red800,
    danger700: colors.red700,
    danger600: colors.red600,
    danger500: colors.red500,
    danger400: colors.red400,
    danger300: colors.red300,
    danger200: colors.red200,
    danger100: colors.red100,
    danger50: colors.red50,

    neutral900: colors.grey900,
    neutral800: colors.grey800,
    neutral700: colors.grey700,
    neutral600: colors.grey600,
    neutral500: colors.grey500,
    neutral400: colors.grey400,
    neutral300: colors.grey300,
    neutral200: colors.grey200,
    neutral100: colors.grey100,
    neutral50: colors.grey50,

    light900: colors.light900,
    light800: colors.light800,
    light700: colors.light700,
    light600: colors.light600,
    light500: colors.light500,
    light400: colors.light400,
    light300: colors.light300,
    light200: colors.light200,
    light100: colors.light100,
    light50: colors.light50,

    dark900: colors.dark900,
    dark800: colors.dark800,
    dark700: colors.dark700,
    dark600: colors.dark600,
    dark500: colors.dark500,
    dark400: colors.dark400,
    dark300: colors.dark300,
    dark200: colors.dark200,
    dark100: colors.dark100,
    dark50: colors.dark50,
  },

  fontFamily: {
    primary: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    secondary: 'Vollkorn,Georgia,Cambria,"Times New Roman",Times,serif',
  },

  fontSize: {
    'xs': '0.75rem', // 12px
    'sm': '0.875rem', // 14px
    'md': '1rem', // 16px
    'lg': '1.125rem', // 18px
    'xl': '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.75rem', // 28px
    '4xl': '2rem', // 32px
    '5xl': '2.5rem', // 40px
    '6xl': '3rem', // 48px
  },

  fontWeight: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },

  letterSpacing: {
    tighter: '0',
    tight: '0.002em',
    normal: '0.004em',
    wide: '0.008em',
    wider: '0.012em',
    widest: '0.024em',
  },

  lineHeight: {
    none: '1',
    tight: '1.112',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  transition: {
    base: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, text-decoration-color 0.15s ease-in-out, fill 0.15s ease-in-out, stroke 0.15s ease-in-out, opacity 0.15s ease-in-out, box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out, filter 0.15s ease-in-out, backdrop-filter 0.15s ease-in-out',
    fade: 'opacity 0.15s linear',
    collapse: 'max-height 0.3s ease',
  },
};
