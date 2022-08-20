import { style, styleVariants } from '@vanilla-extract/css';
import { borderRadius, spacing, theme } from '@seed-ui/styles';

export const root = style({
  display: 'flex',
  borderRadius: borderRadius.md,
  padding: spacing[1.5],
});

export const rootVariant = styleVariants({
  danger: {
    border: `1px solid ${theme.color.danger100}`,
    color: theme.color.danger600,
    background: theme.color.danger50,
  },
  warning: {
    border: `1px solid ${theme.color.warning100}`,
    color: theme.color.warning600,
    background: theme.color.warning50,
  },
  info: {
    border: `1px solid ${theme.color.info100}`,
    color: theme.color.info600,
    background: theme.color.info50,
  },
  success: {
    border: `1px solid ${theme.color.success100}`,
    color: theme.color.success600,
    background: theme.color.success50,
  },
});

export const icon = style({
  fontSize: '1.5rem',
  marginRight: spacing[1.5],
});

export const iconVariant = styleVariants({
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

export const title = style({
  color: 'inherit!important',
  marginBottom: spacing[0.5],
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '1.5rem',
  color: 'inherit',
  ...theme.typography.textSm.base,
});
