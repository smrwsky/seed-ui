import { style, styleVariants } from '@vanilla-extract/css';
import { spacing, vars } from '@seed-ui/styles';

export const root = style({
  gridArea: 'icon',
  display: 'inline-block',
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
    color: vars.color.white,
  },
});

export const rootCollapsed = style({
  fontSize: '1.5rem',
  margin: `0 0 ${spacing[0.5]}`,
});
