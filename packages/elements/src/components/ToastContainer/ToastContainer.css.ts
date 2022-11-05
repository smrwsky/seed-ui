import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { spacing, zIndex } from '@seed-ui/styles';

export const root = style({
  position: 'absolute',
  width: 'max-content',
  maxWidth: '100%',
  zIndex: zIndex.popover,
  pointerEvents: 'none',
});

export const rootPlacement = styleVariants({
  'top-left': {
    top: 0,
    left: 0,
  },
  'top-center': {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',
  },
  'top-right': {
    top: 0,
    right: 0,
  },
  'bottom-left': {
    bottom: 0,
    left: 0,
  },
  'bottom-center': {
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%)',
  },
  'bottom-right': {
    bottom: 0,
    right: 0,
  },
});

globalStyle(`.${root} > *:not(:last-of-type)`, {
  marginBottom: spacing['2'],
});
