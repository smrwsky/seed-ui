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
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
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

  compoundVariants: [
    {
      variants: {
        fontFamily: 'primary',
        size: 'xl',
      },
      style: {
        ...vars.typography.titleXl.primary,
      },
    },

    {
      variants: {
        fontFamily: 'primary',
        size: 'lg',
      },
      style: {
        ...vars.typography.titleLg.primary,
      },
    },

    {
      variants: {
        fontFamily: 'primary',
        size: 'md',
      },
      style: {
        ...vars.typography.titleMd.primary,
      },
    },

    {
      variants: {
        fontFamily: 'primary',
        size: 'sm',
      },
      style: {
        ...vars.typography.titleSm.primary,
      },
    },

    {
      variants: {
        fontFamily: 'primary',
        size: 'xs',
      },
      style: {
        ...vars.typography.titleXs.primary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'xl',
      },
      style: {
        ...vars.typography.titleXl.secondary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'lg',
      },
      style: {
        ...vars.typography.titleLg.secondary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'md',
      },
      style: {
        ...vars.typography.titleMd.secondary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'sm',
      },
      style: {
        ...vars.typography.titleSm.secondary,
      },
    },

    {
      variants: {
        fontFamily: 'secondary',
        size: 'xs',
      },
      style: {
        ...vars.typography.titleXs.secondary,
      },
    },
  ],
});
