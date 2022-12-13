import { StyleRule } from '@vanilla-extract/css';

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

export function marker(): StyleRule {
  return {
    position: 'absolute',
    display: 'inline-block',
    textAlign: 'center',
    width: '1em',
    marginInlineStart: '-1.5em',
  };
}
