import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

export const root = style({
  width: '1em',
  height: '1em',
  verticalAlign: 'middle',
});

export const rootSize = styleVariants({
  'xs': {
    fontSize: '0.875rem', // 14px
  },
  'sm': {
    fontSize: '1.125rem', // 18px
  },
  'md': {
    fontSize: '1.375rem', // 22px
  },
  'lg': {
    fontSize: '1.625rem', // 26px
  },
  'xl': {
    fontSize: '1.875rem', // 30px
  },
  '2xl': {
    fontSize: '2.25rem', // 36px
  },
  '3xl': {
    fontSize: '2.625rem', // 42px
  },
  '4xl': {
    fontSize: '3rem', // 48px
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
