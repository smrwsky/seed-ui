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
    children: {
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus odio et mauris hendrerit maximus. Aenean eget tellus fringilla, bibendum orci nec, viverra lectus. Integer sed purus felis. Cras ac mollis massa, ac iaculis dolor. Nulla fringilla non nulla ut gravida. Sed condimentum malesuada luctus. In aliquet condimentum congue. Ut non enim eleifend, tincidunt augue sit amet, consequat justo. Cras ac ullamcorper mauris. Aliquam mauris ex, pulvinar vitae justo in, ornare faucibus purus.',
    },
  },
};

export function Base(args: QuoteProps): JSX.Element {
  return <Quote {...args} />;
}
