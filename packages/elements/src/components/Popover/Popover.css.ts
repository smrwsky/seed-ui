import { style } from '@vanilla-extract/css';
import { zIndex } from '@seed-ui/styles';

export const root = style({
  pointerEvents: 'auto',
  zIndex: zIndex.popover,
  filter:
    'drop-shadow(0 0 1px rgb(0 0 0 / 0.2)) drop-shadow(0 4px 5px rgb(0 0 0 / 0.1)) drop-shadow(0 2px 3px rgb(0 0 0 / 0.06))',
});
