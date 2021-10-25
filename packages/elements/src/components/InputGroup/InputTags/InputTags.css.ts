import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  lineHeight: '1005%',
});

export const rootSize = styleVariants({
  sm: {
    margin: '-1px',
  },
  md: {
    margin: '-2px',
  },
  lg: {
    margin: '-4px',
  },
});

export const rootInnerSize = styleVariants({
  sm: {
    margin: '1px',
  },
  md: {
    margin: '2px',
  },
  lg: {
    margin: '4px',
  },
});
