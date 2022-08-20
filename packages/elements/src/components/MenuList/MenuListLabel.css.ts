import {
  createVar,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import {
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

/**
 *  Root style
 */

export const rootIndentVar = createVar('menu-title-indent');

export const root = style({
  flex: 1,
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  minWidth: '4.5rem',
  lineHeight: 1,
  textDecoration: 'none',
  cursor: 'pointer',
  marginLeft: rootIndentVar,
  transition: `color background-color ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,

  selectors: {
    '&[aria-disabled="true"]': {
      color: theme.color.neutral200,
      pointerEvents: 'none',
    },
  },
});

export const rootDirection = styleVariants({
  horizontal: {
    paddingLeft: '1rem',
    paddingRight: '1rem',

    selectors: {
      '&:before': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '0.25rem',
        width: '100%',
        background: 'transparent',
      },
    },
  },
  vertical: {
    selectors: {
      '&:before': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '0.25rem',
        height: '100%',
        background: 'transparent',
      },
    },
  },
});

export const rootSize = styleVariants({
  sm: {
    minHeight: '2.5rem',
    padding: '0.5rem 0.75rem',
  },
  md: {
    minHeight: '3rem',
    padding: '1rem',
  },
});

export const rootVariant = styleVariants({
  primary: {
    position: 'relative',
    color: theme.color.neutral900,
    backgroundColor: theme.color.white,

    selectors: {
      '&:hover': {
        backgroundColor: theme.color.neutral50,
      },

      '&[aria-selected="true"]': {
        color: theme.color.primary500,
      },

      '&[aria-selected="true"]:before': {
        background: theme.color.primary500,
      },

      '&[aria-invalid="true"]': {
        color: theme.color.danger500,
      },
    },
  },
  secondary: {
    color: theme.color.neutral500,
    backgroundColor: theme.color.white,

    selectors: {
      '&:hover': {
        backgroundColor: theme.color.neutral50,
      },

      '&[aria-selected="true"]': {
        color: theme.color.primary500,
      },

      '&[aria-invalid="true"]': {
        color: theme.color.danger500,
      },
    },
  },
  light: {
    color: theme.color.neutral900,
    backgroundColor: theme.color.white,

    selectors: {
      '&:hover': {
        backgroundColor: theme.color.neutral50,
      },

      '&[aria-selected="true"]': {
        backgroundColor: theme.color.primary50,
      },

      '&[aria-selected="true"]:hover': {
        backgroundColor: theme.color.primary100,
      },

      '&[aria-invalid="true"]': {
        color: theme.color.danger500,
      },
    },
  },
  dark: {
    color: theme.color.white,
    backgroundColor: theme.color.primary700,

    selectors: {
      '&:hover': {
        backgroundColor: theme.color.primary600,
      },

      '&[aria-selected="true"]': {
        backgroundColor: theme.color.primary500,
      },

      '&[aria-selected="true"]:hover': {
        backgroundColor: theme.color.primary500,
      },

      '&[aria-invalid="true"]': {
        color: theme.color.danger200,
      },
    },
  },
});

export const rootCollapsed = style({
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
});

export const rootActiveVariant = styleVariants({
  primary: {
    backgroundColor: theme.color.neutral50,
  },
  secondary: {
    backgroundColor: theme.color.neutral50,
  },
  light: {
    backgroundColor: theme.color.neutral50,

    selectors: {
      '&[aria-selected="true"]': {
        backgroundColor: theme.color.primary100,
      },
    },
  },
  dark: {
    backgroundColor: theme.color.primary600,

    selectors: {
      '&[aria-selected="true"]': {
        backgroundColor: theme.color.primary400,
      },
    },
  },
});

/**
 *  Icon styles
 */

export const icon = style({
  display: 'inline-block',
  fontSize: '1.5rem',
  margin: '0 .5rem 0 0',
});

export const iconVariant = styleVariants({
  primary: {
    color: theme.color.neutral500,
  },
  secondary: {
    color: theme.color.neutral500,
  },
  light: {
    color: theme.color.neutral500,
  },
  dark: {
    color: theme.color.white,
  },
});

export const iconCollapsed = style({
  display: 'inline-block',
  margin: '0 0 .125rem',
});

globalStyle(
  `${root}[aria-selected="true"] ${icon},` +
    `${root}[aria-disabled="true"] ${icon},` +
    `${root}[aria-invalid="true"] ${icon}`,
  {
    color: 'currentColor',
  },
);

/**
 *  Label Container styles
 */

export const labelContainer = style({
  flex: 1,
  width: '100%',
  overflow: 'hidden',
  lineHeight: 0,

  selectors: {
    '&:not(:last-of-type)': {
      marginRight: '1rem',
    },
  },
});

/**
 *  Label styles
 */

export const label = style({
  flex: 1,
  textOverflow: 'ellipsis',
  overflow: 'hidden',

  selectors: {
    '&:not(:last-of-type)': {
      marginBottom: '.25rem',
    },
  },
});

export const labelSize = styleVariants({
  sm: {
    ...theme.typography.labelSm,
  },
  md: {
    ...theme.typography.labelMd,
  },
});

export const labelCollapsed = style({
  ...theme.typography.caption,
  whiteSpace: 'nowrap',
  textAlign: 'center',
});

/**
 *  Description styles
 */

export const description = style({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  ...theme.typography.textSm.base,
});

/**
 *  Action styles
 */

export const action = style({
  lineHeight: 1,
  overflow: 'hidden',
});
