import { MARGIN, SPACING, vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  maxWidth: '380px',
  borderRadius: vars.borderRadius.lg,
  border: `1px solid ${vars.color.neutral100}`,
  background: vars.color.white,
  boxShadow: vars.boxShadow.md,
  padding: `${SPACING[2]} ${SPACING[11]} ${SPACING[2]} ${SPACING[3]}`,
  pointerEvents: 'auto',
});

export const icon = style({
  fontSize: '1.5rem',
  marginRight: SPACING[2],
});

export const iconVariant = styleVariants({
  light: {
    color: vars.color.primary400,
  },
  danger: {
    color: vars.color.danger400,
  },
  warning: {
    color: vars.color.warning400,
  },
  info: {
    color: vars.color.info400,
  },
  success: {
    color: vars.color.success400,
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '1.5rem',
  color: vars.color.neutral900,
  marginTop: MARGIN[0.5],
  ...vars.typography.textSm.secondary,
});

export const title = style({
  marginTop: MARGIN[-0.5],
  marginBottom: MARGIN[1],
});

export const close = style({
  position: 'absolute',
  top: SPACING[2],
  right: SPACING[2],
});
