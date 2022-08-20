import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const rootDirection = styleVariants({
  horizontal: {
    display: 'flex',
  },
  vertical: {},
});

export const rootVariant = styleVariants({
  primary: {
    backgroundColor: theme.color.white,
  },
  secondary: {
    backgroundColor: theme.color.white,
  },
  light: {
    backgroundColor: theme.color.white,
  },
  dark: {
    backgroundColor: theme.color.primary700,
  },
});
