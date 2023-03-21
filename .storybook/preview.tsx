import { color, ThemeProvider } from '@seed-ui/styles';
import { Link } from '@seed-ui/elements';
import { theme } from './theme';
import { FC } from 'react';

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
        value: color.turquose500,
      },
      {
        name: 'Tertiary',
        value: color.grey50,
      },
      {
        name: 'White',
        value: color.white,
      },
      {
        name: 'Black',
        value: color.black,
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
