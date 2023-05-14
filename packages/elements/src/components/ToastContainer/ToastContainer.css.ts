import { bpUp, SPACING, vars } from '@seed-ui/styles';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'absolute',
  width: 'max-content',
  maxWidth: '100%',
  zIndex: vars.zIndex.toast,
  pointerEvents: 'none',
});

export const rootPlacement = styleVariants({
  'top-left': {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',

    ...bpUp('mobileLg', {
      top: 0,
      left: 0,
      transform: 'none',
    }),
  },
  'top-center': {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',
  },
  'top-right': {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',

    ...bpUp('mobileLg', {
      top: 0,
      right: 0,
      left: 'auto',
      transform: 'none',
    }),
  },
  'bottom-left': {
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%)',

    ...bpUp('mobileLg', {
      top: 0,
      left: 0,
      transform: 'none',
    }),
  },
  'bottom-center': {
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%)',
  },
  'bottom-right': {
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%)',

    ...bpUp('mobileLg', {
      top: 0,
      right: 0,
      left: 'auto',
      transform: 'none',
    }),
  },
});

globalStyle(`.${root} > *:not(:last-of-type)`, {
  marginBottom: SPACING['2'],
});
