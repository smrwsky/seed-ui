import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@seed-ui/styles/src';

export const root = recipe({
  base: {
    gridArea: 'label',
    fontFamily: vars.fontFamily.secondary,
  },

  variants: {
    size: {
      sm: {
        ...vars.typography.labelSm,
      },
      md: {
        ...vars.typography.labelMd,
      },
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
  },
});
