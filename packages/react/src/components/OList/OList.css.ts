import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  paddingInlineStart: '1.5em',
});

export const rootPrimarySize = styleVariants({
  sm: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.textSm.primary,
  },
  md: {
    fontFamily: vars.fontFamily.primary,
    ...vars.typography.textMd.primary,
  },
});

export const rootSecondarySize = styleVariants({
  sm: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.textSm.secondary,
  },
  md: {
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.textMd.secondary,
  },
});

export const rootVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
  },

  secondary: {
    color: vars.color.secondary500,
  },

  tertiary: {
    color: vars.color.neutral500,
  },

  info: {
    color: vars.color.info500,
  },

  success: {
    color: vars.color.success500,
  },

  warning: {
    color: vars.color.warning500,
  },

  danger: {
    color: vars.color.danger500,
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

export const rootBold = style({
  fontWeight: `${vars.typography.bold.fontWeight} !important`,
});
