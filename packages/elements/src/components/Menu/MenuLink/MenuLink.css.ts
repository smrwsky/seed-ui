import { SPACING, vars } from '@seed-ui/styles';
import {
  createVar,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css';

export const rootIndentVar = createVar('menu-title-indent');

export const root = style({
  position: 'relative',
  flex: 1,
  display: 'grid',
  gridTemplateAreas: `
      "icon label action"
      "icon description action"
    `,
  gridTemplateRows: 'max-content max-content',
  alignItems: 'center',
  alignContent: 'center',
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.textMd.primary,
  textDecoration: 'none',
  outline: 0,
  transition: vars.transition.base,
  cursor: 'pointer',

  selectors: {
    '&:before': {
      content: '',
      height: '100%',
      width: rootIndentVar,
      lineHeight: 0,
    },

    '&[aria-disabled="true"]': {
      color: vars.color.neutral200,
      pointerEvents: 'none',
    },
  },
});

export const rootType = styleVariants({
  horizontal: {
    gridTemplateColumns: 'max-content max-content max-content',
    justifyContent: 'center',
    minWidth: 'auto !important',
    paddingLeft: '1rem',
    paddingRight: '1rem',

    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: SPACING[0.5],
        width: '100%',
        borderRadius: vars.borderRadius.full,
        background: 'transparent',
        transition: vars.transition.base,
      },
    },
  },

  vertical: {
    gridTemplateColumns: 'max-content 1fr max-content',

    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: SPACING[0.5],
        borderRadius: vars.borderRadius.full,
        background: 'transparent',
        transition: vars.transition.base,
      },
    },
  },

  inline: {
    gridTemplateColumns: 'max-content 1fr max-content',

    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: SPACING[0.5],
        borderRadius: vars.borderRadius.full,
        background: 'transparent',
        transition: vars.transition.base,
      },
    },
  },
});

export const rootSize = styleVariants({
  sm: {
    minWidth: '7rem',
    minHeight: '2.25rem',
    padding: `${SPACING[0.5]} ${SPACING[1.5]}`,
  },

  md: {
    minWidth: '8rem',
    minHeight: '2.625rem',
    padding: `${SPACING[1]} ${SPACING[2]}`,
  },

  lg: {
    minWidth: '9rem',
    minHeight: '3rem',
    padding: `${SPACING[1]} ${SPACING[2.5]}`,
  },
});

export const rootVariant = styleVariants({
  primary: {
    color: vars.color.neutral900,
  },

  secondary: {
    color: vars.color.neutral900,
  },

  dark: {
    color: vars.color.white,
  },
});

export const rootCollapsed = style({
  gridTemplateAreas: `
           "icon"
           "label"
        `,
  gridTemplateColumns: 'auto',
  minWidth: 0,
  minHeight: '3rem',
  justifyItems: 'center',
  ...vars.typography.caption,
  padding: `${SPACING[1]} ${SPACING[2]}`,

  selectors: {
    '&:after': {
      color: 'transparent',
    },
  },
});

export const rootSelected = style({
  ...vars.typography.bold,
});

export const rootActive = style({});

globalStyle(`.${root}.${rootVariant.primary}.${rootSelected}:after`, {
  background: vars.color.primary500,
});

globalStyle(`${root}.${rootVariant.secondary}.${rootSelected}`, {
  background: vars.color.dark50,
});

globalStyle(`${root}.${rootVariant.dark}.${rootSelected}`, {
  background: vars.color.light200,
});

globalStyle(`${root}.${rootVariant.primary}.${rootActive}`, {
  background: vars.color.dark100,
});

globalStyle(`${root}.${rootVariant.secondary}.${rootActive}`, {
  background: vars.color.dark100,
});

globalStyle(`${root}.${rootVariant.dark}.${rootActive}`, {
  background: vars.color.light300,
});

globalStyle(`${root}.${rootVariant.primary}.${rootCollapsed}`, {
  color: vars.color.neutral500,
});

globalStyle(`${root}.${rootVariant.secondary}.${rootCollapsed}`, {
  color: vars.color.neutral500,
});

globalStyle(`${root}.${rootVariant.primary}.${rootCollapsed}.${rootSelected}`, {
  color: vars.color.primary500,
});

globalStyle(
  `${root}.${rootVariant.primary}.${rootCollapsed}.${rootSelected}:after`,
  {
    background: 'transparent',
  },
);

globalStyle(`${root}.${rootVariant.primary}.${rootCollapsed}.${rootSelected}`, {
  color: vars.color.primary500,
});

globalStyle(
  `.${root}.${rootCollapsed} > i, .${root}[aria-disabled="true"] > i`,
  {
    color: 'currentColor',
  },
);
