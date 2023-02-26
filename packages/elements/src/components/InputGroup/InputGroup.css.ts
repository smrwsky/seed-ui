import { margin } from '@seed-ui/styles';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'block',
});

export const grid = style({
  display: 'grid',
  alignItems: 'center',
  margin: `${margin[-1]} ${margin[-0.5]} 0`,
});

export const gridDirection = styleVariants({
  row: {
    gridTemplate: `
      "label input" max-content
      "label message" max-content
      "label error" max-content / 1fr 2fr
    `,
  },
  column: {
    gridTemplate: `
      "label" max-content
      "input" max-content
      "message" max-content
      "error" max-content / 1fr
    `,
  },
});

globalStyle(`.${grid} > *`, {
  margin: `${margin[1]} ${margin[0.5]} 0`,
});
