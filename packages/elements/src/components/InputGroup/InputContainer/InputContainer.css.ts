import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

export const root = style({
  gridArea: 'input',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.neutral100}`,
  borderRadius: vars.borderRadius.md,
  display: 'flex',
  transition: vars.transition.base,
  overflow: 'hidden',
});

export const rootFocused = style({
  borderColor: vars.color.secondary400,
  boxShadow: vars.boxShadow.focus,
});

export const rootInvalid = style({
  borderColor: vars.color.danger400,

  selectors: {
    '&:not(:disabled):not(:readonly):hover': {
      borderColor: vars.color.danger400,
    },
  },
});

export const rootInvalidFocused = style({
  borderColor: vars.color.danger400,
  boxShadow: vars.boxShadow.focusDanger,
});

export const rootDisabled = style({
  borderColor: vars.color.neutral50,
  cursor: 'not-allowed',
});

export const rootReadOnly = style({
  borderColor: vars.color.neutral50,
});

export const rootSize = styleVariants({
  sm: {
    padding: `calc(${(32 - 24) / 16 / 2}rem - 1px)`,
  },
  md: {
    padding: `calc(${(40 - 24) / 16 / 2}rem - 1px)`,
  },
  lg: {
    padding: `calc(${(48 - 24) / 16 / 2}rem - 1px)`,
  },
});

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});
