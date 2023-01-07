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
        color: vars.color.primary600,
      },

      secondary: {
        color: vars.color.secondary600,
      },

      tertiary: {
        color: vars.color.neutral600,
      },

      info: {
        color: vars.color.info600,
      },

      success: {
        color: vars.color.success600,
      },

      warning: {
        color: vars.color.warning600,
      },

      danger: {
        color: vars.color.danger600,
      },

      alt: {
        color: vars.color.white,
      },

      default: {
        color: 'inherit',
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
        ...vars.typography.subtitleMd.primary,
      },
    },

    {
      variants: {
        fontFamily: 'primary',
        size: 'sm',
      },
      style: {
        ...vars.typography.subtitleSm.primary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'md',
      },
      style: {
        ...vars.typography.subtitleMd.secondary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'sm',
      },
      style: {
        ...vars.typography.subtitleSm.secondary,
      },
    },
  ],
});
