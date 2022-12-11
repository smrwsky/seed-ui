import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const root = style({
  display: 'inline-block',
  gridArea: 'icon',
  fontSize: '1rem',
  margin: '0 1rem 0 0',
});

export const rootSize = styleVariants({
  sm: {
    margin: '0 .75rem 0 0',
  },
  md: {
    margin: '0 1rem 0 0',
  },
});

export const rootVariant = styleVariants({
  primary: {
    color: theme.color.neutral500,
  },
  secondary: {
    color: theme.color.neutral500,
  },
  light: {
    color: theme.color.neutral500,
  },
  dark: {
    color: theme.color.white,
  },
});

export const rootCollapsed = style({
  fontSize: '1.5rem',
  margin: '0 0 .125rem',
});

globalStyle(
  `[role="menuitem"][aria-selected="true"] > ${root},` +
    `[role="menuitem"][aria-disabled="true"] > ${root},` +
    `[role="menuitem"][aria-invalid="true"] > ${root}`,
  {
    color: 'currentColor',
  },
);
