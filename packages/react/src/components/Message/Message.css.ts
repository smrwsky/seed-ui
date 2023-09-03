import { vars } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  border: `1px solid ${vars.color.neutral100}`,
  color: vars.color.neutral900,
  background: vars.color.white,
  opacity: 0,
  transition: vars.transition.fade,
  pointerEvents: 'auto',
});

export const rootVisible = style({
  opacity: 1,
});
