import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
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
  padding: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  outline: 'none',

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
        backgroundColor: theme.color.primary100,
      },

      '&:active': {
        backgroundColor: theme.color.primary200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },
  'accent': {
    backgroundColor: 'transparent',
    color: theme.color.accent500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.accent100,
      },

      '&:active': {
        backgroundColor: theme.color.accent200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'secondary': {
    backgroundColor: 'transparent',
    color: theme.color.neutral500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral100,
      },

      '&:active': {
        backgroundColor: theme.color.neutral200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'info': {
    backgroundColor: 'transparent',
    color: theme.color.info500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.info100,
      },

      '&:active': {
        backgroundColor: theme.color.info200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'success': {
    backgroundColor: 'transparent',
    color: theme.color.success500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.success100,
      },

      '&:active': {
        backgroundColor: theme.color.success200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'warning': {
    backgroundColor: 'transparent',
    color: theme.color.warning500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.warning100,
      },

      '&:active': {
        backgroundColor: theme.color.warning200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'danger': {
    backgroundColor: 'transparent',
    color: theme.color.danger500,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.danger100,
      },

      '&:active': {
        backgroundColor: theme.color.danger200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'light': {
    backgroundColor: 'transparent',
    color: theme.color.white,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.light300,
      },

      '&:active': {
        backgroundColor: theme.color.light500,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'dark': {
    backgroundColor: 'transparent',
    color: theme.color.neutral900,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral100,
      },

      '&:active': {
        backgroundColor: theme.color.neutral200,
      },

      '&:disabled': {
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'primary-outline': {
    backgroundColor: 'transparent',
    color: theme.color.primary500,
    boxShadow: `0 0 0 1px ${theme.color.primary300}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.primary100,
      },

      '&:active': {
        backgroundColor: theme.color.primary200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'accent-outline': {
    backgroundColor: 'transparent',
    color: theme.color.accent500,
    boxShadow: `0 0 0 1px ${theme.color.accent300}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.accent100,
      },

      '&:active': {
        backgroundColor: theme.color.accent200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'secondary-outline': {
    backgroundColor: 'transparent',
    color: theme.color.neutral500,
    boxShadow: `0 0 0 1px ${theme.color.neutral300}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral100,
      },

      '&:active': {
        backgroundColor: theme.color.neutral200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'info-outline': {
    backgroundColor: 'transparent',
    color: theme.color.info500,
    boxShadow: `0 0 0 1px ${theme.color.info300}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.info100,
      },

      '&:active': {
        backgroundColor: theme.color.info200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'success-outline': {
    backgroundColor: 'transparent',
    color: theme.color.success500,
    boxShadow: `0 0 0 1px ${theme.color.success300}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.success100,
      },

      '&:active': {
        backgroundColor: theme.color.success200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'warning-outline': {
    backgroundColor: 'transparent',
    color: theme.color.warning500,
    boxShadow: `0 0 0 1px ${theme.color.warning300}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.warning100,
      },

      '&:active': {
        backgroundColor: theme.color.warning200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'danger-outline': {
    backgroundColor: 'transparent',
    color: theme.color.danger500,
    boxShadow: `0 0 0 1px ${theme.color.danger300}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.danger100,
      },

      '&:active': {
        backgroundColor: theme.color.danger200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'light-outline': {
    backgroundColor: 'transparent',
    boxShadow: `0 0 0 1px ${theme.color.light700}`,
    color: theme.color.white,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.light300,
      },

      '&:active': {
        backgroundColor: theme.color.light500,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },

  'dark-outline': {
    backgroundColor: 'transparent',
    color: theme.color.neutral900,
    boxShadow: `0 0 0 1px ${theme.color.neutral500}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral100,
      },

      '&:active': {
        backgroundColor: theme.color.neutral200,
      },

      '&:disabled': {
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral200,
        backgroundColor: 'transparent',
      },
    },
  },
});

globalStyle(`.${root} > *`, {
  fontSize: '.75em !important',
});

globalStyle(`.${root} > i`, {
  color: 'currentColor !important',
  fontSize: '.63em !important',
});
