import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const menu = style({
  position: 'relative',

  selectors: {
    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
    },
  },
});

export const menuVariant = styleVariants({
  primary: {
    selectors: {
      '&:before': {
        background: vars.color.neutral50,
      },
    },
  },
  secondary: {
    selectors: {
      '&:before': {
        background: vars.color.neutral50,
      },
    },
  },
  dark: {
    selectors: {
      '&:before': {
        background: vars.color.primary800,
      },
    },
  },
});
