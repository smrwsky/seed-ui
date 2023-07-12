import Overline, { OverlineProps, OverlineVariant } from './Overline';

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

  args: {
    children: 'This is an overline',
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
