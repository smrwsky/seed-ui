import { style } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  fontFamily: theme.fontFamily.base,
  ...theme.typography.caption,
});