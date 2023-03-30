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
    bottom: 0,
    left: 0,
    width: '100%',
    borderTop: `1px solid ${vars.color.neutral100}`,
    padding: SPACING[1],
    zIndex: vars.zIndex.fixed,

    ...bpUp('tablet', {
      position: 'static',
      borderTop: 'none',
      padding: `${SPACING[4]} ${SPACING[5]}`,
    }),
  },
});
