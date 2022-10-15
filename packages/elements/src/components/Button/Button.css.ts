import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import {
  borderRadius,
  margin,
  spacing,
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

export const buttonMaxWidthVar = createVar('button-max-width');

export const buttonMinWidthVar = createVar('button-min-width');

export const buttonWidthVar = createVar('button-width');

export const root = style({
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: theme.fontFamily.base,
  maxWidth: fallbackVar(buttonMaxWidthVar, '100%'),
  minWidth: fallbackVar(buttonMinWidthVar, 'auto'),
  overflow: 'hidden',
  textAlign: 'center',
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  textTransform: 'uppercase',
  transition: `all ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  whiteSpace: 'nowrap',
  width: fallbackVar(buttonWidthVar, 'auto'),
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  paddingTop: spacing[0.5],
  paddingBottom: spacing[0.5],
  outline: 'none',
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
    minWidth: '6rem',
    height: '1.5rem',
    paddingLeft: spacing[1],
    paddingRight: spacing[1],
  },
  md: {
    minWidth: '7rem',
    height: '2rem',
    paddingLeft: spacing[1.5],
    paddingRight: spacing[1.5],
  },
  lg: {
    minWidth: '8rem',
    height: '2.5rem',
    paddingLeft: spacing[2],
    paddingRight: spacing[2],
  },
  xl: {
    minWidth: '9rem',
    height: '3rem',
    paddingLeft: spacing[2.5],
    paddingRight: spacing[2.5],
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

  'dark': {
    backgroundColor: theme.color.neutral900,
    color: theme.color.white,
    boxShadow: `0 1px 3px ${theme.color.neutral100}`,

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color.neutral600,
      },

      '&:active': {
        backgroundColor: theme.color.neutral800,
      },

      '&:disabled': {
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

  'dark-overlay': {
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
});

export const label = style({
  display: 'inline-block',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const icon = style({
  color: 'currentColor !important',
});

export const startIconSize = styleVariants({
  sm: {
    fontSize: '1rem !important',
    marginRight: margin[1],
  },
  md: {
    fontSize: '1.125rem !important',
    marginRight: margin[1],
  },
  lg: {
    fontSize: '1.25rem !important',
    marginRight: margin[1.5],
  },
  xl: {
    fontSize: '1.375rem !important',
    marginRight: margin[1.5],
  },
});

export const endIconSize = styleVariants({
  sm: {
    fontSize: '1rem !important',
    marginLeft: margin[1],
  },
  md: {
    fontSize: '1.125rem !important',
    marginLeft: margin[1],
  },
  lg: {
    fontSize: '1.25rem !important',
    marginLeft: margin[1.5],
  },
  xl: {
    fontSize: '1.375rem !important',
    marginLeft: margin[1.5],
  },
});
