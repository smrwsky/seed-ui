import { style } from '@vanilla-extract/css';
import { spacing, theme } from '@seed-ui/styles';

export const root = style({
  borderLeft: `4px solid ${theme.color.primary500}`,
  paddingLeft: spacing[3],
});
