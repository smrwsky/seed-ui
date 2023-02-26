import { vars } from '@seed-ui/styles';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    ...vars.typography.caption,
  },

  variants: {
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
  },
});
