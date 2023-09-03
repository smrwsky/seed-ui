import { bpUp, SPACING, vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  backgroundColor: vars.color.white,
});

export const rootSize = styleVariants({
  sm: {
    padding: `${SPACING[4]} ${SPACING[5]}`,
  },

  md: {
    padding: `${SPACING[4]} ${SPACING[5]}`,
  },

  lg: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    borderBottom: `1px solid ${vars.color.neutral100}`,
    padding: `${SPACING[1.5]} ${SPACING[1]}`,
    zIndex: 20,

    ...bpUp('tablet', {
      position: 'static',
      borderBottom: 'none',
      padding: `${SPACING[4]} ${SPACING[5]}`,
    }),
  },
});
