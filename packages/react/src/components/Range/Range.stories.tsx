import { Text } from '../Text';

import Range, { RangeProps } from './Range';

export default {
  title: 'Inputs/Range',
  component: Range,

  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
  },
};

export function Basic(args: RangeProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="range-basic"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Zoom
      </Text>
      <Range {...args} id="range-basic" />
    </>
  );
}

export function Invalid(args: RangeProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="range-invalid"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Zoom
      </Text>
      <Range {...args} id="range-invalid" invalid />
    </>
  );
}

export function Disabled(args: RangeProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="range-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Zoom
      </Text>
      <Range {...args} disabled id="range-disabled" />
    </>
  );
}
