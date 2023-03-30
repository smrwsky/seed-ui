import { vars } from '@seed-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const rootPrimarySize = styleVariants({
  xs: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.titleXs.primary,
  },
  sm: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.titleSm.primary,
  },
  md: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.titleMd.primary,
  },
  lg: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.titleLg.primary,
  },
  xl: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.titleXl.primary,
  },
});

export const rootSecondarySize = styleVariants({
  xs: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.titleXs.secondary,
  },
  sm: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.titleSm.secondary,
  },
  md: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.titleMd.secondary,
  },
  lg: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.titleLg.secondary,
  },
  xl: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.titleXl.secondary,
  },
});

export const rootVariant = styleVariants({
  primary: {
    color: vars.color.primary600,
  },

  secondary: {
    color: vars.color.secondary600,
  },

  tertiary: {
    color: vars.color.neutral600,
  },

  info: {
    color: vars.color.info600,
  },

  success: {
    color: vars.color.success600,
  },

  warning: {
    color: vars.color.warning600,
  },

  danger: {
    color: vars.color.danger600,
  },

  light: {
    color: vars.color.white,
  },

  dark: {
    color: vars.color.neutral900,
  },

  default: {
    color: 'inherit',
  },
});
