import { style } from '@vanilla-extract/css';
import { vars } from '@seed-ui/styles';

/**
 *  Root style
 */

export const root = style({
  position: 'relative',
  flex: 1,
  display: 'grid',
  gridTemplate: `
    "icon label action" max-content
    "icon description action" max-content / max-content 1fr max-content
  `,
  alignItems: 'center',
  alignContent: 'center',
  minWidth: '8rem',
  minHeight: '2.5rem',
  color: vars.color.neutral900,
  backgroundColor: vars.color.white,
  lineHeight: 1,
  textDecoration: 'none',
  transition: vars.transition.base,
  padding: '0.125rem 0.75rem',
  cursor: 'pointer',

  selectors: {
    '&[aria-selected="true"]': {
      backgroundColor: vars.color.secondary50,
    },

    '&[aria-disabled="true"]': {
      color: vars.color.neutral200,
      pointerEvents: 'none',
    },
  },
});

export const rootActive = style({
  backgroundColor: vars.color.dark100,

  selectors: {
    '&[aria-selected="true"]': {
      backgroundColor: vars.color.secondary100,
    },
  },
});
