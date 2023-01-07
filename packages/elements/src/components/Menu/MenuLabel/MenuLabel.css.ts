import { style, styleVariants } from '@vanilla-extract/css';
import { spacing, vars } from '@seed-ui/styles';

export const root = style({
  gridArea: 'label',
  fontFamily: vars.fontFamily.secondary,
  textOverflow: 'ellipsis',
  margin: `0 ${spacing[1.5]}`,
});

export const rootSize = styleVariants({
  sm: {
    ...vars.typography.textSm.secondary,
  },
  md: {
    ...vars.typography.textMd.secondary,
  },
});

export const rootCollapsed = style({
  ...vars.typography.caption,
  whiteSpace: 'nowrap',
  textAlign: 'center',
  margin: 0,
});
