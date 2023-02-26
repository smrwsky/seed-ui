import { spacing, vars } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  width: 'max-content',
  pointerEvents: 'auto',
  zIndex: vars.zIndex.popover,
});

export const content = style({
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.neutral50}`,
  borderRadius: vars.borderRadius.md,
  boxShadow: vars.boxShadow.md,
  overflow: 'hidden',
});

export const arrow = style({
  position: 'absolute',
  backgroundColor: vars.color.white,
  width: spacing[1],
  height: spacing[1],
});
