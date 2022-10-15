import { style, styleVariants } from '@vanilla-extract/css';
import { bpUp, spacing, theme, zIndex } from '@seed-ui/styles';

export const root = style({
  backgroundColor: theme.color.white,
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
    borderBottom: `1px solid ${theme.color.neutral100}`,
    padding: `${spacing[1.5]} ${spacing[1]}`,
    zIndex: zIndex.fixed,

    ...bpUp('tablet')({
      position: 'static',
      borderBottom: 'none',
      padding: `${spacing[4]} ${spacing[5]}`,
    }),
  },
});