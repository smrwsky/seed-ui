import { globalStyle } from '@vanilla-extract/css';

import { theme } from '../theme.css';

export const importMe = null;

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

globalStyle('ul', {
  listStyle: 'none',
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

/**
 *  1. Responsive base font size.
 *    Devises of size 1440px has initial font size 1rem.
 *    See: https://www.codementor.io/@ricardozea/100-responsive-typography-system-using-a-modular-scale-s5rhft58g
 */

globalStyle('body', {
  fontSize: 'calc(0.75rem + .35vw)' /* 1 */,
  fontFamily: theme.fontFamily.base,
  color: theme.color.neutral900,
  backgroundColor: theme.color.white,
  textRendering: 'optimizeLegibility',
  fontSmooth: 'antialiased',
});
