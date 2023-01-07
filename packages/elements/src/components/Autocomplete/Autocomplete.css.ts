import { style } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

export const popover = style({
  margin: 0,
});

export const listbox = style({
  listStyle: 'none',
  backgroundColor: vars.color.white,
  overflow: 'hidden auto',
});
