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
    color: vars.color.white,
  },
  warning: {
    color: vars.color.white,
  },
  info: {
    color: vars.color.white,
  },
  success: {
    color: vars.color.white,
  },
});
