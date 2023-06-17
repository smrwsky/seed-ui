import hexToRgba from 'hex-to-rgba';

import { Theme } from '../types';

import { colors } from './colors';

export const DEFAULT_THEME: Theme = {
  width: {
    containerMobile: '540px',
    containerMobileLg: '720px',
    containerTablet: '960px',
    containerDesktop: '1140px',
    containerDesktopLg: '1320px',
  },

  border: {
    thin: '1px solid',
    medium: '2px solid',
    thick: '4px solid',
    none: 'none',
  },

  borderRadius: {
    sm: '0.125rem', // 2px - rectangles, banners etc.
    md: '0.25rem', // 4px - input, buttons, popups etc.
    lg: '0.5rem', // 8px - modals, small cards etc.
    xl: '0.75rem', // 12px - large cards
    full: '9999px',
    none: 'none',
  },

  boxShadow: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.06)',

    primary: `0 1px 3px 0 ${hexToRgba(
      colors.blue500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.blue500, 0.1)}`,

    secondary: `0 1px 3px 0 ${hexToRgba(
      colors.purple500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.purple500, 0.1)}`,

    info: `0 1px 3px 0 ${hexToRgba(
      colors.cian500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.cian500, 0.1)}`,

    success: `0 1px 3px 0 ${hexToRgba(
      colors.green500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.green500, 0.1)}`,

    warning: `0 1px 3px 0 ${hexToRgba(
      colors.orange500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.orange500, 0.1)}`,

    danger: `0 1px 3px 0 ${hexToRgba(
      colors.red500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(colors.red500, 0.1)}`,

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

    secondary900: colors.purple900,
    secondary800: colors.purple800,
    secondary700: colors.purple700,
    secondary600: colors.purple600,
    secondary500: colors.purple500,
    secondary400: colors.purple400,
    secondary300: colors.purple300,
    secondary200: colors.purple200,
    secondary100: colors.purple100,
    secondary50: colors.purple50,

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

  /**
   * Font ratio: 1.2 (5:6 - Minor Third)
   * @See: https://www.modularscale.com/?16&px&1.2
   */

  typography: {
    titleXl: {
      primary: {
        fontSize: '2.986rem', // 47.776px
        fontWeight: '500',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },

      secondary: {
        fontSize: '2.986rem', // 47.776px
        fontWeight: '900',
        letterSpacing: '0.75px',
        lineHeight: '1.112',
      },
    },

    titleLg: {
      primary: {
        fontSize: '2.488rem', // 39.813px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '2.488rem', // 39.813px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
    },

    titleMd: {
      primary: {
        fontSize: '2.074rem', // 33.178px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '2.074rem', // 33.178px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
    },

    titleSm: {
      primary: {
        fontSize: '1.728rem', // 27.648px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1.728rem', // 27.648px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
    },

    titleXs: {
      primary: {
        fontSize: '1.44rem', // 23.04px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1.44rem', // 23.04px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
    },

    subtitleMd: {
      primary: {
        fontSize: '1.2rem', // 19.2px
        fontWeight: '700',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1.2rem', // 19.2px
        fontWeight: '600',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
    },

    subtitleSm: {
      primary: {
        fontSize: '1rem', // 16px
        fontWeight: '700',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1rem', // 16px
        fontWeight: '600',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
    },

    textMd: {
      primary: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        letterSpacing: '0.13px',
        lineHeight: '1.5',
      },
      secondary: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
      },
    },

    textSm: {
      primary: {
        fontSize: '0.833rem', // 13.333px
        fontWeight: '400',
        letterSpacing: '0.13px',
        lineHeight: '1.5',
      },
      secondary: {
        fontSize: '0.833rem', // 13.333px
        fontWeight: '400',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
      },
    },

    labelMd: {
      fontSize: '1rem', // 16px
      fontWeight: '600',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },

    labelSm: {
      fontSize: '0.833rem', // 13.333px
      fontWeight: '600',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },

    overline: {
      fontSize: '0.694rem', // 11.111px
      fontWeight: '400',
      letterSpacing: '1.5px',
      lineHeight: '1.2',
    },

    caption: {
      fontSize: '0.694rem', // 11.111px
      fontWeight: '400',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },

    bold: {
      fontWeight: '600',
    },

    button: {
      fontSize: '0.833rem', // 13.333px
      fontWeight: '400',
      letterSpacing: '0.75px',
      lineHeight: '1.2',
    },
  },

  transition: {
    base: 'all 0.15s ease-in-out',
    fade: 'opacity 0.15s linear',
    collapse: 'height 0.3s ease',
  },

  zIndex: {
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modalBackdrop: '1040',
    modal: '1050',
    popover: '1060',
    tooltip: '1070',
    toast: '1080',
  },
};
