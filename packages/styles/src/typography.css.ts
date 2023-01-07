import { style } from '@vanilla-extract/css';

import { textBreak, textTruncate } from './mixins';

export const textTruncateStyle = style({
  ...textTruncate(),
});

export const textBreakStyle = style({
  ...textBreak(),
});
