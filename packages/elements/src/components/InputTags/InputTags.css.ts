import { style } from '@vanilla-extract/css';

export const root = style({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  lineHeight: 1,
  margin: '-0.125rem',
});

export const inner = style({
  lineHeight: 0,
  margin: '0.125rem',
});
