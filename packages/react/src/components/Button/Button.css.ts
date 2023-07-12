import { SPACING, textTruncate, vars } from '@seed-ui/styles';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: vars.transition.base,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  outline: 'none',
  ...vars.typography.textButton,

  selectors: {
    '&:active': {
      transition: 'none',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});

export const rootSize = styleVariants({
  sm: {
    minWidth: '6rem',
    height: '1.75rem', // 28px
    paddingLeft: SPACING[2.5],
    paddingRight: SPACING[2.5],
  },
  md: {
    minWidth: '7rem',
    height: '2.25rem', // 36px
    paddingLeft: SPACING[3],
    paddingRight: SPACING[3],
  },
  lg: {
    minWidth: '8rem',
    height: '2.75rem', // 44px
    paddingLeft: SPACING[3.5],
    paddingRight: SPACING[3.5],
  },
});

globalStyle(`.${rootSize.sm} > *:not(:last-child)`, {
  marginRight: SPACING[1],
});

globalStyle(
  `.${rootSize.md} > *:not(:last-child), .${rootSize.lg} > *:not(:last-child)`,
  {
    marginRight: SPACING[1.5],
  },
);

export const rootVariant = styleVariants({
  'primary': {
    background: vars.color.primary500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.primary,

    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },

      '&:active': {
        background: vars.color.primary600,
      },

      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },

  'secondary': {
    background: vars.color.secondary500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.secondary,

    selectors: {
      '&:hover': {
        background: vars.color.secondary400,
      },

      '&:active': {
        background: vars.color.secondary600,
      },

      '&:disabled': {
        background: vars.color.neutral200,
        boxShadow: vars.boxShadow.sm,
      },
    },
  },

  'tertiary': {
    background: vars.color.neutral500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.sm,

    selectors: {
      '&:hover': {
        background: vars.color.neutral400,
      },

      '&:active': {
        background: vars.color.neutral600,
      },

      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },

  'info': {
    background: vars.color.info500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.info,

    selectors: {
      '&:hover': {
        background: vars.color.info400,
      },

      '&:active': {
        background: vars.color.info600,
      },

      '&:disabled': {
        background: vars.color.neutral200,
        boxShadow: vars.boxShadow.sm,
      },
    },
  },

  'success': {
    background: vars.color.success500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.success,

    selectors: {
      '&:hover': {
        background: vars.color.success400,
      },

      '&:active': {
        background: vars.color.success600,
      },

      '&:disabled': {
        background: vars.color.neutral200,
        boxShadow: vars.boxShadow.sm,
      },
    },
  },

  'warning': {
    background: vars.color.warning500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.warning,

    selectors: {
      '&:hover': {
        background: vars.color.warning400,
      },

      '&:active': {
        background: vars.color.warning600,
      },

      '&:disabled': {
        background: vars.color.neutral200,
        boxShadow: vars.boxShadow.sm,
      },
    },
  },

  'danger': {
    background: vars.color.danger500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.danger,

    selectors: {
      '&:hover': {
        background: vars.color.danger400,
      },

      '&:active': {
        background: vars.color.danger600,
      },

      '&:disabled': {
        background: vars.color.neutral200,
        boxShadow: vars.boxShadow.sm,
      },
    },
  },

  'light': {
    background: vars.color.white,
    color: vars.color.primary500,
    boxShadow: vars.boxShadow.light,

    selectors: {
      '&:hover': {
        background: vars.color.light900,
      },

      '&:active': {
        background: vars.color.light700,
      },

      '&:disabled': {
        color: vars.color.white,
        background: vars.color.neutral200,
        boxShadow: vars.boxShadow.sm,
      },
    },
  },

  'dark': {
    background: vars.color.neutral900,
    color: vars.color.white,
    boxShadow: vars.boxShadow.sm,

    selectors: {
      '&:hover': {
        background: vars.color.neutral600,
      },

      '&:active': {
        background: vars.color.neutral800,
      },

      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },

  'outline-primary': {
    background: 'transparent',
    color: vars.color.primary500,
    boxShadow: `0 0 0 1px ${vars.color.primary200}`,

    selectors: {
      '&:hover': {
        background: vars.color.primary50,
      },

      '&:active': {
        background: vars.color.primary100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-secondary': {
    background: 'transparent',
    color: vars.color.secondary500,
    boxShadow: `0 0 0 1px ${vars.color.secondary200}`,

    selectors: {
      '&:hover': {
        background: vars.color.secondary50,
      },

      '&:active': {
        background: vars.color.secondary100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-tertiary': {
    background: 'transparent',
    color: vars.color.neutral500,
    boxShadow: `0 0 0 1px ${vars.color.neutral200}`,

    selectors: {
      '&:hover': {
        background: vars.color.neutral50,
      },

      '&:active': {
        background: vars.color.neutral100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-info': {
    background: 'transparent',
    color: vars.color.info500,
    boxShadow: `0 0 0 1px ${vars.color.info200}`,

    selectors: {
      '&:hover': {
        background: vars.color.info50,
      },

      '&:active': {
        background: vars.color.info100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-success': {
    background: 'transparent',
    color: vars.color.success500,
    boxShadow: `0 0 0 1px ${vars.color.success200}`,

    selectors: {
      '&:hover': {
        background: vars.color.success50,
      },

      '&:active': {
        background: vars.color.success100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-warning': {
    background: 'transparent',
    color: vars.color.warning500,
    boxShadow: `0 0 0 1px ${vars.color.warning200}`,

    selectors: {
      '&:hover': {
        background: vars.color.warning50,
      },

      '&:active': {
        background: vars.color.warning100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-danger': {
    background: 'transparent',
    color: vars.color.danger500,
    boxShadow: `0 0 0 1px ${vars.color.danger200}`,

    selectors: {
      '&:hover': {
        background: vars.color.danger50,
      },

      '&:active': {
        background: vars.color.danger100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-light': {
    background: 'transparent',
    boxShadow: `0 0 0 1px ${vars.color.light600}`,
    color: vars.color.white,

    selectors: {
      '&:hover': {
        background: vars.color.light200,
      },

      '&:active': {
        background: vars.color.light300,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'outline-dark': {
    color: vars.color.neutral900,
    background: 'transparent',
    boxShadow: `0 0 0 1px ${vars.color.neutral400}`,

    selectors: {
      '&:hover': {
        background: vars.color.neutral50,
      },

      '&:active': {
        background: vars.color.neutral100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
      },
    },
  },

  'overlay-secondary': {
    background: 'transparent',
    color: vars.color.secondary500,

    selectors: {
      '&:hover': {
        background: vars.color.secondary50,
      },

      '&:active': {
        background: vars.color.secondary100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-primary': {
    background: 'transparent',
    color: vars.color.primary500,

    selectors: {
      '&:hover': {
        background: vars.color.primary50,
      },

      '&:active': {
        background: vars.color.primary100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-tertiary': {
    background: 'transparent',
    color: vars.color.neutral500,

    selectors: {
      '&:hover': {
        background: vars.color.neutral50,
      },

      '&:active': {
        background: vars.color.neutral100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-info': {
    background: 'transparent',
    color: vars.color.info500,

    selectors: {
      '&:hover': {
        background: vars.color.info50,
      },

      '&:active': {
        background: vars.color.info100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-success': {
    background: 'transparent',
    color: vars.color.success500,

    selectors: {
      '&:hover': {
        background: vars.color.success50,
      },

      '&:active': {
        background: vars.color.success100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-warning': {
    background: 'transparent',
    color: vars.color.warning500,

    selectors: {
      '&:hover': {
        background: vars.color.warning50,
      },

      '&:active': {
        background: vars.color.warning100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-danger': {
    background: 'transparent',
    color: vars.color.danger500,

    selectors: {
      '&:hover': {
        background: vars.color.danger50,
      },

      '&:active': {
        background: vars.color.danger100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-light': {
    background: 'transparent',
    color: vars.color.white,

    selectors: {
      '&:hover': {
        background: vars.color.light200,
      },

      '&:active': {
        background: vars.color.light300,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },

  'overlay-dark': {
    color: vars.color.neutral900,
    background: 'transparent',

    selectors: {
      '&:hover': {
        background: vars.color.neutral50,
      },

      '&:active': {
        background: vars.color.neutral100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
        background: 'transparent',
      },
    },
  },
});

export const label = style([
  {
    display: 'inline-block',
    maxWidth: '100%',
    paddingTop: SPACING[0.5],
  },
  textTruncate,
]);