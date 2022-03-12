import { style, styleVariants } from '@vanilla-extract/css';
import {
  borderRadius,
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

export const root = style({
  backgroundColor: theme.color.white,
  border: `1px solid ${theme.color.neutral100}`,
  display: 'flex',
  transition: `all ${transitionTime.sm} ${transitionTimingFunction.out}`,
  overflow: 'hidden',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const rootShape = styleVariants({
  rectangle: {
    borderRadius: borderRadius.sm,
  },
  stadium: {
    borderRadius: borderRadius.max,
  },
});

export const rootFocused = style({
  borderColor: theme.color.primary400,
  boxShadow: `0 0 0 3px ${theme.color.primary100}`,
});

export const rootInvalid = style({
  borderColor: theme.color.danger100,

  selectors: {
    '&:not(:disabled):not(:readonly):hover': {
      borderColor: theme.color.danger400,
    },
  },
});

export const rootInvalidFocused = style({
  borderColor: theme.color.danger400,
  boxShadow: `0 0 0 3px ${theme.color.danger100}`,
});

export const rootDisabled = style({
  borderColor: theme.color.neutral50,
  cursor: 'not-allowed',
});

export const rootSize = styleVariants({
  sm: {
    paddingBottom: `calc(${(32 - 24) / 16 / 2}rem - 1px)`,
    paddingTop: `calc(${(32 - 24) / 16 / 2}rem - 1px)`,
  },
  md: {
    paddingBottom: `calc(${(40 - 24) / 16 / 2}rem - 1px)`,
    paddingTop: `calc(${(40 - 24) / 16 / 2}rem - 1px)`,
  },
  lg: {
    paddingBottom: `calc(${(48 - 24) / 16 / 2}rem - 1px)`,
    paddingTop: `calc(${(48 - 24) / 16 / 2}rem - 1px)`,
  },
});