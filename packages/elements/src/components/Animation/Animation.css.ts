import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const rootType = styleVariants({
  fade: {
    opacity: 0,
    transition: vars.transition.fade,
  },
  slide: {
    maxHeight: 0,
    overflow: vars.transition.collapse,
  },
});

export const rootEntered = styleVariants({
  fade: {
    opacity: 1,
  },
  slide: {
    maxHeight: '1000px',
  },
});

export const rootExited = style({
  visibility: 'hidden',
});
