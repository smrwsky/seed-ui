import { style } from '@vanilla-extract/css';
import { borderRadius, spacing, theme, zIndex } from '@seed-ui/styles';

export const root = style({
  width: 'max-content',
  pointerEvents: 'auto',
  zIndex: zIndex.popover,
  filter:
    'drop-shadow(0 0 1px rgb(0 0 0 / 0.2)) drop-shadow(0 4px 5px rgb(0 0 0 / 0.1)) drop-shadow(0 2px 3px rgb(0 0 0 / 0.06))',
});

export const content = style({
  backgroundColor: theme.color.white,
  borderRadius: borderRadius.md,
  overflow: 'hidden',
});

export const arrow = style({
  position: 'absolute',
  backgroundColor: theme.color.white,
  width: spacing[1],
  height: spacing[1],
});
