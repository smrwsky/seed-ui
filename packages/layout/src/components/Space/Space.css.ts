import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
});

export const rootDirection = styleVariants({
  'column': {
    flexDirection: 'column',
  },
  'column-reverse': {
    flexDirection: 'column-reverse',
  },
  'row': {
    flexDirection: 'row',
  },
  'row-reverse': {
    flexDirection: 'row-reverse',
  },
});

export const inner = style({
  lineHeight: 0,
});
