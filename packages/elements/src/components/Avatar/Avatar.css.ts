import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  width: '1em',
  height: '1em',
  borderRadius: vars.borderRadius.md,
});

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
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

export const image = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.caption,
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const icon = style({
  position: 'absolute',
  color: vars.color.white,
  fontSize: '.625em',
  lineHeight: 1,
});

export const text = style({
  position: 'absolute',
  color: vars.color.white,
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.labelMd,
  fontSize: '.45em',
  lineHeight: 1,
  whiteSpace: 'nowrap',
});
