import { Flex } from '../Flex';
import { Text } from '../Text';

import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,

  args: {
    name: 'isAgreed',
    value: 'true',
  },
};

export function Basic(args: CheckboxProps) {
  return (
    <Flex>
      <Checkbox {...args} id="checkbox-basic" />
      <Text
        as="label"
        htmlFor="checkbox-basic"
        letterSpacing="widest"
        lineHeight="snug"
        ml={2}
      >
        I agree to the terms and conditions
      </Text>
    </Flex>
  );
}

export function Invalid(args: CheckboxProps) {
  return (
    <Flex>
      <Checkbox {...args} id="checkbox-invalid" invalid />
      <Text
        as="label"
        htmlFor="checkbox-invalid"
        letterSpacing="widest"
        lineHeight="snug"
        ml={2}
      >
        I agree to the terms and conditions
      </Text>
    </Flex>
  );
}

export function Disabled(args: CheckboxProps) {
  return (
    <Flex>
      <Checkbox
        {...args}
        disabled
        id="checkbox-disabled"
        value="Disabled value"
      />
      <Text
        as="label"
        htmlFor="checkbox-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        ml={2}
      >
        I agree to the terms and conditions
      </Text>
    </Flex>
  );
}
