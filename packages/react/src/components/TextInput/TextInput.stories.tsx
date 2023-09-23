import { Box, Flex } from '@seed-ui/react';

import { Text } from '../Text';

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

export function Basic(args: TextInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="text-input-basic"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        First Name
      </Text>
      <TextInput {...args} id="text-input-basic" />
    </>
  );
}

export function Invalid(args: TextInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="text-input-invalid"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        First Name
      </Text>
      <TextInput {...args} id="text-input-invalid" invalid />
    </>
  );
}

export function Disabled(args: TextInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="text-input-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        First Name
      </Text>
      <TextInput
        {...args}
        disabled
        id="text-input-disabled"
        value="Disabled value"
      />
    </>
  );
}

export function ReadOnly(args: TextInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="text-input-read-only"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        First Name
      </Text>
      <TextInput
        {...args}
        id="text-input-read-only"
        readOnly
        value="Readonly value"
      />
    </>
  );
}

export function Sizes(args: TextInputProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Text
            as="label"
            fontSize="sm"
            fontWeight="semiBold"
            htmlFor={`text-input-size-${size}`}
            letterSpacing="widest"
            lineHeight="snug"
            mb={1}
          >
            First Name
          </Text>
          <TextInput {...args} id={`text-input-size-${size}`} size={size} />
        </Box>
      ))}
    </Flex>
  );
}
