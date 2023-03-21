import { StyleRule } from '@vanilla-extract/css';

// eslint-disable-next-line import/prefer-default-export
export function hideScrollbar(): StyleRule {
  return {
    scrollbarWidth: 'none',

    selectors: {
      '&::-webkit-scrollbar': {
        height: '0 !important',
        width: '0 !important',
      },
    },
  };
}
