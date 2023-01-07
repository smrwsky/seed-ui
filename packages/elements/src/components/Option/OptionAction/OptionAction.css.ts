import { style } from '@vanilla-extract/css';
import { spacing } from '@seed-ui/styles';

export const root = style({
  gridArea: 'action',
  lineHeight: 1,
  overflow: 'hidden',
  margin: `0 ${spacing[1.5]}`,
});
