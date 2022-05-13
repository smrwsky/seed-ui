import { styleVariants } from '@vanilla-extract/css';
import { bpUp, spacing } from '@seed-ui/styles';

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
