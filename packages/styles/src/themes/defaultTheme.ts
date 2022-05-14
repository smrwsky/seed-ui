import { color } from '../const';

// Font ratio: 1.2 (5:6 - Minor Third)
// @See: https://www.modularscale.com/?16&px&1.2
// Use em for large font-sizes to make them responsive

const defaultTheme = {
  color: {
    ...color,

    primary900: color.turquose900,
    primary800: color.turquose800,
    primary700: color.turquose700,
    primary600: color.turquose600,
    primary500: color.turquose500,
    primary400: color.turquose400,
    primary300: color.turquose300,
    primary200: color.turquose200,
    primary100: color.turquose100,
    primary50: color.turquose50,

    accent900: color.fuchsia900,
    accent800: color.fuchsia800,
    accent700: color.fuchsia700,
    accent600: color.fuchsia600,
    accent500: color.fuchsia500,
    accent400: color.fuchsia400,
    accent300: color.fuchsia300,
    accent200: color.fuchsia200,
    accent100: color.fuchsia100,
    accent50: color.fuchsia50,
  },

  fontFamily: {
    base: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    serif: 'Vollkorn,Georgia,Cambria,"Times New Roman",Times,serif',
  },

  typography: {
    titleXl: {
      base: {
        fontSize: '2.986em', // 47.776px
        fontWeight: '900',
        letterSpacing: '0.75px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '2.986em', // 47.776px
        fontWeight: '500',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
    },
    titleLg: {
      base: {
        fontSize: '2.488em', // 39.813px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '2.488em', // 39.813px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    titleMd: {
      base: {
        fontSize: '2.074em', // 33.178px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '2.074em', // 33.178px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    titleSm: {
      base: {
        fontSize: '1.728em', // 27.648px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1.728em', // 27.648px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    titleXs: {
      base: {
        fontSize: '1.44em', // 23.04px
        fontWeight: '700',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1.44em', // 23.04px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    subtitleMd: {
      base: {
        fontSize: '1.2em', // 19.2px
        fontWeight: '600',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1.2em', // 19.2px
        fontWeight: '700',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    subtitleSm: {
      base: {
        fontSize: '1em', // 16px
        fontWeight: '600',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1em', // 16px
        fontWeight: '700',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    textMd: {
      base: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
      },
      serif: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        letterSpacing: '0.13px',
        lineHeight: '1.5',
      },
    },
    textSm: {
      base: {
        fontSize: '0.833rem', // 13.333px
        fontWeight: '400',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
      },
      serif: {
        fontSize: '0.833rem', // 13.333px
        fontWeight: '400',
        letterSpacing: '0.13px',
        lineHeight: '1.5',
      },
    },
    labelMd: {
      fontSize: '1rem', // 16px
      fontWeight: '500',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },
    labelSm: {
      fontSize: '0.833rem', // 13.333px
      fontWeight: '500',
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
    button: {
      fontSize: '0.833rem', // 13.333px
      fontWeight: '400',
      letterSpacing: '0.75px',
      lineHeight: '1.2',
    },
  },
};

export default defaultTheme;
