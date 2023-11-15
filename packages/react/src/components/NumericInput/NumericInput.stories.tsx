import { Box, Flex } from '@seed-ui/react';
import { capitalize } from 'lodash';

import { Icon } from '../Icon';
import { Text } from '../Text';

import NumericInput, {
  NumericInputProps,
  NumericInputSize,
} from './NumericInput';

const sizes: NumericInputSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/NumericInput',
  component: NumericInput,

  args: {
    allowNegative: false,
    decimalScale: 2,
    defaultValue: 1999,
    fixedDecimalScale: true,
    placeholder: '$ 0.00',
    prefix: '$ ',
    thousandSeparator: true,
  },
};

export function Basic(args: NumericInputProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="numeric-input-basic"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Max Price
      </Text>
      <NumericInput {...args} id="numeric-input-basic" />
    </>
  );
}

export function Invalid(args: NumericInputProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="numeric-input-invalid"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Max Price
      </Text>
      <NumericInput {...args} id="numeric-input-invalid" invalid />
    </>
  );
}

export function Disabled(args: NumericInputProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="numeric-input-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Max Price
      </Text>
      <NumericInput {...args} disabled id="numeric-input-disabled" />
    </>
  );
}

export function ReadOnly(args: NumericInputProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="numeric-input-read-only"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Max Price
      </Text>
      <NumericInput {...args} id="numeric-input-read-only" readOnly />
    </>
  );
}

export function Sizes(args: NumericInputProps) {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Text
            as="label"
            fontSize="sm"
            fontWeight="semiBold"
            htmlFor={`numeric-input-size-${size}`}
            letterSpacing="widest"
            lineHeight="snug"
            mb={1}
          >
            {capitalize(size)}
          </Text>
          <NumericInput
            {...args}
            id={`numeric-input-size-${size}`}
            size={size}
          />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: NumericInputProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="numeric-input-with-start-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With Start Icon
        </Text>

        <NumericInput
          {...args}
          id="numeric-input-with-start-icon"
          startIcon={
            <Icon color="neutral400" name="purchase-tag" type="solid" />
          }
        />
      </Box>

      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="numeric-input-with-end-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With End Icon
        </Text>

        <NumericInput
          {...args}
          endIcon={<Icon color="success500" name="check-circle" />}
          id="numeric-input-with-end-icon"
        />
      </Box>
    </Flex>
  );
}
