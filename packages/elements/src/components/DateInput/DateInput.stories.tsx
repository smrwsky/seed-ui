import React from 'react';
import { Space } from '@seed-ui/layout';

import docs from './DateInput.docs.mdx';
import DateInput, { DateInputProps, DateInputSize } from './DateInput';

const SIZE_OPTIONS: DateInputSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/DateInput',
  component: DateInput,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    defaultValue: {
      defaultValue: '1991-12-26',
    },
    placeholder: {
      defaultValue: 'DD.MM.YYYY',
    },
  },
};

export function Base(args: DateInputProps): JSX.Element {
  return <DateInput {...args} id="date-input-base" />;
}

export function Invalid(args: DateInputProps): JSX.Element {
  return <DateInput {...args} id="date-input-invalid" invalid />;
}

export function Disabled(args: DateInputProps): JSX.Element {
  return <DateInput {...args} disabled />;
}

export function ReadOnly(args: DateInputProps): JSX.Element {
  return <DateInput {...args} readOnly />;
}

export function Sizes(args: DateInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {SIZE_OPTIONS.map((size, i) => (
        <DateInput {...args} key={i} size={size} />
      ))}
    </Space>
  );
}

export function Rounded(args: DateInputProps): JSX.Element {
  return <DateInput {...args} rounded />;
}
