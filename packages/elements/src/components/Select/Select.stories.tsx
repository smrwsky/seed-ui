import React from 'react';
import { Space } from '@seed-ui/layout';

import docs from './Select.docs.mdx';
import Select, {
  SelectDirection,
  SelectProps,
  SelectShape,
  SelectSize,
} from './Select';

const SHAPE_OPTIONS: SelectShape[] = ['rectangle', 'stadium'];

const SIZE_OPTIONS: SelectSize[] = ['sm', 'md', 'lg'];

const DIRECTION_OPTIONS: SelectDirection[] = ['column', 'row'];

const SELECT_OPTIONS = [
  'Choose a person',
  'Peter',
  'Louis',
  'Mag',
  'Chris',
  'Stewie',
  'Bryan',
];

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'direction': {
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
    'shape': {
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
    'size': {
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
    'label': {
      control: 'text',
      defaultValue: 'First name',
      type: {
        summary: 'ReactNode',
      },
    },
    'value': {
      control: 'text',
      type: {
        summary: 'string',
      },
    },
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLInputAttributes',
        },
      },
    },
  },
};

export function Base(args: SelectProps): JSX.Element {
  return (
    <Select {...args}>
      {SELECT_OPTIONS.map((val, idx) => (
        <option key={idx} value={idx}>
          {val}
        </option>
      ))}
    </Select>
  );
}

export function Invalid(args: SelectProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      <Select {...args} invalid label="Invalid input">
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
      <Select {...args} error="You lie!" label="Input with error">
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </Space>
  );
}

export function Disabled(args: SelectProps): JSX.Element {
  return (
    <Select {...args} disabled value={SELECT_OPTIONS[0]}>
      {SELECT_OPTIONS.map((val, idx) => (
        <option key={idx} value={idx}>
          {val}
        </option>
      ))}
    </Select>
  );
}

export function ReadOnly(args: SelectProps): JSX.Element {
  return (
    <Select {...args} readOnly value={SELECT_OPTIONS[1]}>
      {SELECT_OPTIONS.map((val, idx) => (
        <option key={idx} value={idx}>
          {val}
        </option>
      ))}
    </Select>
  );
}

export function Multiple(args: SelectProps): JSX.Element {
  return (
    <Select {...args} multiple>
      {SELECT_OPTIONS.map((val, idx) => (
        <option key={idx} value={idx}>
          {val}
        </option>
      ))}
    </Select>
  );
}

export function Directions(args: SelectProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {DIRECTION_OPTIONS.map((direction, i) => (
        <Select {...args} direction={direction} key={i} label={direction}>
          {SELECT_OPTIONS.map((val, idx) => (
            <option key={idx} value={idx}>
              {val}
            </option>
          ))}
        </Select>
      ))}
    </Space>
  );
}

export function Sizes(args: SelectProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SIZE_OPTIONS.map((size, i) => (
        <Select {...args} key={i} label={size} size={size}>
          {SELECT_OPTIONS.map((val, idx) => (
            <option key={idx} value={idx}>
              {val}
            </option>
          ))}
        </Select>
      ))}
    </Space>
  );
}

export function Shapes(args: SelectProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SHAPE_OPTIONS.map((shape, i) => (
        <Select {...args} key={i} label={shape} shape={shape}>
          {SELECT_OPTIONS.map((val, idx) => (
            <option key={idx} value={idx}>
              {val}
            </option>
          ))}
        </Select>
      ))}
    </Space>
  );
}
