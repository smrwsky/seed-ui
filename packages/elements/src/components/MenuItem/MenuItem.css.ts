import { style } from '@vanilla-extract/css';
import {
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

export const root = style({
  display: 'block',
  width: '100%',
  color: theme.color.neutral900,
  backgroundColor: theme.color.white,
  textAlign: 'start',
  transition: `all ${transitionTime.sm} ${transitionTimingFunction['in-out']}`,
  margin: 0,
  padding: '0.25rem 0.5rem',
  cursor: 'pointer',
  ...theme.typography.textMd.base,

  selectors: {
    '&[aria-selected="true"]': {
      backgroundColor: theme.color.primary50,
    },
    '&[aria-disabled="true"]': {
      color: theme.color.neutral200,
      backgroundColor: theme.color.white,
      pointerEvents: 'none',
    },
    '&[aria-invalid="true"]': {
      color: theme.color.danger500,
      backgroundColor: theme.color.white,
    },
  },
});

export const rootActive = style({
  backgroundColor: theme.color.neutral50,

  selectors: {
    '&[aria-selected="true"]': {
      backgroundColor: theme.color.primary100,
    },
  },
});
