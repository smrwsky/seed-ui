import { SPACING, vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  gridArea: 'input',
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.neutral100}`,
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.white,
  transition: vars.transition.base,
  overflow: 'hidden',
});

export const rootFocused = style({
  borderColor: vars.color.primary400,
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
    minHeight: '2.25rem',
    padding: `${SPACING[0.5]} ${SPACING[1]}`,
  },
  md: {
    minHeight: '2.625rem',
    padding: `${SPACING[1]} ${SPACING[2]}`,
  },
  lg: {
    minHeight: '3rem',
    padding: `${SPACING[1.5]} ${SPACING[3]}`,
  },
});

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});
