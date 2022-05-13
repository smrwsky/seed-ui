import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  background: theme.color.neutral100,
});

export const rootDirection = styleVariants({
  horizontal: {
    width: '100%',
    height: '1px',
  },
  vertical: {
    width: '100%',
    height: '1px',
  },
});
