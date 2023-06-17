import { vars } from '@seed-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const rootVariant = styleVariants({
  danger: {
    color: vars.color.danger400,
  },
  warning: {
    color: vars.color.warning400,
  },
  info: {
    color: vars.color.info400,
  },
  success: {
    color: vars.color.success400,
  },
  light: {},
});