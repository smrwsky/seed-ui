import { bpUp, spacing } from '@seed-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const rootSize = styleVariants({
  sm: {
    padding: `0 ${spacing[5]}`,
  },
  md: {
    padding: `0 ${spacing[5]}`,
  },

  lg: {
    padding: spacing[2],

    ...bpUp('tablet')({
      padding: `0 ${spacing[5]}`,
    }),
  },
});
