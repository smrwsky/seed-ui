import { style, styleVariants } from '@vanilla-extract/css';
import { transitionTime, transitionTimingFunction } from '@seed-ui/styles';

export const root = style({
  opacity: 0,
  transitionProperty: 'opacity',
  transitionTimingFunction: transitionTimingFunction['in-out'],
});

export const entered = style({
  opacity: 1,
});

export const exited = style({
  visibility: 'hidden',
});

export const duration = styleVariants({
  150: {
    transitionDuration: transitionTime.sm,
  },
  300: {
    transitionDuration: transitionTime.md,
  },
  600: {
    transitionDuration: transitionTime.lg,
  },
});
