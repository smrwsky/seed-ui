import { Flex } from '../Flex';
import { Text } from '../Text';

import Radio, { RadioProps } from './Radio';

export default {
  title: 'Inputs/Radio',
  component: Radio,

  args: {
    name: 'isAgreed',
    value: 'true',
  },
};

export function Basic(args: RadioProps) {
  return (
    <Flex>
      <Radio {...args} id="checkbox-basic" />
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

export function Invalid(args: RadioProps) {
  return (
    <Flex>
      <Radio {...args} id="checkbox-invalid" invalid />
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

export function Disabled(args: RadioProps) {
  return (
    <Flex>
      <Radio {...args} disabled id="checkbox-disabled" value="Disabled value" />
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
