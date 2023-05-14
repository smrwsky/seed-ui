import { vars } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';
import { CSSProperties } from 'react';

export const root = style({
  opacity: 0,
  transition: vars.transition.fade,
  pointerEvents: 'auto',
});

export const rootVisible = style({
  opacity: 1,
});

export const close = style({
  position: 'absolute !important' as CSSProperties['position'],
});
