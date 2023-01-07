import { style, styleVariants } from '@vanilla-extract/css';
import { spacing, vars } from '@seed-ui/styles';

export const root = style({
  gridArea: 'description',
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.caption,
  textOverflow: 'ellipsis',
  margin: `0 ${spacing[1.5]}`,
});

export const rootVariant = styleVariants({
  primary: {
    color: vars.color.neutral500,
  },
  secondary: {
    color: vars.color.neutral500,
  },
  alt: {
    color: 'inherit',
  },
});
