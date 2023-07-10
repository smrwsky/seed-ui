import { style } from '@vanilla-extract/css';

export const hideScrollbar = style({
  scrollbarWidth: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      height: '0 !important',
      width: '0 !important',
    },
  },
});
