import { bpUp, spacing, vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

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
    top: 0,
    left: 0,
    width: '100%',
    borderBottom: `1px solid ${vars.color.neutral100}`,
    padding: `${spacing[1.5]} ${spacing[1]}`,
    zIndex: vars.zIndex.fixed,

    ...bpUp('tablet')({
      position: 'static',
      borderBottom: 'none',
      padding: `${spacing[4]} ${spacing[5]}`,
    }),
  },
});
