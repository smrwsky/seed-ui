import {  colors, ThemeProvider ,Link } from '@seed-ui/elements';
import { theme } from './theme';
import { FC } from 'react';

import '@seed-ui/elements/css/styles.css';
import '@seed-ui/elements/css/icons.css';
import '@seed-ui/elements/css/elements.css';

const components = {
  a: Link,
};

export const parameters = {
  layout: 'centered',
  viewMode: 'docs',
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'Secondary',
        value: colors.turquose500,
      },
      {
        name: 'Tertiary',
        value: colors.grey50,
      },
      {
        name: 'White',
        value: colors.white,
      },
      {
        name: 'Black',
        value: colors.black,
      },
    ],
  },
  controls: {
    hideNoControlsWarning: true,
  },
  docs: { theme, components },
};

export const decorators = [
  (Story: FC) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
