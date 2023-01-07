import React from 'react';
import { Space } from '@seed-ui/layout';
import { atoms } from '@seed-ui/styles';

import docs from './Autocomplete.docs.mdx';
import Autocomplete, {
  AutocompleteProps,
  AutocompleteSize,
} from './Autocomplete';

const SIZE_OPTIONS: AutocompleteSize[] = ['sm', 'md', 'lg'];

const SELECT_OPTIONS = [
  'Peter',
  'Louis',
  'Mag',
  'Chris',
  'Stewie',
  'Bryan',
  'Glenn',
  'Joe',
  'Cleveland',
];

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
    <div className={atoms({ height: 96 })}>
      <Autocomplete {...args} id="autocomplete-base" options={SELECT_OPTIONS} />
    </div>
  );
}

export function Invalid(args: AutocompleteProps): JSX.Element {
  return (
    <div className={atoms({ height: 96 })}>
      <Autocomplete
        {...args}
        id="autocomplete-invalid"
        invalid
        options={SELECT_OPTIONS}
      />
    </div>
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

export function Multiple(args: AutocompleteProps): JSX.Element {
  return (
    <div className={atoms({ height: 96 })}>
      <Autocomplete
        {...args}
        id="autocomplete-multiple"
        multiple
        options={SELECT_OPTIONS}
      />
    </div>
  );
}

export function Sizes(args: AutocompleteProps): JSX.Element {
  return (
    <Space className={atoms({ height: 96 })} direction="column" gutter={2}>
      {SIZE_OPTIONS.map((size, i) => (
        <Autocomplete
          {...args}
          id={`autocomplete-sizes-${size}`}
          key={i}
          options={SELECT_OPTIONS}
          size={size}
        />
      ))}
    </Space>
  );
}

export function Rounded(args: AutocompleteProps): JSX.Element {
  return (
    <div className={atoms({ height: 96 })}>
      <Autocomplete
        {...args}
        id={`autocomplete-rounded`}
        options={SELECT_OPTIONS}
        rounded
      />
    </div>
  );
}
