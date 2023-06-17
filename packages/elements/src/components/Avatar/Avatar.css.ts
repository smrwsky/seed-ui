import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

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
  xs: {
    fontSize: '1.25rem', // 20px
  },
  sm: {
    fontSize: '1.5rem', // 24px
  },
  md: {
    fontSize: '2rem', // 32px
  },
  lg: {
    fontSize: '2.5rem', // 40px
  },
  xl: {
    fontSize: '3rem', // 48px
  },
});

export const image = style({
  fontFamily: vars.fontFamily.primary,
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
});

export const text = style({
  position: 'absolute',
  color: vars.color.white,
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.labelMd,
  fontSize: '.45em',
  lineHeight: 1,
  whiteSpace: 'nowrap',
});
