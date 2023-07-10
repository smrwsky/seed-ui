import { Box, Flex } from '@seed-ui/elements';
import { atoms } from '@seed-ui/styles';

import TextInput, { TextInputProps, TextInputSize } from './TextInput';

const sizes: TextInputSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/TextInput',
  component: TextInput,

  args: {
    defaultValue: 'Bob',
    placeholder: 'First Name',
  },
};

export function Base(args: TextInputProps): JSX.Element {
  return <TextInput {...args} />;
}

export function Invalid(args: TextInputProps): JSX.Element {
  return <TextInput {...args} invalid />;
}

export function Disabled(args: TextInputProps): JSX.Element {
  return <TextInput {...args} disabled value="Disabled value" />;
}

export function ReadOnly(args: TextInputProps): JSX.Element {
  return <TextInput {...args} readOnly value="Readonly value" />;
}

export function Sizes(args: TextInputProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <TextInput {...args} className={atoms({ mt: i && 4 })} size={size} />
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: TextInputProps): JSX.Element {
  return <TextInput {...args} rounded />;
}
