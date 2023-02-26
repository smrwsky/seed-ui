import { spacing, vars } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

/**
 *  Root style
 */

export const root = style({
  position: 'relative',
  display: 'grid',
  gridTemplate: `
    "icon label action" max-content
    "icon description action" max-content / max-content 1fr max-content
  `,
  alignItems: 'center',
  alignContent: 'center',
  minWidth: '7rem',
  minHeight: '2.25rem',
  color: vars.color.neutral900,
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.textMd.secondary,
  background: vars.color.white,
  textDecoration: 'none',
  transition: vars.transition.base,
  padding: `${spacing[0.5]} ${spacing[1.5]}`,
  cursor: 'pointer',

  selectors: {
    '&[aria-disabled="true"]': {
      color: vars.color.neutral200,
      pointerEvents: 'none',
    },
  },
});

export const rootSelected = style({
  ...vars.typography.bold,
  background: vars.color.dark50,
});

export const rootActive = style({
  background: vars.color.dark100,
});

export const rootInvalid = style({
  ...vars.typography.textMd.secondary,
  color: vars.color.danger500,
});
