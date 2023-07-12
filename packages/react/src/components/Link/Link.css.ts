import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  fontSize: 'inherit',
  lineHeight: 'inherit',
  textDecoration: 'none',
  transition: vars.transition.base,
  cursor: 'pointer',

  selectors: {
    '&:active': {
      transition: 'none',
    },

    '&:disabled': {
      color: vars.color.neutral200,
      cursor: 'not-allowed',
    },
  },
});

export const rootVariant = styleVariants({
  primary: {
    color: vars.color.primary500,

    selectors: {
      '&:hover': {
        color: vars.color.primary400,
      },

      '&:active': {
        color: vars.color.primary600,
      },
    },
  },

  secondary: {
    color: vars.color.secondary500,

    selectors: {
      '&:hover': {
        color: vars.color.secondary400,
      },

      '&:active': {
        color: vars.color.secondary600,
      },
    },
  },

  tertiary: {
    color: vars.color.neutral500,

    selectors: {
      '&:hover': {
        color: vars.color.neutral400,
      },

      '&:active': {
        color: vars.color.neutral600,
      },
    },
  },

  info: {
    color: vars.color.info500,

    selectors: {
      '&:hover': {
        color: vars.color.info400,
      },

      '&:active': {
        color: vars.color.info600,
      },
    },
  },

  success: {
    color: vars.color.success500,

    selectors: {
      '&:hover': {
        color: vars.color.success400,
      },

      '&:active': {
        color: vars.color.success600,
      },
    },
  },

  warning: {
    color: vars.color.warning500,

    selectors: {
      '&:hover': {
        color: vars.color.warning400,
      },

      '&:active': {
        color: vars.color.warning600,
      },
    },
  },

  danger: {
    color: vars.color.danger500,

    selectors: {
      '&:hover': {
        color: vars.color.danger400,
      },

      '&:active': {
        color: vars.color.danger600,
      },
    },
  },

  light: {
    color: vars.color.white,

    selectors: {
      '&:hover': {
        color: vars.color.light800,
      },

      '&:active': {
        color: vars.color.light700,
      },
    },
  },

  dark: {
    color: vars.color.neutral900,

    selectors: {
      '&:hover': {
        color: vars.color.neutral600,
      },

      '&:active': {
        color: vars.color.neutral800,
      },
    },
  },

  default: {
    color: 'inherit',
  },
});

export const rootBold = style({
  ...vars.typography.bold,
});
