import { style } from '@vanilla-extract/css';
import { theme } from '@seed-ui/styles';

export const menu = style({
  position: 'relative',
  selectors: {
    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      background: theme.color.dark50,
    },
  },
});
