import { styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const rootSize = styleVariants({
  md: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.subtitleMd.base,
  },
  sm: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.subtitleSm.base,
  },
});

export const rootSerifSize = styleVariants({
  md: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.subtitleMd.serif,
  },
  sm: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.subtitleSm.serif,
  },
});

export const rootVariant = styleVariants({
  primary: {
    color: theme.color.primary600,
  },

  accent: {
    color: theme.color.accent600,
  },

  secondary: {
    color: theme.color.neutral600,
  },

  info: {
    color: theme.color.info600,
  },

  success: {
    color: theme.color.success600,
  },

  warning: {
    color: theme.color.warning600,
  },

  danger: {
    color: theme.color.danger600,
  },

  light: {
    color: theme.color.white,
  },

  dark: {
    color: theme.color.neutral900,
  },
});
