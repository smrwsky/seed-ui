import { vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  background: vars.color.neutral100,
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
