import { style, styleVariants } from '@vanilla-extract/css';
import { borderRadius, theme } from '@seed-ui/styles';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  width: '1em',
  height: '1em',
  verticalAlign: '-0.125em',
});

export const rootShape = styleVariants({
  circle: {
    borderRadius: borderRadius.max,
  },
  square: {},
});

export const rootSize = styleVariants({
  xs: {
    fontSize: '1rem',
  },
  sm: {
    fontSize: '1.5rem',
  },
  md: {
    fontSize: '2rem',
  },
  lg: {
    fontSize: '3rem',
  },
  xl: {
    fontSize: '4rem',
  },
});

export const image = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const icon = style({
  position: 'absolute',
  color: theme.color.white,
  fontSize: '.625em',
  lineHeight: 1,
});

export const text = style({
  position: 'absolute',
  color: theme.color.white,
  ...theme.typography.labelMd,
  fontSize: '.45em',
  whiteSpace: 'nowrap',
});
