import { SPACING, vars } from '@seed-ui/styles';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  gridArea: 'icon',
  display: 'inline-block',
  color: vars.color.neutral500,
  margin: `0 ${SPACING[1.5]}`,
});

globalStyle(`[role="option"][aria-disabled="true"] > .${root},`, {
  color: 'currentColor',
});