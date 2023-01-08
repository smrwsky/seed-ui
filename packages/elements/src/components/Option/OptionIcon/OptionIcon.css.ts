import { globalStyle, style } from '@vanilla-extract/css';
import { spacing, vars } from '@seed-ui/styles';

export const root = style({
  gridArea: 'icon',
  display: 'inline-block',
  color: vars.color.neutral500,
  margin: `0 ${spacing[1.5]}`,
});

globalStyle(`[role="option"][aria-disabled="true"] > .${root},`, {
  color: 'currentColor',
});
