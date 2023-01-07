import { style } from '@vanilla-extract/css';
import { spacing, vars } from '@seed-ui/styles';

export const root = style({
  gridArea: 'description',
  color: vars.color.neutral500,
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.caption,
  textOverflow: 'ellipsis',
  margin: `0 ${spacing[1.5]}`,
});
