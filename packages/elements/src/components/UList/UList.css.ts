import { recipe } from '@vanilla-extract/recipes';
import { vars, marker } from '@seed-ui/styles';
import { globalStyle } from '@vanilla-extract/css';

export const root = recipe({
  base: {
    listStyle: 'none',
    paddingInlineStart: '1.5em',
  },

  variants: {
    type: {
      disc: {},
      dash: {},
      none: {},
    },

    fontFamily: {
      primary: {
        fontFamily: vars.fontFamily.primary,
      },
      secondary: {
        fontFamily: vars.fontFamily.secondary,
      },
    },

    size: {
      sm: {},
      md: {},
    },

    variant: {
      primary: {
        color: vars.color.primary500,
      },

      secondary: {
        color: vars.color.secondary500,
      },

      tertiary: {
        color: vars.color.neutral500,
      },

      info: {
        color: vars.color.info500,
      },

      success: {
        color: vars.color.success500,
      },

      warning: {
        color: vars.color.warning500,
      },

      danger: {
        color: vars.color.danger500,
      },

      alt: {
        color: vars.color.white,
      },

      default: {
        color: 'inherit',
      },
    },

    bold: {
      true: {
        ...vars.typography.bold,
      },
    },
  },
});

globalStyle(`.${root({ type: 'disc' }).split(' ')[1]} > li:before`, {
  content: '\\2022',
  ...marker(),
});

globalStyle(`.${root({ type: 'dash' }).split(' ')[1]} > li:before`, {
  content: '\\2022',
  ...marker(),
});
