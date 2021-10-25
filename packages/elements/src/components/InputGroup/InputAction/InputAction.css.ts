import { style } from '@vanilla-extract/css';
import { margin } from '@seed-ui/styles';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: '100%',
  marginLeft: margin[0.5],
});
