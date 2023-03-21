import hexToRgba from 'hex-to-rgba';

import { color } from './atoms';

export const DEFAULT_THEME = {
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
      color.fuchsia500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(color.fuchsia500, 0.1)}`,

    secondary: `0 1px 3px 0 ${hexToRgba(
      color.turquose500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(color.turquose500, 0.1)}`,

    info: `0 1px 3px 0 ${hexToRgba(
      color.cian500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(color.cian500, 0.1)}`,

    success: `0 1px 3px 0 ${hexToRgba(
      color.green500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(color.green500, 0.1)}`,

    warning: `0 1px 3px 0 ${hexToRgba(
      color.orange500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(color.orange500, 0.1)}`,

    danger: `0 1px 3px 0 ${hexToRgba(
      color.red500,
      0.2,
    )}, 0 1px 2px 0 ${hexToRgba(color.red500, 0.1)}`,

    light:
      '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',

    focus: `0 0 0 3px ${hexToRgba(color.turquose500, 0.5)}`,
    focusDanger: `0 0 0 3px ${hexToRgba(color.red500, 0.5)}`,
    inset: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },

  color: {
    black: color.black,
    white: color.white,

    primary900: color.fuchsia900,
    primary800: color.fuchsia800,
    primary700: color.fuchsia700,
    primary600: color.fuchsia600,
    primary500: color.fuchsia500,
    primary400: color.fuchsia400,
    primary300: color.fuchsia300,
    primary200: color.fuchsia200,
    primary100: color.fuchsia100,
    primary50: color.fuchsia50,

    secondary900: color.turquose900,
    secondary800: color.turquose800,
    secondary700: color.turquose700,
    secondary600: color.turquose600,
    secondary500: color.turquose500,
    secondary400: color.turquose400,
    secondary300: color.turquose300,
    secondary200: color.turquose200,
    secondary100: color.turquose100,
    secondary50: color.turquose50,

    info900: color.cian900,
    info800: color.cian800,
    info700: color.cian700,
    info600: color.cian600,
    info500: color.cian500,
    info400: color.cian400,
    info300: color.cian300,
    info200: color.cian200,
    info100: color.cian100,
    info50: color.cian50,

    success900: color.green900,
    success800: color.green800,
    success700: color.green700,
    success600: color.green600,
    success500: color.green500,
    success400: color.green400,
    success300: color.green300,
    success200: color.green200,
    success100: color.green100,
    success50: color.green50,

    warning900: color.orange900,
    warning800: color.orange800,
    warning700: color.orange700,
    warning600: color.orange600,
    warning500: color.orange500,
    warning400: color.orange400,
    warning300: color.orange300,
    warning200: color.orange200,
    warning100: color.orange100,
    warning50: color.orange50,

    danger900: color.red900,
    danger800: color.red800,
    danger700: color.red700,
    danger600: color.red600,
    danger500: color.red500,
    danger400: color.red400,
    danger300: color.red300,
    danger200: color.red200,
    danger100: color.red100,
    danger50: color.red50,

    neutral900: color.grey900,
    neutral800: color.grey800,
    neutral700: color.grey700,
    neutral600: color.grey600,
    neutral500: color.grey500,
    neutral400: color.grey400,
    neutral300: color.grey300,
    neutral200: color.grey200,
    neutral100: color.grey100,
    neutral50: color.grey50,

    light900: color.light900,
    light800: color.light800,
    light700: color.light700,
    light600: color.light600,
    light500: color.light500,
    light400: color.light400,
    light300: color.light300,
    light200: color.light200,
    light100: color.light100,
    light50: color.light50,

    dark900: color.dark900,
    dark800: color.dark800,
    dark700: color.dark700,
    dark600: color.dark600,
    dark500: color.dark500,
    dark400: color.dark400,
    dark300: color.dark300,
    dark200: color.dark200,
    dark100: color.dark100,
    dark50: color.dark50,
  },

  fontFamily: {
    primary: 'Vollkorn,Georgia,Cambria,"Times New Roman",Times,serif',
    secondary: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
  },

  /**
   * Font ratio: 1.2 (5:6 - Minor Third)
   * @See: https://www.modularscale.com/?16&px&1.2
   */

  typography: {
    titleXl: {
      primary: {
        fontSize: '2.986rem', // 47.776px
        fontWeight: '900',
        letterSpacing: '0.75px',
        lineHeight: '1.112',
      },

      secondary: {
        fontSize: '2.986rem', // 47.776px
        fontWeight: '500',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
    },

    titleLg: {
      primary: {
        fontSize: '2.488rem', // 39.813px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '2.488rem', // 39.813px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },

    titleMd: {
      primary: {
        fontSize: '2.074rem', // 33.178px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '2.074rem', // 33.178px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },

    titleSm: {
      primary: {
        fontSize: '1.728rem', // 27.648px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1.728rem', // 27.648px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },

    titleXs: {
      primary: {
        fontSize: '1.44rem', // 23.04px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1.44rem', // 23.04px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },

    subtitleMd: {
      primary: {
        fontSize: '1.2rem', // 19.2px
        fontWeight: '600',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1.2rem', // 19.2px
        fontWeight: '700',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },

    subtitleSm: {
      primary: {
        fontSize: '1rem', // 16px
        fontWeight: '600',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
      secondary: {
        fontSize: '1rem', // 16px
        fontWeight: '700',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },

    textMd: {
      primary: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
      },
      secondary: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        letterSpacing: '0.13px',
        lineHeight: '1.5',
      },
    },

    textSm: {
      primary: {
        fontSize: '0.833rem', // 13.333px
        fontWeight: '400',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
      },
      secondary: {
        fontSize: '0.833rem', // 13.333px
        fontWeight: '400',
        letterSpacing: '0.13px',
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
