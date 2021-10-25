import { styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const rootSize = styleVariants({
  md: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.labelMd,
  },
  sm: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.labelSm,
  },
});
