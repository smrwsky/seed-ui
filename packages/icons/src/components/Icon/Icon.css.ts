import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  width: '1em',
  height: '1em',
  verticalAlign: 'middle',
});

export const variant = styleVariants({
  primary: {
    color: theme.color.primary500,
  },

  accent: {
    color: theme.color.accent500,
  },

  secondary: {
    color: theme.color.neutral500,
  },

  info: {
    color: theme.color.info500,
  },

  success: {
    color: theme.color.success500,
  },

  warning: {
    color: theme.color.warning500,
  },

  danger: {
    color: theme.color.danger500,
  },

  light: {
    color: theme.color.white,
  },

  dark: {
    color: theme.color.neutral900,
  },
});