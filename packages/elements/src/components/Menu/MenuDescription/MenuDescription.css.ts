import { SPACING, vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  gridArea: 'description',
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.caption,
  textOverflow: 'ellipsis',
  margin: `0 ${SPACING[1.5]}`,
});

export const rootVariant = styleVariants({
  primary: {
    color: vars.color.neutral500,
  },
  secondary: {
    color: vars.color.neutral500,
  },
  dark: {
    color: 'inherit',
  },
});
