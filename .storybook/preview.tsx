import { Link, ThemeProvider } from '@seed-ui/elements';
import { colors, defaultTheme } from '@seed-ui/styles';
import { theme } from './theme';
import { FC } from 'react';

import '@seed-ui/styles/css/styles.min.css';
import '@seed-ui/elements/css/elements.min.css';

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
        name: 'Primary',
        value: colors.blue500,
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
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];
