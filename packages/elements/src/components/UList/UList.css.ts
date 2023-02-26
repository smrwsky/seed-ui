import { vars, marker } from '@seed-ui/styles';
import { CSSProperties, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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

      light: {
        color: vars.color.white,
      },

      dark: {
        color: vars.color.neutral900,
      },

      default: {
        color: 'inherit',
      },
    },

    bold: {
      true: {
        fontWeight:
          `${vars.typography.bold.fontWeight} !important` as CSSProperties['fontWeight'],
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        fontFamily: 'primary',
        size: 'md',
      },
      style: {
        ...vars.typography.textMd.primary,
      },
    },

    {
      variants: {
        fontFamily: 'primary',
        size: 'sm',
      },
      style: {
        ...vars.typography.textSm.primary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'md',
      },
      style: {
        ...vars.typography.textMd.secondary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'sm',
      },
      style: {
        ...vars.typography.textSm.secondary,
      },
    },
  ],
});

globalStyle(`.${root({ type: 'disc' }).split(' ')[1]} > li:before`, {
  content: '\\2022',
  ...marker(),
});

globalStyle(`.${root({ type: 'dash' }).split(' ')[1]} > li:before`, {
  content: '\\2014',
  ...marker(),
});
