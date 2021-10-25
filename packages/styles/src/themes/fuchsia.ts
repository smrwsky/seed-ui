import { color } from '../const';

// Font ratio: 1.25 (4:5 - Major Third)
// @See: https://www.modularscale.com/?16&px&1.25

//   'xs': '0.64rem', // 10.24px
//   'sm': '0.8rem', // 12.8px
//   'md': '1rem', // 16px

// Use em for large font-sizes to make them responsive

//   'lg': '1.25em', // 20px
//   'xl': '1.563em', // 25px
//   '2xl': '1.953em', // 31.25px
//   '3xl': '2.441em', // 39.063px
//   '4xl': '3.052em', // 48.828px
//   '5xl': '3.815em', // 61.035px

export const fuchsia = {
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
    base: 'Lato,"Helvetica Neue",Helvetica,Arial,sans-serif',
    serif: 'Vollkorn,Georgia,Cambria,"Times New Roman",Times,serif',
  },

  typography: {
    titleXl: {
      base: {
        fontSize: '3.815em', // 61.035px
        fontWeight: '900',
        letterSpacing: '0.75px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '3.815em', // 61.035px
        fontWeight: '500',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
    },
    titleLg: {
      base: {
        fontSize: '3.052em', // 48.828px
        fontWeight: '900',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '3.052em', // 48.828px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    titleMd: {
      base: {
        fontSize: '2.441em', // 39.063px
        fontWeight: '900',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '2.441em', // 39.063px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    titleSm: {
      base: {
        fontSize: '1.953em', // 31.25px
        fontWeight: '900',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1.953em', // 31.25px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    titleXs: {
      base: {
        fontSize: '1.563em', // 25px
        fontWeight: '900',
        letterSpacing: '0.5px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1.563em', // 25px
        fontWeight: '600',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    subtitleMd: {
      base: {
        fontSize: '1.25em', // 20px
        fontWeight: '700',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1.25em', // 20px
        fontWeight: '700',
        letterSpacing: '0.13px',
        lineHeight: '1.112',
      },
    },
    subtitleSm: {
      base: {
        fontSize: '1rem', // 16px
        fontWeight: '700',
        letterSpacing: '0.25px',
        lineHeight: '1.112',
      },
      serif: {
        fontSize: '1rem', // 16px
        fontWeight: '600',
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
        fontSize: '0.8rem', // 12.8px
        fontWeight: '400',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
      },
      serif: {
        fontSize: '0.8rem', // 12.8px
        fontWeight: '400',
        letterSpacing: '0.13px',
        lineHeight: '1.5',
      },
    },
    labelMd: {
      fontSize: '1rem', // 16px
      fontWeight: '700',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },
    labelSm: {
      fontSize: '0.8rem', // 12.8px
      fontWeight: '700',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },
    overline: {
      fontSize: '0.64rem', // 10.24px
      fontWeight: '400',
      letterSpacing: '1.5px',
      lineHeight: '1.2',
    },
    caption: {
      fontSize: '0.64rem', // 10.24px
      fontWeight: '400',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },
    button: {
      fontSize: '0.8rem', // 12.8px
      fontWeight: '400',
      letterSpacing: '0.75px',
      lineHeight: '1.2',
    },
  },
};
