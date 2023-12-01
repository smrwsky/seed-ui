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
    <div>
      <Radio {...args} id="checkbox-basic" />
      <Text as="label" htmlFor="checkbox-basic" ml={2}>
        I agree to the terms and conditions
      </Text>
    </div>
  );
}

export function Invalid(args: RadioProps) {
  return (
    <div>
      <Radio {...args} id="checkbox-invalid" invalid />
      <Text as="label" htmlFor="checkbox-invalid" ml={2}>
        I agree to the terms and conditions
      </Text>
    </div>
  );
}

export function Disabled(args: RadioProps) {
  return (
    <div>
      <Radio {...args} disabled id="checkbox-disabled" value="Disabled value" />
      <Text as="label" htmlFor="checkbox-disabled" ml={2}>
        I agree to the terms and conditions
      </Text>
    </div>
  );
}
