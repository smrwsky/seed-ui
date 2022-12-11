import { style } from '@vanilla-extract/css';

export const root = style({
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 0,
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const rootCollapsed = style({
  flex: '1 0 0',
});
