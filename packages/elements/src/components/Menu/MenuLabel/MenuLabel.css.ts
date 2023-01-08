import { style } from '@vanilla-extract/css';
import { spacing } from '@seed-ui/styles';

export const root = style({
  gridArea: 'label',
  textOverflow: 'ellipsis',
  margin: `0 ${spacing[1.5]}`,
});

export const rootCollapsed = style({
  whiteSpace: 'nowrap',
  textAlign: 'center',
  margin: 0,
});
