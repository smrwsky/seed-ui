import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  fontSize: '1rem',
});

export const rootVariant = styleVariants({
  light: {
    color: vars.color.primary400,
  },
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
});
