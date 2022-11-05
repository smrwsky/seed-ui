import { style, styleVariants } from '@vanilla-extract/css';
import { borderRadius, boxShadow, theme, spacing } from '@seed-ui/styles';

export const root = style({
  border: '1px solid transparent',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '230px',
  minWidth: '190px',
  borderRadius: borderRadius.md,
  boxShadow: boxShadow.md,
  padding: `${spacing['1']} ${spacing['1.5']}`,
  pointerEvents: 'auto',
});

export const rootVariant = styleVariants({
  danger: {
    color: theme.color.white,
    background: theme.color.danger500,
  },
  warning: {
    color: theme.color.white,
    background: theme.color.warning500,
  },
  info: {
    color: theme.color.white,
    background: theme.color.info500,
  },
  success: {
    color: theme.color.white,
    background: theme.color.success500,
  },
  default: {
    border: `1px solid ${theme.color.neutral100}`,
    background: theme.color.white,
    color: theme.color.neutral900,
  },
});

export const icon = style({
  marginRight: spacing['1'],
  fontSize: '1rem',
});

export const iconVariant = styleVariants({
  default: {
    color: theme.color.primary400,
  },
  danger: {
    color: theme.color.white,
  },
  warning: {
    color: theme.color.white,
  },
  info: {
    color: theme.color.white,
  },
  success: {
    color: theme.color.white,
  },
});

export const content = style({
  color: 'inherit',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ...theme.typography.textSm.base,
});
