import { Box, Flex } from '@seed-ui/react';

import { Icon } from '../Icon';
import { InputBoxSize } from '../InputBox';
import { Text } from '../Text';

import Textarea, { TextareaProps } from './Textarea';

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

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

export function Success(args: TextareaProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="textarea-success"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Bio
      </Text>
      <Textarea {...args} id="textarea-success" success />
    </>
  );
}

export function WithIcon(args: TextareaProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="textarea-with-start-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With Start Icon
        </Text>

        <Textarea
          {...args}
          id="textarea-with-start-icon"
          startIcon={<Icon color="neutral500" name="search" />}
        />
      </Box>

      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="textarea-with-end-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With End Icon
        </Text>

        <Textarea
          {...args}
          endIcon={<Icon color="primary400" name="info-circle" />}
          id="textarea-with-end-icon"
        />
      </Box>
    </Flex>
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
