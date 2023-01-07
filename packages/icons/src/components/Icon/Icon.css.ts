import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

export const root = style({
  width: '1em',
  height: '1em',
});

export const rootSize = styleVariants({
  xs: {
    fontSize: '0.75rem',
  },
  sm: {
    fontSize: '1rem',
  },
  md: {
    fontSize: '1.5rem',
  },
  lg: {
    fontSize: '2rem',
  },
  xl: {
    fontSize: '3rem',
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

  alt: {
    color: vars.color.white,
  },

  default: {
    color: 'inherit',
  },
});
