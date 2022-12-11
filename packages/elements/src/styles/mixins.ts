import { StyleRule } from '@vanilla-extract/css';

// eslint-disable-next-line import/prefer-default-export
export const marker: () => StyleRule = () => ({
  position: 'absolute',
  display: 'inline-block',
  textAlign: 'center',
  width: '1em',
  marginInlineStart: '-1.5em',
});
