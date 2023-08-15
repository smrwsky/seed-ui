import { SPACING, vars } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  gridArea: 'description',
  color: vars.color.neutral500,
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.caption,
  textOverflow: 'ellipsis',
  margin: `0 ${SPACING[1.5]}`,
});
