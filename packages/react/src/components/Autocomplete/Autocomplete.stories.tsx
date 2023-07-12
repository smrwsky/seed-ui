import { Box, Flex } from '@seed-ui/react';
import { StoryFn } from '@storybook/react';

import Autocomplete, { AutocompleteSize } from './Autocomplete';

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
    <Autocomplete {...args} id="autocomplete-base" options={OPTIONS_LIST} />
  </Box>
);

export const Multiple: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
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
        <Autocomplete
          {...args}
          id={`autocomplete-sizes-${size}`}
          options={OPTIONS_LIST}
          size={size}
        />
      </Box>
    ))}
  </Flex>
);

export const Rounded: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Autocomplete
      {...args}
      id="autocomplete-rounded"
      options={OPTIONS_LIST}
      rounded
    />
  </Box>
);

export const AllowInputValue: StoryFn = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
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
    <Autocomplete
      {...args}
      id="autocomplete-inline-auto-complete"
      inlineAutoComplete
      options={OPTIONS_LIST}
    />
  </Box>
);
