import React from 'react';

import Quote, { QuoteProps } from './Quote';
import docs from './Quote.docs.mdx';

export default {
  title: 'Typography/Quote',
  component: Quote,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'as': {
      table: {
        type: {
          summary: 'ElementType',
        },
        defaultValue: { summary: 'div' },
      },
    },
    'm': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['m']",
        },
      },
    },
    'mb': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mb']",
        },
      },
    },
    'ml': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['ml']",
        },
      },
    },
    'mr': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mr']",
        },
      },
    },
    'mt': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mt']",
        },
      },
    },
    'mx': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mx']",
        },
      },
    },
    'my': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['my']",
        },
      },
    },
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      control: 'text',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus odio et mauris hendrerit maximus. Aenean eget tellus fringilla, bibendum orci nec, viverra lectus. Integer sed purus felis. Cras ac mollis massa, ac iaculis dolor. Nulla fringilla non nulla ut gravida. Sed condimentum malesuada luctus. In aliquet condimentum congue. Ut non enim eleifend, tincidunt augue sit amet, consequat justo. Cras ac ullamcorper mauris. Aliquam mauris ex, pulvinar vitae justo in, ornare faucibus purus.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: QuoteProps): JSX.Element {
  return <Quote {...args} />;
}
