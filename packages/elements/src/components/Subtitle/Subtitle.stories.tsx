import { capitalize } from 'lodash';

import Subtitle, {
  SubtitleFontFamily,
  SubtitleProps,
  SubtitleSize,
  SubtitleVariant,
} from './Subtitle';

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
  'light',
  'dark',
];

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,

  args: {
    children: 'This is a subtitle',
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
