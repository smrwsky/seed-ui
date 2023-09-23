import { Box, Flex } from '@seed-ui/react';

import { Text } from '../Text';

import DateInput, { DateInputProps, DateInputSize } from './DateInput';

const SIZE_OPTIONS: DateInputSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/DateInput',
  component: DateInput,

  args: {
    defaultValue: '1991-12-26',
    placeholder: 'DD.MM.YYYY',
  },
};

export function Basic(args: DateInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="date-input-basic"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Date of Birth
      </Text>
      <DateInput {...args} id="date-input-basic" />
    </>
  );
}

export function Invalid(args: DateInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="date-input-invalid"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Date of Birth
      </Text>
      <DateInput {...args} id="date-input-invalid" invalid />
    </>
  );
}

export function Disabled(args: DateInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="date-input-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Date of Birth
      </Text>
      <DateInput {...args} disabled id="date-input-disabled" />
    </>
  );
}

export function ReadOnly(args: DateInputProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="date-input-readonly"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Date of Birth
      </Text>
      <DateInput {...args} id="date-input-readonly" readOnly />
    </>
  );
}

export function Sizes(args: DateInputProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Text
            as="label"
            fontSize="sm"
            fontWeight="semiBold"
            htmlFor={`date-input-size-${size}`}
            letterSpacing="widest"
            lineHeight="snug"
            mb={1}
          >
            Date Of Birth
          </Text>
          <DateInput {...args} id={`date-input-size-${size}`} size={size} />
        </Box>
      ))}
    </Flex>
  );
}
