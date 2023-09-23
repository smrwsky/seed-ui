import { Box, Flex } from '@seed-ui/react';

import { Text } from '../Text';

import Textarea, { TextareaProps, TextareaSize } from './Textarea';

const sizes: TextareaSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/Textarea',
  component: Textarea,

  args: {
    defaultValue: 'Front-end developer at OSS',
    placeholder: 'Tell about yourself',
  },
};

export function Basic(args: TextareaProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="textarea-basic"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Bio
      </Text>
      <Textarea {...args} id="textarea-basic" />
    </>
  );
}

export function Invalid(args: TextareaProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="textarea-invalid"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Bio
      </Text>
      <Textarea {...args} id="textarea-invalid" invalid />
    </>
  );
}

export function Disabled(args: TextareaProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="textarea-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Bio
      </Text>
      <Textarea {...args} disabled id="textarea-disabled" />
    </>
  );
}

export function ReadOnly(args: TextareaProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="textarea-read-only"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Bio
      </Text>
      <Textarea {...args} id="textarea-read-only" readOnly />
    </>
  );
}

export function Sizes(args: TextareaProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Text
            as="label"
            fontSize="sm"
            fontWeight="semiBold"
            htmlFor={`textarea-size-${size}`}
            letterSpacing="widest"
            lineHeight="snug"
            mb={1}
          >
            Bio
          </Text>
          <Textarea
            {...args}
            id={`textarea-size-${size}`}
            size={size}
            value={size}
          />
        </Box>
      ))}
    </Flex>
  );
}
