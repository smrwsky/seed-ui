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
  sm: {
    fontSize: '1.5rem',
  },
  md: {
    fontSize: '2rem',
  },
  lg: {
    fontSize: '2.5rem',
  },
});

export const rootVariant = styleVariants({
  'primary': {
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
        backgroundColor: 'transparent',
      },
    },
  },

  'secondary': {
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
        backgroundColor: 'transparent',
      },
    },
  },

  'tertiary': {
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
        backgroundColor: 'transparent',
      },
    },
  },

  'info': {
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
        backgroundColor: 'transparent',
      },
    },
  },

  'success': {
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
        backgroundColor: 'transparent',
      },
    },
  },

  'warning': {
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
        backgroundColor: 'transparent',
      },
    },
  },

  'danger': {
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
        backgroundColor: 'transparent',
      },
    },
  },

  'alt': {
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
      },
    },
  },
});

// override avatar styles
globalStyle(`.${root}> *:not(i)`, {
  borderRadius: 'inherit !important',
  fontSize: 'inherit !important',
});

globalStyle(`.${root} > *:not(i):after`, {
  content: '',
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.light400,
  opacity: 0,
  transition: vars.transition.fade,
});

globalStyle(`.${root}:hover > *:not(i):after`, {
  opacity: 1,
});

// override icon styles
globalStyle(`.${root} > i`, {
  color: 'currentColor !important',
  fontSize: '.63em !important',
});
