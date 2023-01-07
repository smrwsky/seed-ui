import { style } from '@vanilla-extract/css';
import { spacing, vars } from '@seed-ui/styles';

export const root = style({
  gridArea: 'label',
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.textSm,
  textOverflow: 'ellipsis',
  margin: `0 ${spacing[1.5]}`,
});
