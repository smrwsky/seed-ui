import { Box, Flex } from '@seed-ui/react';
import { StoryFn } from '@storybook/react';

import { Icon } from '../Icon';
import { Text } from '../Text';

import Autocomplete, {
  AutocompleteProps,
  AutocompleteSize,
} from './Autocomplete';

const SIZE_OPTIONS: AutocompleteSize[] = ['sm', 'md', 'lg'];

const OPTIONS_LIST = ['Peter', 'Louis', 'Mag', 'Chris', 'Stewie', 'Bryan'];

export default {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    placeholder: 'Type to search',
  },
};

const Template: StoryFn<AutocompleteProps> = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Text
      as="label"
      fontSize="sm"
      fontWeight="semiBold"
      htmlFor={args.id}
      letterSpacing="widest"
      lineHeight="snug"
      mb={1}
    >
      Character
    </Text>
    <Autocomplete {...args} options={OPTIONS_LIST} />
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {
  id: 'autocomplete-basic',
};

export const Multiple = Template.bind({});

Multiple.args = {
  id: 'autocomplete-multiple',
  // @ts-ignore
  multiple: true,
  defaultValue: ['Peter', 'Chris', 'Stewie'],
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'autocomplete-invalid',
  invalid: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'autocomplete-disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  id: 'autocomplete-readonly',
  readOnly: true,
};

export function Sizes(args: AutocompleteProps) {
  return (
    <Flex flexDirection="column" style={{ minHeight: '384px' }} width={80}>
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Text
            as="label"
            fontSize="sm"
            fontWeight="semiBold"
            htmlFor={`autocomplete-size-${size}`}
            letterSpacing="widest"
            lineHeight="snug"
            mb={1}
          >
            Character
          </Text>
          <Autocomplete
            {...args}
            id={`autocomplete-size-${size}`}
            options={OPTIONS_LIST}
            size={size}
          />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: AutocompleteProps) {
  return (
    <Flex flexDirection="column" style={{ minHeight: '384px' }}>
      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="autocomplete-with-start-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With Start Icon
        </Text>

        <Autocomplete
          {...args}
          id="autocomplete-with-start-icon"
          options={OPTIONS_LIST}
          startIcon={<Icon color="neutral400" name="search" />}
        />
      </Box>

      <Box mt={4}>
        <Text
          as="label"
          fontSize="sm"
          fontWeight="semiBold"
          htmlFor="autocomplete-with-end-icon"
          letterSpacing="widest"
          lineHeight="snug"
          mb={1}
        >
          With End Icon
        </Text>

        <Autocomplete
          {...args}
          endIcon={<Icon color="success500" name="check-circle" />}
          id="autocomplete-with-end-icon"
          options={OPTIONS_LIST}
        />
      </Box>
    </Flex>
  );
}
