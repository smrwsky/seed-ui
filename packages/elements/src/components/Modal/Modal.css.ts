import { style, styleVariants } from '@vanilla-extract/css';
import { bpUp, spacing, vars } from '@seed-ui/styles';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0,
  transition: vars.transition.fade,
  backgroundColor: vars.color.dark900,
  zIndex: vars.zIndex.modalBackdrop,
});

export const overlaySize = styleVariants({
  sm: {
    justifyContent: 'center',
    overflow: 'auto',
    padding: `${spacing[4]} ${spacing[2]}`,
  },
  md: {
    justifyContent: 'center',
    padding: `${spacing[4]} ${spacing[2]}`,
    overflow: 'auto',
  },
  lg: {
    justifyContent: 'flex-start',
    overflow: 'hidden',

    ...bpUp('tablet')({
      padding: `${spacing[4]} ${spacing[2]}`,
      overflow: 'auto',
    }),
  },
});

export const overlayEntered = style({
  opacity: 1,
});

export const content = style({
  width: '100%',
  backgroundColor: vars.color.white,
  opacity: 0,
  transform: 'translateY(-40px)',
  transition: vars.transition.base,
  overflow: 'hidden',
  zIndex: vars.zIndex.modal,
});

export const contentSize = styleVariants({
  sm: {
    borderRadius: vars.borderRadius.lg,
    boxShadow: vars.boxShadow.md,
    maxWidth: '344px',
  },
  md: {
    borderRadius: vars.borderRadius.lg,
    boxShadow: vars.boxShadow.md,
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
      borderRadius: vars.borderRadius.lg,
      boxShadow: vars.boxShadow.md,
      maxWidth: '864px',
      overflow: 'hidden',
      padding: 0,
    }),
  },
});

export const contentEntered = style({
  opacity: 1,
  transform: 'translateY(0)',
});
