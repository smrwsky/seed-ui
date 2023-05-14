import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  opacity: 0,
  transition: vars.transition.fade,
  pointerEvents: 'auto',
});

export const rootVisible = style({
  opacity: 1,
});

export const rootVariant = styleVariants({
  danger: {
    border: '1px solid transparent',
    color: vars.color.white,
    background: vars.color.danger500,
  },
  warning: {
    border: '1px solid transparent',
    color: vars.color.white,
    background: vars.color.warning500,
  },
  info: {
    border: '1px solid transparent',
    color: vars.color.white,
    background: vars.color.info500,
  },
  success: {
    border: '1px solid transparent',
    color: vars.color.white,
    background: vars.color.success500,
  },
  light: {
    border: `1px solid ${vars.color.neutral100}`,
    background: vars.color.white,
    color: vars.color.neutral900,
  },
});

export const content = style({
  color: 'inherit',
});
