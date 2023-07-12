import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '-0.25rem',
  padding: '0 0.125rem',
});

globalStyle(`.${root} > *`, {
  marginTop: '0.25rem',
  padding: '0 0.125rem',
});
