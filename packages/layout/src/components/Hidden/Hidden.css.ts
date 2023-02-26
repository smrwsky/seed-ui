import { bpDown, bpOnly, bpUp } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'contents',
});

export const mobileDown = style([
  bpDown('mobile')({
    display: 'none',
  }),
]);

export const mobileLg = style([
  bpOnly('mobileLg')({
    display: 'none',
  }),
]);

export const mobileLgDown = style([
  bpDown('mobileLg')({
    display: 'none',
  }),
]);

export const mobileLgUp = style([
  bpUp('mobileLg')({
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

export const desktop = style([
  bpOnly('desktop')({
    display: 'none',
  }),
]);

export const desktopDown = style([
  bpDown('desktop')({
    display: 'none',
  }),
]);

export const desktopUp = style([
  bpUp('desktop')({
    display: 'none',
  }),
]);

export const desktopLg = style([
  bpOnly('desktopLg')({
    display: 'none',
  }),
]);

export const desktopLgDown = style([
  bpDown('desktopLg')({
    display: 'none',
  }),
]);

export const desktopLgUp = style([
  bpUp('desktopLg')({
    display: 'none',
  }),
]);

export const desktopXlUp = style([
  bpUp('desktopXl')({
    display: 'none',
  }),
]);
