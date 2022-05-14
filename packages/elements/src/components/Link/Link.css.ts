import { style, styleVariants } from '@vanilla-extract/css';
import {
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

export const root = style({
  cursor: 'pointer',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  textDecoration: 'none',
  transition: `all ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,

  selectors: {
    '&:disabled': {
      color: theme.color.neutral200,
      cursor: 'not-allowed',
    },
  },
});

export const rootDisplay = styleVariants({
  'block': {
    display: 'block',
  },
  'inline': {
    display: 'inline',
  },
  'inline-block': {
    display: 'inline-block',
  },
});

export const rootVariant = styleVariants({
  primary: {
    color: theme.color.primary500,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.primary400,
      },

      '&:active': {
        color: theme.color.primary600,
      },
    },
  },

  accent: {
    color: theme.color.accent500,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.accent400,
      },

      '&:active': {
        color: theme.color.accent600,
      },
    },
  },

  secondary: {
    color: theme.color.neutral500,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.neutral400,
      },

      '&:active': {
        color: theme.color.neutral600,
      },
    },
  },

  info: {
    color: theme.color.info500,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.info400,
      },

      '&:active': {
        color: theme.color.info600,
      },
    },
  },

  success: {
    color: theme.color.success500,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.success400,
      },

      '&:active': {
        color: theme.color.success600,
      },
    },
  },

  warning: {
    color: theme.color.warning500,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.warning400,
      },

      '&:active': {
        color: theme.color.warning600,
      },
    },
  },

  danger: {
    color: theme.color.danger500,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.danger400,
      },

      '&:active': {
        color: theme.color.danger600,
      },
    },
  },

  light: {
    color: theme.color.white,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.light800,
      },

      '&:active': {
        color: theme.color.light600,
      },
    },
  },

  dark: {
    color: theme.color.neutral900,

    selectors: {
      '&:hover, &:focus': {
        color: theme.color.neutral600,
      },

      '&:active': {
        color: theme.color.neutral800,
      },
    },
  },
});
