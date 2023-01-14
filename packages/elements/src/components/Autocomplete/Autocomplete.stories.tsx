import React from 'react';
import { Box, Flex } from '@seed-ui/flexbox';

import docs from './Autocomplete.docs.mdx';
import Autocomplete, {
  AutocompleteProps,
  AutocompleteSize,
} from './Autocomplete';

const SIZE_OPTIONS: AutocompleteSize[] = ['sm', 'md', 'lg'];

const SELECT_OPTIONS = ['Peter', 'Louis', 'Mag', 'Chris', 'Stewie', 'Bryan'];

export default {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    placeholder: {
      defaultValue: 'Type to search',
    },
  },
};

export function Base(args: AutocompleteProps): JSX.Element {
  return (
    <Flex flexDirection="column" minHeight={56}>
      <div>
        <Autocomplete
          {...args}
          id="autocomplete-base"
          options={SELECT_OPTIONS}
        />
      </div>
    </Flex>
  );
}

export function Invalid(args: AutocompleteProps): JSX.Element {
  return (
    <Flex flexDirection="column" minHeight={56}>
      <div>
        <Autocomplete
          {...args}
          id="autocomplete-invalid"
          invalid
          options={SELECT_OPTIONS}
        />
      </div>
    </Flex>
  );
}

export function Disabled(args: AutocompleteProps): JSX.Element {
  return (
    <Autocomplete
      {...args}
      disabled
      id="autocomplete-disabled"
      options={SELECT_OPTIONS}
      value={SELECT_OPTIONS[0]}
    />
  );
}

export function ReadOnly(args: AutocompleteProps): JSX.Element {
  return (
    <Autocomplete
      {...args}
      id="autocomplete-readonly"
      options={SELECT_OPTIONS}
      readOnly
      value={SELECT_OPTIONS[1]}
    />
  );
}

export function Sizes(args: AutocompleteProps): JSX.Element {
  return (
    <Flex flexDirection="column" minHeight={96}>
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Autocomplete
            {...args}
            id={`autocomplete-sizes-${size}`}
            options={SELECT_OPTIONS}
            size={size}
          />{' '}
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: AutocompleteProps): JSX.Element {
  return (
    <Flex flexDirection="column" minHeight={56}>
      <div>
        <Autocomplete
          {...args}
          id={`autocomplete-rounded`}
          options={SELECT_OPTIONS}
          rounded
        />
      </div>
    </Flex>
  );
}

export function Multiple(args: AutocompleteProps): JSX.Element {
  return (
    <Flex flexDirection="column" minHeight={56}>
      <Autocomplete
        {...args}
        id="autocomplete-multiple"
        multiple
        options={SELECT_OPTIONS}
      />
    </Flex>
  );
}
