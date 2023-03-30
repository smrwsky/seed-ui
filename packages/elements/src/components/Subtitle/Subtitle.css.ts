import { vars } from '@seed-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const rootPrimarySize = styleVariants({
  sm: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.subtitleSm.primary,
  },
  md: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.subtitleMd.primary,
  },
});

export const rootSecondarySize = styleVariants({
  sm: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.subtitleSm.secondary,
  },
  md: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.subtitleMd.secondary,
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
