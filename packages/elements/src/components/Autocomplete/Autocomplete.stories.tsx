import React from 'react';
import { Space } from '@seed-ui/layout';

import docs from './Autocomplete.docs.mdx';
import Autocomplete, {
  AutocompleteDirection,
  AutocompleteProps,
  AutocompleteShape,
  AutocompleteSize,
} from './Autocomplete';

const SHAPE_OPTIONS: AutocompleteShape[] = ['rectangle', 'stadium'];

const SIZE_OPTIONS: AutocompleteSize[] = ['sm', 'md', 'lg'];

const DIRECTION_OPTIONS: AutocompleteDirection[] = ['column', 'row'];

const SELECT_OPTIONS = [
  'Choose a person',
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
    direction: {
      control: 'select',
      options: DIRECTION_OPTIONS,
      defaultValue: 'column',
      table: {
        type: {
          summary: DIRECTION_OPTIONS.join(' | '),
        },
        defaultValue: {
          summary: 'column',
        },
      },
    },
    shape: {
      control: 'select',
      options: SHAPE_OPTIONS,
      defaultValue: 'rectangle',
      table: {
        type: {
          summary: SHAPE_OPTIONS.join(' | '),
        },
        defaultValue: {
          summary: 'rectangle',
        },
      },
    },
    size: {
      control: 'select',
      options: SIZE_OPTIONS,
      defaultValue: 'md',
      table: {
        type: {
          summary: SIZE_OPTIONS.join(' | '),
        },
        defaultValue: {
          summary: 'md',
        },
      },
    },
    label: {
      control: 'text',
      defaultValue: 'First name',
      type: {
        summary: 'ReactNode',
      },
    },
    multiple: {
      control: 'boolean',
      defaultValue: false,
      type: {
        summary: 'multiple',
      },
    },
  },
};

export function Base(args: AutocompleteProps): JSX.Element {
  return (
    <Autocomplete {...args} id="autocomplete-base" options={SELECT_OPTIONS} />
  );
}

export function Invalid(args: AutocompleteProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      <Autocomplete
        {...args}
        id="autocomplete-invalid"
        invalid
        label="Invalid input"
        options={SELECT_OPTIONS}
      />

      <Autocomplete
        {...args}
        error="You lie!"
        id="autocomplete-with-error"
        label="Input with error"
        options={SELECT_OPTIONS}
      />
    </Space>
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
    <Autocomplete
      {...args}
      id="autocomplete-multiple"
      multiple
      options={SELECT_OPTIONS}
    />
  );
}

export function Directions(args: AutocompleteProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {DIRECTION_OPTIONS.map((direction, i) => (
        <Autocomplete
          {...args}
          direction={direction}
          id={`autocomplete-directions-${direction}`}
          key={i}
          label={direction}
          options={SELECT_OPTIONS}
        />
      ))}
    </Space>
  );
}

export function Sizes(args: AutocompleteProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SIZE_OPTIONS.map((size, i) => (
        <Autocomplete
          {...args}
          id={`autocomplete-sizes-${size}`}
          key={i}
          label={size}
          options={SELECT_OPTIONS}
          size={size}
        />
      ))}
    </Space>
  );
}

export function Shapes(args: AutocompleteProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SHAPE_OPTIONS.map((shape, i) => (
        <Autocomplete
          {...args}
          id={`autocomplete-shape-${shape}`}
          key={i}
          label={shape}
          options={SELECT_OPTIONS}
          shape={shape}
        />
      ))}
    </Space>
  );
}
