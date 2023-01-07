import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const select = style({
  appearance: 'none',
  paddingRight: '1.75rem',
  zIndex: 1,
});

export const selectMultiple = style({
  paddingRight: 0,
});

export const action = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: '0.5rem',
  margin: 'auto 0',
});
