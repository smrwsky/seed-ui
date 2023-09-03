import { globalStyle, style, StyleRule } from '@vanilla-extract/css';

import { atoms } from './atoms.css';

const markerRule: StyleRule = {
  position: 'absolute',
  display: 'inline-block',
  width: '1em',
  textAlign: 'center',
  marginInlineStart: '-1.5em',
};

export const marker = style(markerRule);

export const listTypeDisc = style({});

export const listTypeDash = style({});

globalStyle(`${listTypeDisc} > li:before`, {
  content: '\\2022',
  ...markerRule,
});

globalStyle(`${listTypeDash} > li:before`, {
  content: '\\2014',
  ...markerRule,
});

export const textTruncate = atoms({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const textBreak = style({
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});
