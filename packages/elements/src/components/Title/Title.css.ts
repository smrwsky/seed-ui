import { styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const rootSize = styleVariants({
  xl: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.titleXl.base,
  },
  lg: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.titleLg.base,
  },
  md: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.titleMd.base,
  },
  sm: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.titleSm.base,
  },
  xs: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.titleXs.base,
  },
});

export const rootSerifSize = styleVariants({
  xl: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.titleXl.serif,
  },
  lg: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.titleLg.serif,
  },
  md: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.titleMd.serif,
  },
  sm: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.titleSm.serif,
  },
  xs: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.titleXs.serif,
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
