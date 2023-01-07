import { globalStyle } from '@vanilla-extract/css';

import { vars } from '../vars.css';

export const stub = null;

/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */

globalStyle(
  'html,' +
    'body,' +
    'p,' +
    'ol,' +
    'ul,' +
    'li,' +
    'dl,' +
    'dt,' +
    'dd,' +
    'blockquote,' +
    'figure,' +
    'fieldset,' +
    'legend,' +
    'textarea,' +
    'pre,' +
    'iframe,' +
    'hr,' +
    'h1,' +
    'h2,' +
    'h3,' +
    'h4,' +
    'h5,' +
    'h6',
  {
    margin: 0,
    padding: 0,
  },
);

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: '100%',
  fontWeight: 'normal',
});

globalStyle('button, input, select', {
  margin: 0,
});

globalStyle('html', {
  boxSizing: 'border-box',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'inherit',
});

globalStyle('img, video', {
  height: 'auto',
  maxWidth: '100%',
});

globalStyle('iframe', {
  border: 0,
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('td, th', {
  padding: 0,
});

globalStyle('body', {
  color: vars.color.neutral900,
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.textMd.secondary,

  fontSmooth: 'antialiased',
  textRendering: 'optimizeLegibility',
  backgroundColor: vars.color.white,
});
