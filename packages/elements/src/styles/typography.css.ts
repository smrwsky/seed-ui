import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

import { marker } from './mixins';

export const textNowrapStyle = style({
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const textSerifSizeStyle = styleVariants({
  md: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.textMd.serif,
  },
  sm: {
    fontFamily: theme.fontFamily.serif,
    ...theme.typography.textSm.serif,
  },
});

export const textSizeStyle = styleVariants({
  md: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.textMd.base,
  },
  sm: {
    fontFamily: theme.fontFamily.base,
    ...theme.typography.textSm.base,
  },
});

export const textBoldStyle = style({
  ...theme.typography.bold,
});

export const textVariantStyle = styleVariants({
  primary: {
    color: theme.color.primary500,
  },

  accent: {
    color: theme.color.accent500,
  },

  secondary: {
    color: theme.color.neutral500,
  },

  info: {
    color: theme.color.info500,
  },

  success: {
    color: theme.color.success500,
  },

  warning: {
    color: theme.color.warning500,
  },

  danger: {
    color: theme.color.danger500,
  },

  light: {
    color: theme.color.white,
  },

  dark: {
    color: theme.color.neutral900,
  },
});

export const oListStyle = style({
  paddingInlineStart: '1.5em',
});

export const uListStyle = style({
  listStyle: 'none',
  paddingInlineStart: '1.5em',
});

export const uListTypeStyle = styleVariants({
  disc: {},
  dash: {},
  none: {},
});

export const listItemStyle = style({
  selectors: {
    '&:not(:first-of-type)': {
      marginTop: '.5em',
    },
  },
});

globalStyle(
  `.${uListTypeStyle.dash} .${listItemStyle}:before, .${uListTypeStyle.disc} .${listItemStyle}:before`,
  marker(),
);

globalStyle(`.${uListTypeStyle.dash} .${listItemStyle}:before`, {
  content: '\\2014',
});

globalStyle(`.${uListTypeStyle.disc} .${listItemStyle}:before`, {
  content: '\\2022',
});
