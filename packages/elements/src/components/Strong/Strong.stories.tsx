import { atoms } from '@seed-ui/styles';

import { Text } from '../Text';

import Strong, { StrongProps, StrongVariant } from './Strong';
import docs from './Strong.docs.mdx';

const variants: StrongVariant[] = [
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
  title: 'Typography/Strong',
  component: Strong,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: 'This is strong element',
    },
  },
};

export function Base(args: StrongProps): JSX.Element {
  return (
    <Text>
      <Strong {...args} />
    </Text>
  );
}

export function Variants(args: StrongProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Text key={i}>
          <Strong {...args} variant={variant}>
            This is {variant} strong
          </Strong>
        </Text>
      ))}
    </>
  );
}

export function Bold(args: StrongProps): JSX.Element {
  return (
    <>
      <Text className={atoms({ mb: 1.5 })}>
        This is default <Strong {...args}>strong</Strong>.
      </Text>

      <Text>
        This is also{' '}
        <Strong {...args} bold={false}>
          strong
        </Strong>
        , but it&apos;s font-weight is inherit.
      </Text>
    </>
  );
}
