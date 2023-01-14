import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { spacing, textTruncate, vars } from '@seed-ui/styles';

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
  ...vars.typography.button,

  selectors: {
    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      transition: vars.transition.base,
    },

    '&:active': {
      transition: 'none',
    },

    '&:focus-visible:before': {
      boxShadow: vars.boxShadow.focus,
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
  xs: {
    minWidth: '6rem',
    height: '1.875rem',
    paddingLeft: spacing[1],
    paddingRight: spacing[1],
  },
  sm: {
    minWidth: '7rem',
    height: '2.25rem',
    paddingLeft: spacing[1.5],
    paddingRight: spacing[1.5],
  },
  md: {
    minWidth: '8rem',
    height: '2.625rem',
    paddingLeft: spacing[2],
    paddingRight: spacing[2],
  },
  lg: {
    minWidth: '9rem',
    height: '3rem',
    paddingLeft: spacing[2.5],
    paddingRight: spacing[2.5],
  },
});

globalStyle(
  `.${rootSize.xs} > *:not(:last-child), .${rootSize.sm} > *:not(:last-child)`,
  {
    marginRight: spacing[1],
  },
);

globalStyle(
  `.${rootSize.md} > *:not(:last-child), .${rootSize.lg} > *:not(:last-child)`,
  {
    marginRight: spacing[1.5],
  },
);

export const rootVariant = styleVariants({
  'primary': {
    backgroundColor: vars.color.primary500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.primary,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.primary400,
      },

      '&:active': {
        backgroundColor: vars.color.primary600,
      },

      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'secondary': {
    backgroundColor: vars.color.secondary500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.secondary,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.secondary400,
      },

      '&:active': {
        backgroundColor: vars.color.secondary600,
      },

      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'tertiary': {
    backgroundColor: vars.color.neutral500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.sm,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.neutral400,
      },

      '&:active': {
        backgroundColor: vars.color.neutral600,
      },

      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'info': {
    backgroundColor: vars.color.info500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.info,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.info400,
      },

      '&:active': {
        backgroundColor: vars.color.info600,
      },

      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'success': {
    backgroundColor: vars.color.success500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.success,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.success400,
      },

      '&:active': {
        backgroundColor: vars.color.success600,
      },

      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'warning': {
    backgroundColor: vars.color.warning500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.warning,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.warning400,
      },

      '&:active': {
        backgroundColor: vars.color.warning600,
      },

      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'danger': {
    backgroundColor: vars.color.danger500,
    color: vars.color.white,
    boxShadow: vars.boxShadow.danger,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.danger400,
      },

      '&:active': {
        backgroundColor: vars.color.danger600,
      },

      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'alt': {
    backgroundColor: vars.color.white,
    color: vars.color.secondary500,
    boxShadow: vars.boxShadow.alt,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.light900,
      },

      '&:active': {
        backgroundColor: vars.color.light700,
      },

      '&:disabled': {
        color: vars.color.white,
        backgroundColor: vars.color.neutral200,
      },
    },
  },

  'outline-primary': {
    backgroundColor: 'transparent',
    color: vars.color.primary500,
    boxShadow: `0 0 0 1px ${vars.color.primary200}`,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.primary50,
      },

      '&:active': {
        backgroundColor: vars.color.primary100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'outline-secondary': {
    backgroundColor: 'transparent',
    color: vars.color.secondary500,
    boxShadow: `0 0 0 1px ${vars.color.secondary200}`,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.secondary50,
      },

      '&:active': {
        backgroundColor: vars.color.secondary100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'outline-tertiary': {
    backgroundColor: 'transparent',
    color: vars.color.neutral500,
    boxShadow: `0 0 0 1px ${vars.color.neutral200}`,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.neutral50,
      },

      '&:active': {
        backgroundColor: vars.color.neutral100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'outline-info': {
    backgroundColor: 'transparent',
    color: vars.color.info500,
    boxShadow: `0 0 0 1px ${vars.color.info200}`,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.info50,
      },

      '&:active': {
        backgroundColor: vars.color.info100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'outline-success': {
    backgroundColor: 'transparent',
    color: vars.color.success500,
    boxShadow: `0 0 0 1px ${vars.color.success200}`,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.success50,
      },

      '&:active': {
        backgroundColor: vars.color.success100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'outline-warning': {
    backgroundColor: 'transparent',
    color: vars.color.warning500,
    boxShadow: `0 0 0 1px ${vars.color.warning200}`,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.warning50,
      },

      '&:active': {
        backgroundColor: vars.color.warning100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'outline-danger': {
    backgroundColor: 'transparent',
    color: vars.color.danger500,
    boxShadow: `0 0 0 1px ${vars.color.danger200}`,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.danger50,
      },

      '&:active': {
        backgroundColor: vars.color.danger100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'outline-alt': {
    backgroundColor: 'transparent',
    boxShadow: `0 0 0 1px ${vars.color.light600}`,
    color: vars.color.white,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.light200,
      },

      '&:active': {
        backgroundColor: vars.color.light300,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-secondary': {
    backgroundColor: 'transparent',
    color: vars.color.secondary500,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.secondary50,
      },

      '&:active': {
        backgroundColor: vars.color.secondary100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-primary': {
    backgroundColor: 'transparent',
    color: vars.color.primary500,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.primary50,
      },

      '&:active': {
        backgroundColor: vars.color.primary100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-tertiary': {
    backgroundColor: 'transparent',
    color: vars.color.neutral500,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.neutral50,
      },

      '&:active': {
        backgroundColor: vars.color.neutral100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-info': {
    backgroundColor: 'transparent',
    color: vars.color.info500,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.info50,
      },

      '&:active': {
        backgroundColor: vars.color.info100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-success': {
    backgroundColor: 'transparent',
    color: vars.color.success500,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.success50,
      },

      '&:active': {
        backgroundColor: vars.color.success100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-warning': {
    backgroundColor: 'transparent',
    color: vars.color.warning500,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.warning50,
      },

      '&:active': {
        backgroundColor: vars.color.warning100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-danger': {
    backgroundColor: 'transparent',
    color: vars.color.danger500,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.danger50,
      },

      '&:active': {
        backgroundColor: vars.color.danger100,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },

  'overlay-alt': {
    backgroundColor: 'transparent',
    color: vars.color.white,

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.light200,
      },

      '&:active': {
        backgroundColor: vars.color.light300,
      },

      '&:disabled': {
        color: vars.color.neutral200,
      },
    },
  },
});

export const label = style({
  display: 'inline-block',
  maxWidth: '100%',
  paddingTop: spacing[0.5],
  ...textTruncate(),
});

export const icon = style({
  color: 'currentColor !important',
});

export const iconSize = styleVariants({
  xs: {
    fontSize: '1rem !important',
  },
  sm: {
    fontSize: '1.125rem !important',
  },
  md: {
    fontSize: '1.25rem !important',
  },
  lg: {
    fontSize: '1.375rem !important',
  },
});
