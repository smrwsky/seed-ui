import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

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
        background: vars.color.dark50,
      },
    },
  },
  secondary: {
    selectors: {
      '&:before': {
        background: vars.color.dark50,
      },
    },
  },
  alt: {
    selectors: {
      '&:before': {
        background: vars.color.dark300,
      },
    },
  },
});
