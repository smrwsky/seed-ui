import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const input = style({
  paddingRight: '1.75rem',
  zIndex: 1,

  selectors: {
    '&::-webkit-calendar-picker-indicator': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: '0.5rem',
      width: '1.5rem',
      height: '1.5rem',
      margin: 'auto 0',
      opacity: 0,
    },
  },
});

export const action = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: '0.5rem',
  margin: 'auto 0',
});

export const icon = style({
  backgroundColor: 'transparent !important',
});
