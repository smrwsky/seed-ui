import React from 'react';
import { addParameters } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import { withThemes } from 'storybook-addon-themes/react';
import { color, GlobalStyle, ThemeProvider } from '@seed-ui/styles';
import { theme, components, sortStories } from './utils';
import 'boxicons/css/boxicons.min.css';

function withGlobalStyle(Story) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
}

const SORT_ORDER = {
  Overview: {
    'Design tokens': {},
    'Icons': {},
  },
};

export const parameters = {
  layout: 'centered',
  options: {
    storySort: sortStories(SORT_ORDER),
  },
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
  docs: { theme, components },
};

// Run only client tasks in prod builds of Storybook, SSR tasks are failing.
// See https://github.com/atlassian-labs/storybook-addon-performance/pull/40
addParameters({
  performance: {
    allowedGroups:
      process.env.NODE_ENV === 'production' ? ['client'] : ['server', 'client'],
  },
});

export const decorators = [withGlobalStyle, withThemes, withPerformance];
