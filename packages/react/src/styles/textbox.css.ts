import { vars } from '@seed-ui/styles';
import { style } from '@vanilla-extract/css';

export const textboxStyle = style({
  background: 'transparent',
  border: 0,
  borderRadius: 0,
  flex: 1,
  fontFamily: vars.fontFamily.primary,
  maxWidth: '100%',
  padding: '0 0.25rem',
  width: '100%',
  outline: 'none',
  ...vars.typography.textMd.primary,

  selectors: {
    '&:focus': {
      outline: 0,
    },

    '&:disabled': {
      color: vars.color.neutral200,
      cursor: 'not-allowed',
      opacity: 1,
      WebkitTextFillColor: vars.color.neutral200,
    },

    '&::placeholder': {
      color: vars.color.neutral100,
      opacity: 1,
    },
  },
});