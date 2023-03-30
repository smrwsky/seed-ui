import { bpUp, SPACING } from '@seed-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const rootSize = styleVariants({
  sm: {
    padding: `0 ${SPACING[5]}`,
  },
  md: {
    padding: `0 ${SPACING[5]}`,
  },

  lg: {
    padding: SPACING[2],

    ...bpUp('tablet', {
      padding: `0 ${SPACING[5]}`,
    }),
  },
});
