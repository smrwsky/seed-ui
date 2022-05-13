import React from 'react';

import { create } from '@storybook/theming';
import {
  ListItem,
  OList,
  Strong,
  Subtitle,
  Text,
  Title,
  UList,
  Link,
} from '@seed-ui/elements';
import { color } from '@seed-ui/styles';

export const theme = create({
  base: 'light',
  brandTitle: 'Seed UI',
  brandImage: '/images/logo.png',
  colorPrimary: color.fuchsia500,
  colorSecondary: color.turquose500,
});

export const components = {
  h1: (p) => <Title {...p} as="h1" size="lg" mb="3" />,
  h2: (p) => <Title {...p} as="h2" size="md" mb="2" mt="12" />,
  h3: (p) => <Title {...p} as="h3" size="sm" mb="1.5" mt="6" />,
  h4: (p) => <Title {...p} as="h4" size="xs" mb="1" mt="4" />,
  h5: (p) => <Subtitle {...p} as="h5" mb="0.5" mt="4" />,
  h6: (p) => <Subtitle {...p} as="h6" size="sm" mb="0.5" mt="3" />,
  p: (p) => <Text {...p} mb="3" size="sm" />,
  li: (p) => <ListItem {...p} mb="3" />,
  strong: (p) => <Strong {...p} />,
  ul: (p) => <UList {...p} gutter={2} size="sm" mb="3" />,
  ol: (p) => <OList {...p} gutter={2} size="sm" mb="3" />,
  a: (p) => <Link {...p} />,
};
