import { style, styleVariants } from '@vanilla-extract/css';
import { vars, spacing } from '@seed-ui/styles';

export const root = style({
  border: '1px solid transparent',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '240px',
  minWidth: '160px',
  borderRadius: vars.borderRadius.lg,
  boxShadow: vars.boxShadow.md,
  padding: `${spacing[1.5]} ${spacing[3]}`,
  pointerEvents: 'auto',
});

export const rootVariant = styleVariants({
  danger: {
    color: vars.color.white,
    background: vars.color.danger500,
  },
  warning: {
    color: vars.color.white,
    background: vars.color.warning500,
  },
  info: {
    color: vars.color.white,
    background: vars.color.info500,
  },
  success: {
    color: vars.color.white,
    background: vars.color.success500,
  },
  light: {
    border: `1px solid ${vars.color.neutral100}`,
    background: vars.color.white,
    color: vars.color.neutral900,
  },
});

export const icon = style({
  marginRight: spacing[2],
  fontSize: '1rem',
});

export const iconVariant = styleVariants({
  light: {
    color: vars.color.primary400,
  },
  danger: {
    color: vars.color.white,
  },
  warning: {
    color: vars.color.white,
  },
  info: {
    color: vars.color.white,
  },
  success: {
    color: vars.color.white,
  },
});

export const content = style({
  color: 'inherit',
  paddingTop: spacing[0.5],
});
