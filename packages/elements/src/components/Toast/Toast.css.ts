import { style, styleVariants } from '@vanilla-extract/css';
import { borderRadius, boxShadow, spacing, theme } from '@seed-ui/styles';

export const root = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  maxWidth: '380px',
  borderRadius: borderRadius.md,
  border: `1px solid ${theme.color.neutral100}`,
  background: theme.color.white,
  boxShadow: boxShadow.md,
  padding: `${spacing['1.5']} ${spacing['5.5']} ${spacing['1.5']} ${spacing['1.5']}`,
  pointerEvents: 'auto',
});

export const icon = style({
  fontSize: '1.5rem',
  marginRight: spacing['1.5'],
});

export const iconVariant = styleVariants({
  default: {
    color: theme.color.primary400,
  },
  danger: {
    color: theme.color.danger400,
  },
  warning: {
    color: theme.color.warning400,
  },
  info: {
    color: theme.color.info400,
  },
  success: {
    color: theme.color.success400,
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '1.5rem',
  color: theme.color.neutral900,
  ...theme.typography.textSm.base,
});

export const title = style({
  marginBottom: spacing[0.5],
});

export const close = style({
  position: 'absolute',
  top: spacing[1],
  right: spacing[1],
});
