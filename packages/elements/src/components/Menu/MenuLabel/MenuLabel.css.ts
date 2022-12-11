import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  gridArea: 'label',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const rootSize = styleVariants({
  sm: {
    ...theme.typography.textSm.base,
  },
  md: {
    ...theme.typography.textMd.base,
  },
});

export const rootCollapsed = style({
  ...theme.typography.caption,
  whiteSpace: 'nowrap',
  textAlign: 'center',
});
