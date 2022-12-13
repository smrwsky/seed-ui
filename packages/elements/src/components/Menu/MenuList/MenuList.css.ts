import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

import { hideScrollbar } from '../../../styles';

export const root = style({
  display: 'flex',
  listStyle: 'none',
});

export const rootType = styleVariants({
  horizontal: {
    flexDirection: 'row',
    overflow: 'auto hidden',
    ...hideScrollbar(),
  },
  inline: {
    flexDirection: 'column',
    overflow: 'hidden auto',
  },
  vertical: {
    flexDirection: 'column',
    overflow: 'hidden auto',
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
