import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  gridArea: 'description',
  ...theme.typography.caption,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  paddingTop: '.125rem',
});

export const rootVariant = styleVariants({
  primary: {
    color: theme.color.neutral500,
  },
  secondary: {
    color: theme.color.neutral500,
  },
  dark: {
    color: 'inherit',
  },
  light: {
    color: 'inherit',
  },
});
