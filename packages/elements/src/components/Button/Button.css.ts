import { style, styleVariants } from '@vanilla-extract/css';
import {
  borderRadius,
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

import { atoms } from '../../styles/atoms.css';

export const root = style({
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: theme.fontFamily.base,
  overflow: 'hidden',
  textAlign: 'center',
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  textTransform: 'uppercase',
  transition: `all ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  ...theme.typography.button,

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});
export const rootShape: Record<'stadium' | 'rectangle', string> = styleVariants(
  {
    rectangle: {
      borderRadius: borderRadius.sm,
    },
    stadium: {
      borderRadius: borderRadius.max,
    },
  },
);
export const rootSize = styleVariants({
  sm: {
    minWidth: '7rem',
    padding: '0.56rem 0.53rem 0.5rem',
  },
  md: {
    minWidth: '8rem',
    padding: '0.81rem 0.78rem 0.75rem',
  },
  lg: {
    minWidth: '9rem',
    padding: '1.06rem 1.03rem 1rem',
  },
});

export const rootVariant = styleVariants({
  'primary': {
    backgroundColor: theme.color.primary500,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.primary100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.primary400,
      },

      '&:active': {
        backgroundColor: theme.color.primary600,
      },

      '&:disabled': {
        backgroundColor: theme.color.neutral200,
      },
    },
  },

  'accent': {
    backgroundColor: theme.color.accent500,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.accent100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.accent400,
      },

      '&:active': {
        backgroundColor: theme.color.accent600,
      },

      '&:disabled': {
        backgroundColor: theme.color.neutral200,
      },
    },
  },

  'secondary': {
    backgroundColor: theme.color.neutral500,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.neutral100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral400,
      },

      '&:active': {
        backgroundColor: theme.color.neutral600,
      },

      '&:disabled': {
        backgroundColor: theme.color.neutral200,
      },
    },
  },

  'info': {
    backgroundColor: theme.color.info500,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.info100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.info400,
      },

      '&:active': {
        backgroundColor: theme.color.info600,
      },

      '&:disabled': {
        backgroundColor: theme.color.neutral200,
      },
    },
  },

  'success': {
    backgroundColor: theme.color.success500,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.success100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.success400,
      },

      '&:active': {
        backgroundColor: theme.color.success600,
      },

      '&:disabled': {
        backgroundColor: theme.color.neutral200,
      },
    },
  },

  'warning': {
    backgroundColor: theme.color.warning500,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.warning100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.warning400,
      },

      '&:active': {
        backgroundColor: theme.color.warning600,
      },

      '&:disabled': {
        backgroundColor: theme.color.neutral200,
      },
    },
  },

  'danger': {
    backgroundColor: theme.color.danger500,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.danger100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.danger400,
      },

      '&:active': {
        backgroundColor: theme.color.danger600,
      },

      '&:disabled': {
        backgroundColor: theme.color.neutral200,
      },
    },
  },

  'light': {
    backgroundColor: theme.color.white,
    color: theme.color.primary500,
    boxShadow: `0 1px 3px ${theme.color.light200}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.light800,
      },

      '&:active': {
        backgroundColor: theme.color.light600,
      },

      '&:disabled': {
        color: theme.color.white,
        backgroundColor: theme.color.neutral200,
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

  'primary-overlay': {
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

  'accent-overlay': {
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

  'secondary-overlay': {
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

  'info-overlay': {
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

  'success-overlay': {
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

  'warning-overlay': {
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

  'danger-overlay': {
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

  'light-overlay': {
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
});

export const label = style({
  display: 'inline-block',
});

export const startIcon = atoms({ marginRight: 1 });

export const endIcon = atoms({ marginLeft: 1 });
