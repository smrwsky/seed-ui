import { style, styleVariants } from '@vanilla-extract/css';
import { transitionTime, transitionTimingFunction } from '@seed-ui/styles';

export const root = style({
  transitionProperty: 'all',
  transitionTimingFunction: transitionTimingFunction['in-out'],
});

export const rootType = styleVariants({
  fade: {
    opacity: 0,
  },
  slide: {
    maxHeight: 0,
    overflow: 'hidden',
  },
});

export const rootDuration = styleVariants({
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
