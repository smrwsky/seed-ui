import { spacing, vars } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  borderLeft: `4px solid ${vars.color.secondary500}`,
  paddingLeft: spacing[3],
});
