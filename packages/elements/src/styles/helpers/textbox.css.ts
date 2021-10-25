import { style } from '@vanilla-extract/css';
import {
  theme,
  transitionTime,
  transitionTimingFunction,
} from '@seed-ui/styles';

export const textboxStyle = style({
  background: 'transparent',
  border: 0,
  borderRadius: 0,
  flex: 1,
  fontFamily: theme.fontFamily.base,
  maxWidth: '100%',
  padding: 0,
  width: '100%',
  ...theme.typography.textMd.base,

  selectors: {
    '&:focus': {
      outline: 0,
    },

    '&:disabled': {
      color: theme.color.neutral200,
      cursor: 'not-allowed',
      opacity: 1,
      WebkitTextFillColor: theme.color.neutral200,
    },

    '&::placeholder': {
      color: theme.color.neutral100,
      opacity: 1,
      transition: `opacity ${transitionTime.sm} ${transitionTimingFunction.out}`,
    },

    '&::placeholder:focus': {
      opacity: 0,
    },
  },
});
