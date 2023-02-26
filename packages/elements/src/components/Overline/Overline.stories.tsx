import Overline, { OverlineProps, OverlineVariant } from './Overline';
import docs from './Overline.docs.mdx';

const variants: OverlineVariant[] = [
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
  title: 'Typography/Overline',
  component: Overline,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: 'This is an overline',
    },
  },
};

export function Base(args: OverlineProps): JSX.Element {
  return <Overline {...args} />;
}

export function Variants(args: OverlineProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Overline {...args} key={i} variant={variant}>
          This is {variant} overline
        </Overline>
      ))}
    </>
  );
}
