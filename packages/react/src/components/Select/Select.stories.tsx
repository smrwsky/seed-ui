import { Box, Flex } from '@seed-ui/react';

import { Icon } from '../Icon';
import { InputBoxSize } from '../InputBox';
import { Text } from '../Text';

import Select, { SelectProps } from './Select';

const SIZE_OPTIONS: InputBoxSize[] = ['sm', 'md', 'lg'];

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

export function Basic(args: SelectProps) {
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

export function Invalid(args: SelectProps) {
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

export function Success(args: SelectProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="select-success"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Character
      </Text>
      <Select {...args} id="select-success" success>
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function WithIcon(args: SelectProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="select-with-start-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With Start Icon
        </Text>

        <Select
          {...args}
          id="select-with-start-icon"
          startIcon={<Icon color="neutral500" name="search" />}
        >
          {SELECT_OPTIONS.map((val, idx) => (
            <option key={idx} value={idx}>
              {val}
            </option>
          ))}
        </Select>
      </Box>

      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="select-with-end-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With End Icon
        </Text>

        <Select
          {...args}
          endIcon={<Icon color="primary400" name="info-circle" />}
          id="select-with-end-icon"
        >
          {SELECT_OPTIONS.map((val, idx) => (
            <option key={idx} value={idx}>
              {val}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
}

export function Disabled(args: SelectProps) {
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

export function Multiple(args: SelectProps<true>) {
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

export function Sizes(args: SelectProps) {
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
