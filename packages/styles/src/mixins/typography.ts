import { StyleRule } from '@vanilla-extract/css';

// eslint-disable-next-line import/prefer-default-export
export function marker(): StyleRule {
  return {
    position: 'absolute',
    display: 'inline-block',
    textAlign: 'center',
    width: '1em',
    marginInlineStart: '-1.5em',
  };
}

export function textTruncate(): StyleRule {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
}

export function textBreak(): StyleRule {
  return {
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  };
}
