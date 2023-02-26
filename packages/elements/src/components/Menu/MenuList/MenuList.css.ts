import { hideScrollbar, vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  listStyle: 'none',
});

export const rootType = styleVariants({
  horizontal: {
    display: 'flex',
    overflow: 'auto hidden',
    ...hideScrollbar(),
  },
  inline: {
    overflow: 'hidden auto',
  },
  vertical: {
    overflow: 'hidden auto',
  },
});

export const rootVariant = styleVariants({
  primary: {
    backgroundColor: vars.color.white,
  },
  secondary: {
    backgroundColor: vars.color.white,
  },
  dark: {
    backgroundColor: vars.color.secondary700,
  },
});
