import { SPACING } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  gridArea: 'label',
  textOverflow: 'ellipsis',
  margin: `0 ${SPACING[1.5]}`,
});
