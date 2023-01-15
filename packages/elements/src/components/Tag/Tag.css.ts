import { style, styleVariants } from '@vanilla-extract/css';
import { spacing, textTruncate, vars } from '@seed-ui/styles';

export const root = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  maxWidth: '100%',
  transition: vars.transition.base,
  outline: 'none',
  borderRadius: vars.borderRadius.md,
  overflow: 'hidden',

  selectors: {
    '&:active': {
      transition: 'none',
    },
    '&:not([data-deletable]):not([aria-disabled="true"])': {
      cursor: 'pointer',
    },
    '&[aria-disabled="true"]': {
      pointerEvents: 'none',
    },
  },
});

export const rootSize = styleVariants({
  md: {
    height: '1.625rem', // 26px
    padding: `0 ${spacing[1.5]}`,
  },
  sm: {
    height: '1.125rem', // 18px
    padding: `0 ${spacing[1]}`,
  },
});

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});

export const rootVariant = styleVariants({
  'primary': {
    background: vars.color.primary100,
    color: vars.color.primary600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.primary200,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.primary300,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'secondary': {
    background: vars.color.secondary100,
    color: vars.color.secondary600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.secondary200,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.secondary300,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'tertiary': {
    background: vars.color.neutral100,
    color: vars.color.neutral600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.neutral200,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.neutral300,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'info': {
    background: vars.color.info100,
    color: vars.color.info600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.info200,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.info300,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'success': {
    background: vars.color.success100,
    color: vars.color.success600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.success200,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.success300,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'warning': {
    background: vars.color.warning100,
    color: vars.color.warning600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.warning200,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.warning300,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'danger': {
    background: vars.color.danger100,
    color: vars.color.danger600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.danger200,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.danger300,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'light': {
    background: vars.color.light400,
    color: vars.color.white,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.light500,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.light600,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral100,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-primary': {
    background: vars.color.primary50,
    boxShadow: `0 0 0 1px ${vars.color.primary300}`,
    color: vars.color.primary600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.primary100,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.primary200,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-secondary': {
    background: vars.color.secondary50,
    boxShadow: `0 0 0 1px ${vars.color.secondary300}`,
    color: vars.color.secondary600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.secondary100,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.secondary200,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-tertiary': {
    background: vars.color.neutral50,
    boxShadow: `0 0 0 1px ${vars.color.neutral300}`,
    color: vars.color.neutral600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.neutral100,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.neutral200,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-info': {
    background: vars.color.info50,
    boxShadow: `0 0 0 1px ${vars.color.info300}`,
    color: vars.color.info600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.info100,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.info200,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-success': {
    background: vars.color.success50,
    boxShadow: `0 0 0 1px ${vars.color.success300}`,
    color: vars.color.success600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.success100,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.success200,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-warning': {
    background: vars.color.warning50,
    boxShadow: `0 0 0 1px ${vars.color.warning300}`,
    color: vars.color.warning600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.warning100,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.warning200,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-danger': {
    background: vars.color.danger50,
    boxShadow: `0 0 0 1px ${vars.color.danger300}`,
    color: vars.color.danger600,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.danger100,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.danger200,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },

  'outline-light': {
    background: vars.color.light200,
    boxShadow: `0 0 0 1px ${vars.color.light700}`,
    color: vars.color.white,

    selectors: {
      '&:not([data-deletable]):not([aria-disabled="true"]):hover': {
        background: vars.color.light300,
      },

      '&:not([data-deletable]):not([aria-disabled="true"]):active': {
        background: vars.color.light400,
      },

      '&[aria-disabled="true"]': {
        background: vars.color.neutral50,
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        color: vars.color.neutral400,
      },
    },
  },
});

export const text = style({
  display: 'inline-block',
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.textSm.secondary,
  ...textTruncate(),
  margin: `0 ${spacing[0.5]}`,
});

export const icon = style({
  transition: vars.transition.base,
  margin: `0 ${spacing[0.5]}`,
  cursor: 'pointer',
  pointerEvents: 'auto',

  selectors: {
    '&:active': {
      transition: 'none',
    },
  },
});

export const iconSize = styleVariants({
  sm: {
    fontSize: '0.875rem',
  },
  md: {
    fontSize: '1.125rem',
  },
});

export const iconVariant = styleVariants({
  'secondary': {
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

  'primary': {
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

  'tertiary': {
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

  'info': {
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

  'success': {
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

  'warning': {
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

  'danger': {
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

  'light': {
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

  'outline-secondary': {
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

  'outline-primary': {
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

  'outline-tertiary': {
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

  'outline-info': {
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

  'outline-success': {
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

  'outline-warning': {
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

  'outline-danger': {
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

  'outline-light': {
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
});

export const iconDisabled = style({
  color: vars.color.neutral400,
  pointerEvents: 'none',
});
