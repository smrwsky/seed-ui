import React from 'react';
import { Space } from '@seed-ui/layout';

import docs from './DateInput.docs.mdx';
import DateInput, {
  DateInputDirection,
  DateInputProps,
  DateInputShape,
  DateInputSize,
} from './DateInput';

const SHAPE_OPTIONS: DateInputShape[] = ['rectangle', 'stadium'];

const SIZE_OPTIONS: DateInputSize[] = ['sm', 'md', 'lg'];

const DIRECTION_OPTIONS: DateInputDirection[] = ['column', 'row'];

const EXAMPLE_VALUE = '1991-12-26';

export default {
  title: 'Inputs/DateInput',
  component: DateInput,
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

export function Base(args: DateInputProps): JSX.Element {
  return <DateInput {...args} id="autocomplete-base" />;
}

export function Invalid(args: DateInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      <DateInput
        {...args}
        id="autocomplete-invalid"
        invalid
        label="Invalid input"
      />

      <DateInput
        {...args}
        error="You lie!"
        id="autocomplete-with-error"
        label="Input with error"
      />
    </Space>
  );
}

export function Disabled(args: DateInputProps): JSX.Element {
  return (
    <DateInput
      {...args}
      disabled
      id="autocomplete-disabled"
      value={EXAMPLE_VALUE}
    />
  );
}

export function ReadOnly(args: DateInputProps): JSX.Element {
  return (
    <DateInput
      {...args}
      id="autocomplete-readonly"
      readOnly
      value={EXAMPLE_VALUE}
    />
  );
}

export function Directions(args: DateInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {DIRECTION_OPTIONS.map((direction, i) => (
        <DateInput
          {...args}
          direction={direction}
          id={`autocomplete-directions-${direction}`}
          key={i}
          label={direction}
        />
      ))}
    </Space>
  );
}

export function Sizes(args: DateInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SIZE_OPTIONS.map((size, i) => (
        <DateInput
          {...args}
          id={`autocomplete-sizes-${size}`}
          key={i}
          label={size}
          size={size}
        />
      ))}
    </Space>
  );
}

export function Shapes(args: DateInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SHAPE_OPTIONS.map((shape, i) => (
        <DateInput
          {...args}
          id={`autocomplete-shape-${shape}`}
          key={i}
          label={shape}
          shape={shape}
        />
      ))}
    </Space>
  );
}
