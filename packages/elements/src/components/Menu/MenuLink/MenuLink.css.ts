import { createVar, style, styleVariants } from '@vanilla-extract/css';
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
  position: 'relative',
  flex: 1,
  display: 'grid',
  gridTemplateAreas: `
    "icon label action"
    "icon description action"
  `,
  gridTemplateRows: 'max-content max-content',
  alignItems: 'center',
  alignContent: 'center',
  minWidth: '10rem',
  lineHeight: 1,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `all ${transitionTime.md} ${transitionTimingFunction['in-out']}`,
  outline: 'none',

  selectors: {
    '&:before': {
      content: '',
      height: '100%',
      width: rootIndentVar,
      lineHeight: 0,
    },
    '&[aria-disabled="true"]': {
      color: theme.color.neutral200,
      pointerEvents: 'none',
    },
  },
});

export const rootType = styleVariants({
  horizontal: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    gridTemplateColumns: 'max-content max-content max-content',
    justifyContent: 'center',

    selectors: {
      '&:after': {
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
    gridTemplateColumns: 'max-content 1fr max-content',

    selectors: {
      '&:after': {
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
  inline: {
    gridTemplateColumns: 'max-content 1fr max-content',

    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'block',
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
    padding: '0.125rem 0.75rem',
  },
  md: {
    minHeight: '3rem',
    padding: '0.25rem 1rem',
  },
});

export const rootVariant = styleVariants({
  primary: {
    position: 'relative',
    color: theme.color.neutral900,
    backgroundColor: theme.color.white,

    selectors: {
      '&[aria-selected="true"]': {
        color: theme.color.primary500,
      },

      '&[aria-selected="true"]:after': {
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
      '&[aria-selected="true"]': {
        backgroundColor: theme.color.primary50,
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
      '&[aria-selected="true"]': {
        backgroundColor: theme.color.primary500,
      },

      '&[aria-invalid="true"]': {
        color: theme.color.danger200,
      },
    },
  },
});

export const rootCollapsed = style({
  gridTemplateAreas: `
     "icon"
     "label"
  `,
  gridTemplateColumns: 'auto',
  minWidth: 0,
  justifyItems: 'center',
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
