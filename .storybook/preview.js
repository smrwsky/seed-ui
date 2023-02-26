import { color, GlobalStyle, ThemeProvider } from '@seed-ui/styles';
import {
  atoms,
  Link,
  ListItem,
  OList,
  Strong,
  Subtitle,
  Text,
  Title,
  UList,
} from '@seed-ui/elements';
import { theme } from './theme';

import 'boxicons/css/boxicons.min.css';

const components = {
  wrapper: ({ children, ...p }) => (
    <div {...p}>
      <ThemeProvider>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  ),
  h1: (p) => <Title {...p} as="h1" size="md" className={atoms({ mb: 3 })} />,
  h2: (p) => (
    <Title {...p} as="h2" size="xs" className={atoms({ mb: 4, mt: 12 })} />
  ),
  h3: (p) => <Subtitle {...p} as="h3" className={atoms({ mb: 3, mt: 6 })} />,
  h4: (p) => (
    <Subtitle {...p} as="h4" size="sm" className={atoms({ mb: 2, mt: 3 })} />
  ),
  h5: (p) => <Text {...p} as="h5" bold className={atoms({ mb: 1, mt: 3 })} />,
  h6: (p) => (
    <Text {...p} as="h6" bold size="sm" className={atoms({ mb: 1, mt: 3 })} />
  ),
  p: (p) => <Text {...p} className={atoms({ mb: 3 })} />,
  li: (p) => <ListItem {...p} />,
  strong: (p) => <Strong {...p} />,
  ul: (p) => <UList {...p} gutter={2} className={atoms({ mb: 3 })} />,
  ol: (p) => <OList {...p} gutter={2} className={atoms({ mb: 3 })} />,
  a: (p) => <Link {...p} />,
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

const withGlobalStyle = (Story) => (
  <ThemeProvider>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);

export const decorators = [withGlobalStyle];
