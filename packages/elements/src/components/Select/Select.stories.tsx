import React from 'react';
import { Space } from '@seed-ui/layout';

import docs from './Select.docs.mdx';
import Select, { SelectProps, SelectSize } from './Select';

const SIZE_OPTIONS: SelectSize[] = ['sm', 'md', 'lg'];

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
    argTypes: {
      defaultValue: {
        defaultValue: 0,
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
    <Select {...args} invalid>
      {SELECT_OPTIONS.map((val, idx) => (
        <option key={idx} value={idx}>
          {val}
        </option>
      ))}
    </Select>
  );
}

export function Disabled(args: SelectProps): JSX.Element {
  return (
    <Select {...args} disabled>
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

export function Sizes(args: SelectProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SIZE_OPTIONS.map((size, i) => (
        <Select {...args} key={i} size={size}>
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

export function Rounded(args: SelectProps): JSX.Element {
  return (
    <Select {...args} rounded>
      {SELECT_OPTIONS.map((val, idx) => (
        <option key={idx} value={idx}>
          {val}
        </option>
      ))}
    </Select>
  );
}
