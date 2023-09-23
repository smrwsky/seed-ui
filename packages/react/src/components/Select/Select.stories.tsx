import { Box, Flex } from '@seed-ui/react';

import { Text } from '../Text';

import Select, { SelectProps, SelectSize } from './Select';

const SIZE_OPTIONS: SelectSize[] = ['sm', 'md', 'lg'];

const SELECT_OPTIONS = [
  'Choose a person',
  'Peter',
  'Louis',
  'Mag',
  'Chris',
  'Stewie',
  'Bryan',
];

export default {
  title: 'Inputs/Select',
  component: Select,
  args: {
    defaultValue: 0,
  },
};

export function Basic(args: SelectProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="select-basic"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Character
      </Text>
      <Select {...args} id="select-basic">
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Invalid(args: SelectProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="select-invalid"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Character
      </Text>
      <Select {...args} id="select-invalid" invalid>
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Disabled(args: SelectProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="select-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Character
      </Text>
      <Select {...args} disabled id="select-disabled">
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Multiple(args: SelectProps): JSX.Element {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="select-multiple"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Character
      </Text>
      <Select {...args} id="select-multiple" multiple>
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Sizes(args: SelectProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Text
            as="label"
            fontSize="sm"
            fontWeight="semiBold"
            htmlFor={`select-size-${size}`}
            letterSpacing="widest"
            lineHeight="snug"
            mb={1}
          >
            Character
          </Text>
          <Select {...args} id={`select-size-${size}`} size={size}>
            {SELECT_OPTIONS.map((val, idx) => (
              <option key={idx} value={idx}>
                {val}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}
