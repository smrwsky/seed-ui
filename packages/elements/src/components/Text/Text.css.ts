import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@seed-ui/styles';

export const root = recipe({
  variants: {
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