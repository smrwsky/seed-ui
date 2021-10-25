import { style } from '@vanilla-extract/css';
import { bpDown, bpOnly, bpUp } from '@seed-ui/styles';

export const root = style({
  display: 'contents',
});

export const mobileDown = style([
  bpDown('mobile')({
    display: 'none',
  }),
]);

export const tablet = style([
  bpOnly('tablet')({
    display: 'none',
  }),
]);

export const tabletDown = style([
  bpDown('tablet')({
    display: 'none',
  }),
]);

export const tabletUp = style([
  bpUp('tablet')({
    display: 'none',
  }),
]);

export const desktopUp = style([
  bpUp('desktop')({
    display: 'none',
  }),
]);
