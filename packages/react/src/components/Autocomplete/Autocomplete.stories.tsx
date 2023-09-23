import { Box, Flex } from '@seed-ui/react';
import { StoryFn } from '@storybook/react';

import { Text } from '../Text';

import { Autocomplete, AutocompleteSize } from './Autocomplete';

const SIZE_OPTIONS: AutocompleteSize[] = ['sm', 'md', 'lg'];

const OPTIONS_LIST = ['Peter', 'Louis', 'Mag', 'Chris', 'Stewie', 'Bryan'];

export default {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    placeholder: 'Type to search',
  },
};

export const Basic: StoryFn = (args) => (
  <Box style={{ minHeight: '160px' }} width={80}>
    <Text
      as="label"
      fontSize="sm"
      fontWeight="semiBold"
      htmlFor="autocomplete-base"
      letterSpacing="widest"
      lineHeight="snug"
      mb={1}
    >
      Character
    </Text>
    <Autocomplete {...args} id="autocomplete-base" options={OPTIONS_LIST} />
  </Box>
);

export const Multiple: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Text
      as="label"
      fontSize="sm"
      fontWeight="semiBold"
      htmlFor="autocomplete-multiple"
      letterSpacing="widest"
      lineHeight="snug"
      mb={1}
    >
      Character
    </Text>
    <Autocomplete
      {...args}
      defaultValue={['Peter', 'Chris', 'Stewie']}
      id="autocomplete-multiple"
      multiple
      options={OPTIONS_LIST}
    />
  </Box>
);

export const Invalid: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Text
      as="label"
      fontSize="sm"
      fontWeight="semiBold"
      htmlFor="autocomplete-invalid"
      letterSpacing="widest"
      lineHeight="snug"
      mb={1}
    >
      Character
    </Text>
    <Autocomplete
      {...args}
      id="autocomplete-invalid"
      invalid
      options={OPTIONS_LIST}
    />
  </Box>
);

export const Sizes: StoryFn = (args) => (
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

export const AllowInputValue: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Text
      as="label"
      fontSize="sm"
      fontWeight="semiBold"
      htmlFor="autocomplete-allow-input-value"
      letterSpacing="widest"
      lineHeight="snug"
      mb={1}
    >
      Character
    </Text>
    <Autocomplete
      {...args}
      allowInputValue
      id="autocomplete-allow-input-value"
      options={OPTIONS_LIST}
    />
  </Box>
);

export const AutoHighlight: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Text
      as="label"
      fontSize="sm"
      fontWeight="semiBold"
      htmlFor="autocomplete-auto-highlight"
      letterSpacing="widest"
      lineHeight="snug"
      mb={1}
    >
      Character
    </Text>
    <Autocomplete
      {...args}
      autoHighlight
      id="autocomplete-auto-highlight"
      options={OPTIONS_LIST}
    />
  </Box>
);

export const InlineAutoComplete: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Text
      as="label"
      fontSize="sm"
      fontWeight="semiBold"
      htmlFor="autocomplete-inline-auto-complete"
      letterSpacing="widest"
      lineHeight="snug"
      mb={1}
    >
      Character
    </Text>
    <Autocomplete
      {...args}
      id="autocomplete-inline-auto-complete"
      inlineAutoComplete
      options={OPTIONS_LIST}
    />
  </Box>
);
