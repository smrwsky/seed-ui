import { style, styleVariants } from '@vanilla-extract/css';
import { bpUp, spacing, vars } from '@seed-ui/styles';

export const root = style({
  backgroundColor: vars.color.white,
});

export const rootSize = styleVariants({
  sm: {
    padding: `${spacing[4]} ${spacing[5]}`,
  },

  md: {
    padding: `${spacing[4]} ${spacing[5]}`,
  },

  lg: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTop: `1px solid ${vars.color.neutral100}`,
    padding: spacing[1],
    zIndex: vars.zIndex.fixed,

    ...bpUp('tablet')({
      position: 'static',
      borderTop: 'none',
      padding: `${spacing[4]} ${spacing[5]}`,
    }),
  },
});
