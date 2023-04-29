import { capitalize } from 'lodash';

import Title, {
  TitleProps,
  TitleFontFamily,
  TitleSize,
  TitleVariant,
} from './Title';

const fontFamilies: TitleFontFamily[] = ['primary', 'secondary'];

const sizes: TitleSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const variants: TitleVariant[] = [
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
  title: 'Typography/Title',
  component: Title,

  args: {
    children: 'This is a title',
  },
};

export function Base(args: TitleProps): JSX.Element {
  return <Title {...args} />;
}

export function FontFamilies(args: TitleProps): JSX.Element {
  return (
    <>
      {fontFamilies.map((fontFamily, i) => (
        <Title {...args} fontFamily={fontFamily} key={i}>
          {capitalize(fontFamily)}
        </Title>
      ))}
    </>
  );
}

export function Sizes(args: TitleProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Title {...args} key={i} size={size}>
          A title with size {size}
        </Title>
      ))}
    </>
  );
}

export function Variants(args: TitleProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Title {...args} key={i} variant={variant}>
          This is {variant} title
        </Title>
      ))}
    </>
  );
}
