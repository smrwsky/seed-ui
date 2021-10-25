import React from 'react';
import { addParameters } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import { withThemes } from 'storybook-addon-themes/react';
import { theme as vars } from '@seed-ui/styles'
import { theme, components, sortStories } from './utils';

const SORT_ORDER = {
  'Overview': {
    'Design tokens': {},
    'Icons': {},
  },
};

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: sortStories(SORT_ORDER),
  },
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'Primary',
        value: vars.color.primary500,
      },
      {
        name: 'Secondary',
        value: vars.color.neutral50,
      },
      {
        name: 'White',
        value: vars.color.white,
      },
      {
        name: 'Black',
        value: vars.color.black,
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

export const decorators = [withThemes, withPerformance];
