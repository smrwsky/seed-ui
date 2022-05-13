import { style, styleVariants } from '@vanilla-extract/css';
import {
  borderRadius,
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

export const root = style({
  border: 'none',
  borderRadius: borderRadius.max,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 0,
  overflow: 'hidden',
  transition: `all ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  width: '1em',
  height: '1em',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
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
    color: theme.color.primary500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.primary50,
      },

      '&:active': {
        backgroundColor: theme.color.primary100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },
  'accent': {
    backgroundColor: 'transparent',
    color: theme.color.accent500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.accent50,
      },

      '&:active': {
        backgroundColor: theme.color.accent100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'secondary': {
    backgroundColor: 'transparent',
    color: theme.color.neutral500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral50,
      },

      '&:active': {
        backgroundColor: theme.color.neutral100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'info': {
    backgroundColor: 'transparent',
    color: theme.color.info500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.info50,
      },

      '&:active': {
        backgroundColor: theme.color.info100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'success': {
    backgroundColor: 'transparent',
    color: theme.color.success500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.success50,
      },

      '&:active': {
        backgroundColor: theme.color.success100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'warning': {
    backgroundColor: 'transparent',
    color: theme.color.warning500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.warning50,
      },

      '&:active': {
        backgroundColor: theme.color.warning100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'danger': {
    backgroundColor: 'transparent',
    color: theme.color.danger500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.danger50,
      },

      '&:active': {
        backgroundColor: theme.color.danger100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'light': {
    backgroundColor: 'transparent',
    color: theme.color.white,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.light200,
      },

      '&:active': {
        backgroundColor: theme.color.light400,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'dark': {
    backgroundColor: 'transparent',
    color: theme.color.neutral900,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral50,
      },

      '&:active': {
        backgroundColor: theme.color.neutral100,
      },

      '&:disabled': {
        color: theme.color.neutral200,
      },
    },
  },

  'primary-outline': {
    backgroundColor: 'transparent',
    color: theme.color.primary500,
    boxShadow: `0 0 0 1px ${theme.color.primary200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.primary50,
      },

      '&:active': {
        backgroundColor: theme.color.primary100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'accent-outline': {
    backgroundColor: 'transparent',
    color: theme.color.accent500,
    boxShadow: `0 0 0 1px ${theme.color.accent200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.accent50,
      },

      '&:active': {
        backgroundColor: theme.color.accent100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'secondary-outline': {
    backgroundColor: 'transparent',
    color: theme.color.neutral500,
    boxShadow: `0 0 0 1px ${theme.color.neutral200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral50,
      },

      '&:active': {
        backgroundColor: theme.color.neutral100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'info-outline': {
    backgroundColor: 'transparent',
    color: theme.color.info500,
    boxShadow: `0 0 0 1px ${theme.color.info200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.info50,
      },

      '&:active': {
        backgroundColor: theme.color.info100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'success-outline': {
    backgroundColor: 'transparent',
    color: theme.color.success500,
    boxShadow: `0 0 0 1px ${theme.color.success200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.success50,
      },

      '&:active': {
        backgroundColor: theme.color.success100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'warning-outline': {
    backgroundColor: 'transparent',
    color: theme.color.warning500,
    boxShadow: `0 0 0 1px ${theme.color.warning200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.warning50,
      },

      '&:active': {
        backgroundColor: theme.color.warning100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'danger-outline': {
    backgroundColor: 'transparent',
    color: theme.color.danger500,
    boxShadow: `0 0 0 1px ${theme.color.danger200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.danger50,
      },

      '&:active': {
        backgroundColor: theme.color.danger100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'light-outline': {
    backgroundColor: 'transparent',
    boxShadow: `0 0 0 1px ${theme.color.light600}`,
    color: theme.color.white,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.light200,
      },

      '&:active': {
        backgroundColor: theme.color.light400,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },

  'dark-outline': {
    backgroundColor: 'transparent',
    color: theme.color.neutral900,
    boxShadow: `0 0 0 1px ${theme.color.neutral400}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral50,
      },

      '&:active': {
        backgroundColor: theme.color.neutral100,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
      },
    },
  },
});

export const icon = style({
  color: 'currentColor',
  fontSize: '.625em',
});
