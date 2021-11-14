import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { transitionTime } from '@seed-ui/styles';

export const iconStyle = style({
  display: 'inline-block',
  lineHeight: 0,
  verticalAlign: '-0.2em',
});

export const iconFlipStyle = style({
  transform: 'rotate(180deg)',
});

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

export const iconSpinStyle = style({
  animation: `${spin} ${transitionTime.lg} linear infinite`,
});

export const svgStyle = style({
  display: 'block',
  width: '1em',
  height: '1em',
});

globalStyle(`${svgStyle} > *`, {
  fill: 'currentcolor',
});
