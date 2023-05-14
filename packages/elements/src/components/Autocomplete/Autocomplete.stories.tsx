import { Box, Flex } from '@seed-ui/flexbox';
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
  <Box minHeight={64} width={80}>
    <Autocomplete {...args} id="autocomplete-base" options={OPTIONS_LIST} />
  </Box>
);

export const Multiple: StoryFn = (args) => (
  <Box minHeight={64} width={80}>
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
  <Box minHeight={64} width={80}>
    <Autocomplete
      {...args}
      id="autocomplete-invalid"
      invalid
      options={OPTIONS_LIST}
    />
  </Box>
);

export const Sizes: StoryFn = (args) => (
  <Flex flexDirection="column" minHeight={96} width={80}>
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
  <Box minHeight={64} width={80}>
    <Autocomplete
      {...args}
      id="autocomplete-rounded"
      options={OPTIONS_LIST}
      rounded
    />
  </Box>
);

export const AllowInputValue: StoryFn = (args) => (
  <Box minHeight={64} width={80}>
    <Autocomplete
      {...args}
      allowInputValue
      id="autocomplete-allow-input-value"
      options={OPTIONS_LIST}
    />
  </Box>
);

export const AutoHighlight: StoryFn = (args) => (
  <Box minHeight={64} width={80}>
    <Autocomplete
      {...args}
      autoHighlight
      id="autocomplete-auto-highlight"
      options={OPTIONS_LIST}
    />
  </Box>
);

export const InlineAutoComplete: StoryFn = (args) => (
  <Box minHeight={64} width={80}>
    <Autocomplete
      {...args}
      id="autocomplete-inline-auto-complete"
      inlineAutoComplete
      options={OPTIONS_LIST}
    />
  </Box>
);
