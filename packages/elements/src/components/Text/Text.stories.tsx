import { capitalize } from 'lodash';

import { StrongProps } from '../Strong';

import Text, { TextFontFamily, TextProps, TextSize, TextVariant } from './Text';

const fontFamilies: TextFontFamily[] = ['primary', 'secondary'];

const sizes: TextSize[] = ['sm', 'md'];

const variants: TextVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
];

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'This is a text',
  },
};

export function Base(args: TextProps): JSX.Element {
  return <Text {...args} />;
}

export function FontFamilies(args: TextProps): JSX.Element {
  return (
    <>
      {fontFamilies.map((fontFamily, i) => (
        <Text {...args} fontFamily={fontFamily} key={i}>
          {capitalize(fontFamily)}
        </Text>
      ))}
    </>
  );
}

export function Sizes(args: TextProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Text {...args} key={i} size={size}>
          A text with size {size}
        </Text>
      ))}
    </>
  );
}

export function Variants(args: TextProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Text {...args} key={i} variant={variant}>
          This is {variant} text
        </Text>
      ))}
    </>
  );
}

export function Bold(args: StrongProps): JSX.Element {
  return (
    <Text {...args} bold>
      This is a bold text
    </Text>
  );
}
