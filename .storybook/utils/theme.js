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
  atoms, color, GlobalStyle, ThemeProvider
} from '@seed-ui/elements';

export const theme = create({
  base: 'light',
  brandTitle: 'Seed UI',
  brandImage: '/images/logo.png',
  colorPrimary: color.fuchsia500,
  colorSecondary: color.turquose500,
});

export const components = {
  wrapper: ({ children, ...p }) => (
    <div {...p}>
      <ThemeProvider>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  ),
  h1: (p) => <Title {...p} as="h1" size="lg" className={atoms({ mb: 6 })} />,
  h2: (p) => (
    <Title {...p} as="h2" size="md" className={atoms({ mb: 4, mt: 24 })} />
  ),
  h3: (p) => (
    <Title {...p} as="h3" size="sm" className={atoms({ mb: 3, mt: 12 })} />
  ),
  h4: (p) => (
    <Title {...p} as="h4" size="xs" className={atoms({ mb: 2, mt: 6 })} />
  ),
  h5: (p) => <Subtitle {...p} as="h5" className={atoms({ mb: 1, mt: 6 })} />,
  h6: (p) => (
    <Subtitle {...p} as="h6" size="sm" className={atoms({ mb: 1, mt: 6 })} />
  ),
  p: (p) => <Text {...p} className={atoms({ mb: 6 })} />,
  li: (p) => <ListItem {...p} className={atoms({ mb: 6 })} />,
  strong: (p) => <Strong {...p} />,
  ul: (p) => <UList {...p} gutter={2} size="sm" className={atoms({ mb: 6 })} />,
  ol: (p) => <OList {...p} gutter={2} size="sm" className={atoms({ mb: 6 })} />,
  a: (p) => <Link {...p} />,
};
