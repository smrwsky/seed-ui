import React from 'react';
import { capitalize } from 'lodash';

import Subtitle, {
  SubtitleFontFamily,
  SubtitleProps,
  SubtitleSize,
  SubtitleVariant,
} from './Subtitle';
import docs from './Subtitle.docs.mdx';

const fontFamilies: SubtitleFontFamily[] = ['primary', 'secondary'];

const sizes: SubtitleSize[] = ['sm', 'md'];

const variants: SubtitleVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'alt',
  'default',
];

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: 'This is a title',
    },
  },
};

export function Base(args: SubtitleProps): JSX.Element {
  return <Subtitle {...args} />;
}

export function FontFamilies(args: SubtitleProps): JSX.Element {
  return (
    <>
      {fontFamilies.map((fontFamily, i) => (
        <Subtitle {...args} fontFamily={fontFamily} key={i}>
          {capitalize(fontFamily)}
        </Subtitle>
      ))}
    </>
  );
}

export function Sizes(args: SubtitleProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Subtitle {...args} key={i} size={size}>
          A title with size {size}
        </Subtitle>
      ))}
    </>
  );
}

export function Variants(args: SubtitleProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Subtitle {...args} key={i} variant={variant}>
          This is {variant} title
        </Subtitle>
      ))}
    </>
  );
}
