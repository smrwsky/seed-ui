import { style, styleVariants } from '@vanilla-extract/css';
import {
  borderRadius,
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  maxWidth: '100%',
  transition: `all ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&[data-clickable="true"]:not([aria-disabled="true"])': {
      cursor: 'pointer',
    },
    '&[aria-disabled="true"]': {
      pointerEvents: 'none',
    },
  },
});

export const rootSize = styleVariants({
  md: {
    height: '1.5rem',
    ...theme.typography.textSm.base,
  },
  sm: {
    height: '1rem',
    ...theme.typography.caption,
  },
});

export const rootShape = styleVariants({
  rectangle: {
    borderRadius: borderRadius.sm,
    padding: '0 0.25rem',
  },
  stadium: {
    borderRadius: borderRadius.max,
    padding: '0 0.5rem',
  },
});

export const rootVariant = styleVariants({
  'primary': {
    background: theme.color.primary100,
    color: theme.color.primary600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.primary200,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.primary300,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral100,
        color: theme.color.neutral400,
      },
    },
  },
  'accent': {
    background: theme.color.accent100,
    color: theme.color.accent600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.accent200,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.accent300,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral100,
        color: theme.color.neutral400,
      },
    },
  },

  'secondary': {
    background: theme.color.neutral100,
    color: theme.color.neutral600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.neutral200,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.neutral300,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral100,
        color: theme.color.neutral400,
      },
    },
  },

  'info': {
    background: theme.color.info100,
    color: theme.color.info600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.info200,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.info300,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral100,
        color: theme.color.neutral400,
      },
    },
  },

  'success': {
    background: theme.color.success100,
    color: theme.color.success600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.success200,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.success300,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral100,
        color: theme.color.neutral400,
      },
    },
  },

  'warning': {
    background: theme.color.warning100,
    color: theme.color.warning600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.warning200,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.warning300,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral100,
        color: theme.color.neutral400,
      },
    },
  },

  'danger': {
    background: theme.color.danger100,
    color: theme.color.danger600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.danger200,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.danger300,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral100,
        color: theme.color.neutral400,
      },
    },
  },

  'primary-outline': {
    background: theme.color.primary50,
    boxShadow: `0 0 0 1px ${theme.color.primary300}`,
    color: theme.color.primary600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.primary100,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.primary200,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral50,
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral400,
      },
    },
  },

  'accent-outline': {
    background: theme.color.accent50,
    boxShadow: `0 0 0 1px ${theme.color.accent300}`,
    color: theme.color.accent600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.accent100,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.accent200,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral50,
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral400,
      },
    },
  },

  'secondary-outline': {
    background: theme.color.neutral50,
    boxShadow: `0 0 0 1px ${theme.color.neutral300}`,
    color: theme.color.neutral600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.neutral100,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.neutral200,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral50,
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral400,
      },
    },
  },

  'info-outline': {
    background: theme.color.info50,
    boxShadow: `0 0 0 1px ${theme.color.info300}`,
    color: theme.color.info600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.info100,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.info200,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral50,
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral400,
      },
    },
  },

  'success-outline': {
    background: theme.color.success50,
    boxShadow: `0 0 0 1px ${theme.color.success300}`,
    color: theme.color.success600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.success100,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.success200,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral50,
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral400,
      },
    },
  },

  'warning-outline': {
    background: theme.color.warning50,
    boxShadow: `0 0 0 1px ${theme.color.warning300}`,
    color: theme.color.warning600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.warning100,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.warning200,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral50,
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
        color: theme.color.neutral400,
      },
    },
  },

  'danger-outline': {
    background: theme.color.danger50,
    boxShadow: `0 0 0 1px ${theme.color.danger300}`,
    color: theme.color.danger600,

    selectors: {
      '&[data-clickable="true"]:not([aria-disabled="true"]):hover, &[data-clickable="true"]:not([aria-disabled="true"]):focus':
        {
          background: theme.color.danger100,
        },

      '&[data-clickable="true"]:not([aria-disabled="true"]):active': {
        background: theme.color.danger200,
      },

      '&[aria-disabled="true"]': {
        background: theme.color.neutral50,
        boxShadow: `0 0 0 1px ${theme.color.neutral200}`,
      },
    },
  },
});

export const text = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const icon = style({
  cursor: 'pointer',
  transition: `color ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  marginLeft: '0.25rem',
});

export const iconSize = styleVariants({
  sm: {
    fontSize: '0.75rem',
  },
  md: {
    fontSize: '1rem',
  },
});

export const iconVariant = styleVariants({
  'primary': {
    color: theme.color.primary500,
    selectors: {
      '&:hover': {
        color: theme.color.primary400,
      },
      '&:active': {
        color: theme.color.primary600,
      },
    },
  },

  'accent': {
    color: theme.color.accent500,
    selectors: {
      '&:hover': {
        color: theme.color.accent400,
      },
      '&:active': {
        color: theme.color.accent600,
      },
    },
  },

  'secondary': {
    color: theme.color.neutral500,
    selectors: {
      '&:hover': {
        color: theme.color.neutral400,
      },
      '&:active': {
        color: theme.color.neutral600,
      },
    },
  },

  'info': {
    color: theme.color.info500,
    selectors: {
      '&:hover': {
        color: theme.color.info400,
      },
      '&:active': {
        color: theme.color.info600,
      },
    },
  },

  'success': {
    color: theme.color.success500,
    selectors: {
      '&:hover': {
        color: theme.color.success400,
      },
      '&:active': {
        color: theme.color.success600,
      },
    },
  },

  'warning': {
    color: theme.color.warning500,
    selectors: {
      '&:hover': {
        color: theme.color.warning400,
      },
      '&:active': {
        color: theme.color.warning600,
      },
    },
  },

  'danger': {
    color: theme.color.danger500,
    selectors: {
      '&:hover': {
        color: theme.color.danger400,
      },
      '&:active': {
        color: theme.color.danger600,
      },
    },
  },

  'primary-outline': {
    color: theme.color.primary500,
    selectors: {
      '&:hover': {
        color: theme.color.primary400,
      },
      '&:active': {
        color: theme.color.primary600,
      },
    },
  },

  'accent-outline': {
    color: theme.color.accent500,
    selectors: {
      '&:hover': {
        color: theme.color.accent400,
      },
      '&:active': {
        color: theme.color.accent600,
      },
    },
  },

  'secondary-outline': {
    color: theme.color.neutral500,
    selectors: {
      '&:hover': {
        color: theme.color.neutral400,
      },
      '&:active': {
        color: theme.color.neutral600,
      },
    },
  },

  'info-outline': {
    color: theme.color.info500,
    selectors: {
      '&:hover': {
        color: theme.color.info400,
      },
      '&:active': {
        color: theme.color.info600,
      },
    },
  },

  'success-outline': {
    color: theme.color.success500,
    selectors: {
      '&:hover': {
        color: theme.color.success400,
      },
      '&:active': {
        color: theme.color.success600,
      },
    },
  },

  'warning-outline': {
    color: theme.color.warning500,
    selectors: {
      '&:hover': {
        color: theme.color.warning400,
      },
      '&:active': {
        color: theme.color.warning600,
      },
    },
  },

  'danger-outline': {
    color: theme.color.danger500,
    selectors: {
      '&:hover': {
        color: theme.color.danger400,
      },
      '&:active': {
        color: theme.color.danger600,
      },
    },
  },
});

export const iconDisabled = style({
  color: theme.color.neutral400,
});
