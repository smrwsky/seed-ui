import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  display: 'flex',
  listStyle: 'none',
});

export const rootType = styleVariants({
  horizontal: {
    flexDirection: 'row',
  },
  inline: {
    flexDirection: 'column',
  },
  popup: {
    flexDirection: 'column',
  },
  vertical: {
    flexDirection: 'column',
  },
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
