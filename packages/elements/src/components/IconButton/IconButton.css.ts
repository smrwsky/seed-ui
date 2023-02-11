import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

export const root = style({
  position: 'relative',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  lineHeight: 0,
  transition: vars.transition.base,
  width: '1em',
  height: '1em',
  padding: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  outline: 'none',

  selectors: {
    '&:active': {
      transition: 'none',
    },

    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      transition: vars.transition.base,
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
    fontSize: '1.875rem', // 30px
  },
  sm: {
    fontSize: '2.25rem', // 36px
  },
  md: {
    fontSize: '2.625rem', // 42px
  },
  lg: {
    fontSize: '3rem', // 48px
  },
});

export const rootVariant = styleVariants({
  'primary': {
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

  'secondary': {
    color: vars.color.secondary500,
    background: 'transparent',

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

  'tertiary': {
    color: vars.color.neutral500,
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

  'info': {
    color: vars.color.info500,
    background: 'transparent',

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

  'success': {
    color: vars.color.success500,
    background: 'transparent',

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

  'warning': {
    color: vars.color.warning500,
    background: 'transparent',

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

  'danger': {
    color: vars.color.danger500,
    background: 'transparent',

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

  'light': {
    color: vars.color.white,
    background: 'transparent',

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

  'dark': {
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

  'outline-primary': {
    color: vars.color.primary500,
    background: 'transparent',
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
    color: vars.color.secondary500,
    background: 'transparent',
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
        boxShadow: `0 0 0 1px ${vars.color.neutral200}`,
        background: 'transparent',
      },
    },
  },

  'outline-tertiary': {
    color: vars.color.neutral500,
    background: 'transparent',
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
    color: vars.color.info500,
    background: 'transparent',
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
    color: vars.color.success500,
    background: 'transparent',
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
    color: vars.color.warning500,
    background: 'transparent',
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
    color: vars.color.danger500,
    background: 'transparent',
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
    color: vars.color.white,
    background: 'transparent',
    boxShadow: `0 0 0 1px ${vars.color.light600}`,

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
});

// override avatar styles
globalStyle(`.${root}> *:not(i)`, {
  borderRadius: 'inherit !important',
  fontSize: '0.85em !important',
});

// override icon styles
globalStyle(`.${root} > i`, {
  color: 'currentColor !important',
  fontSize: '0.63em !important',
});
