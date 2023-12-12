import { Box, Flex } from '@seed-ui/react';

import { Icon } from '../Icon';
import { InputBoxSize } from '../InputBox';
import { Text } from '../Text';

import TextInput, { TextInputProps } from './TextInput';

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/TextInput',
  component: TextInput,

  args: {
    defaultValue: 'Bob',
    placeholder: 'First Name',
  },
};

export function Basic(args: TextInputProps) {
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

export function Invalid(args: TextInputProps) {
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

export function Success(args: TextInputProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="text-input-success"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        First Name
      </Text>
      <TextInput {...args} id="text-input-success" success />
    </>
  );
}

export function Disabled(args: TextInputProps) {
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

export function ReadOnly(args: TextInputProps) {
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

export function Sizes(args: TextInputProps) {
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

export function WithIcon(args: TextInputProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="text-input-with-start-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With Start Icon
        </Text>

        <TextInput
          {...args}
          id="text-input-with-start-icon"
          startIcon={<Icon color="neutral500" name="search" />}
        />
      </Box>

      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="text-input-with-end-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With End Icon
        </Text>

        <TextInput
          {...args}
          endIcon={<Icon color="primary400" name="info-circle" />}
          id="text-input-with-end-icon"
        />
      </Box>
    </Flex>
  );
}

export function Clearable(args: TextInputProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="text-input-clearable"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        First Name
      </Text>
      <TextInput {...args} clearable id="text-input-clearable" />
    </>
  );
}
