import { style, styleVariants } from '@vanilla-extract/css';
import {
  borderRadius,
  boxShadow,
  bpUp,
  spacing,
  theme,
  transitionTime,
  transitionTimingFunction,
  zIndex,
} from '@seed-ui/styles';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0,
  transition: `opacity ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  backgroundColor: theme.color.dark400,
  zIndex: zIndex.modalBackdrop,
});

export const overlaySize = styleVariants({
  sm: {
    justifyContent: 'center',
    overflow: 'auto',
    padding: `${spacing[2]} ${spacing[1]}`,
  },
  md: {
    justifyContent: 'center',
    padding: `${spacing[2]} ${spacing[1]}`,
    overflow: 'auto',
  },
  lg: {
    justifyContent: 'flex-start',
    overflow: 'hidden',

    ...bpUp('tablet')({
      padding: `${spacing[2]} ${spacing[1]}`,
      overflow: 'auto',
    }),
  },
});

export const overlayEntered = style({
  opacity: 1,
});

export const content = style({
  width: '100%',
  backgroundColor: theme.color.white,
  opacity: 0,
  transform: 'translateY(-40px)',
  transition: `opacity ${transitionTime.sm} ${transitionTimingFunction['in-out']}, transform ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  zIndex: zIndex.modal,
});

export const contentSize = styleVariants({
  sm: {
    borderRadius: borderRadius.sm,
    boxShadow: boxShadow.md,
    maxWidth: '344px',
  },
  md: {
    borderRadius: borderRadius.sm,
    boxShadow: boxShadow.md,
    maxWidth: '480px',
  },
  lg: {
    position: 'absolute',
    inset: 0,
    maxWidth: '100%',
    height: '100%',
    padding: `${spacing[7]} 0`,
    overflow: 'auto',

    ...bpUp('tablet')({
      height: 'auto',
      position: 'static',
      borderRadius: borderRadius.sm,
      boxShadow: boxShadow.md,
      maxWidth: '864px',
      overflow: 'visible',
      padding: 0,
    }),
  },
});

export const contentEntered = style({
  opacity: 1,
  transform: 'translateY(0)',
});
