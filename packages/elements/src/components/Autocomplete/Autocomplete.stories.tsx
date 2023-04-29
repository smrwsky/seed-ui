import { Box, Flex } from '@seed-ui/flexbox';
import { FC } from 'react';

import Autocomplete, {
  AutocompleteProps,
  AutocompleteSize,
} from './Autocomplete';

const SIZE_OPTIONS: AutocompleteSize[] = ['sm', 'md', 'lg'];

const SELECT_OPTIONS = ['Peter', 'Louis', 'Mag', 'Chris', 'Stewie', 'Bryan'];

export default {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    placeholder: 'Type to search',
  },
};

export const Basic: FC<AutocompleteProps> = (args) => (
  <Box minHeight={64}>
    <Autocomplete {...args} id="autocomplete-base" options={SELECT_OPTIONS} />
  </Box>
);

export const Multiple: FC<AutocompleteProps> = (args) => (
  <Box minHeight={64}>
    <Autocomplete
      {...args}
      defaultValue={['Peter', 'Chris', 'Stewie']}
      id="autocomplete-multiple"
      multiple
      options={SELECT_OPTIONS}
    />
  </Box>
);

export const Invalid: FC<AutocompleteProps> = (args) => (
  <Box minHeight={64}>
    <Autocomplete
      {...args}
      id="autocomplete-invalid"
      invalid
      options={SELECT_OPTIONS}
    />
  </Box>
);

export const Sizes: FC<AutocompleteProps> = (args) => (
  <Flex flexDirection="column" minHeight={96}>
    {SIZE_OPTIONS.map((size, i) => (
      <Box key={i} mt={i && 4}>
        <Autocomplete
          {...args}
          id={`autocomplete-sizes-${size}`}
          options={SELECT_OPTIONS}
          size={size}
        />
      </Box>
    ))}
  </Flex>
);

export const Rounded: FC<AutocompleteProps> = (args) => (
  <Box minHeight={64}>
    <Autocomplete
      {...args}
      id="autocomplete-rounded"
      options={SELECT_OPTIONS}
      rounded
    />
  </Box>
);
