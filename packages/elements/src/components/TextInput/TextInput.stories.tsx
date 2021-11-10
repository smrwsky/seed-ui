import React from 'react';
import { Space } from '@seed-ui/layout';

import docs from './TextInput.docs.mdx';
import TextInput, {
  TextInputDirection,
  TextInputProps,
  TextInputShape,
  TextInputSize,
} from './TextInput';

const shapes: TextInputShape[] = ['rectangle', 'stadium'];

const sizes: TextInputSize[] = ['sm', 'md', 'lg'];

const directions: TextInputDirection[] = ['column', 'row'];

export default {
  title: 'Elements/TextInput',
  component: TextInput,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'direction': {
      control: 'select',
      options: directions,
      defaultValue: 'column',
      table: {
        type: {
          summary: directions.join(' | '),
        },
        defaultValue: {
          summary: 'column',
        },
      },
    },
    'shape': {
      control: 'select',
      options: shapes,
      defaultValue: 'rectangle',
      table: {
        type: {
          summary: shapes.join(' | '),
        },
        defaultValue: {
          summary: 'rectangle',
        },
      },
    },
    'size': {
      control: 'select',
      options: sizes,
      defaultValue: 'md',
      table: {
        type: {
          summary: sizes.join(' | '),
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
    'placeholder': {
      control: 'text',
      defaultValue: 'Johny',
      type: {
        summary: 'string',
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

export function Base(args: TextInputProps): JSX.Element {
  return <TextInput {...args} />;
}

export function Invalid(args: TextInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      <TextInput {...args} invalid label="Invalid input" />
      <TextInput {...args} error="You lie!" label="Input with error" />
    </Space>
  );
}

export function Disabled(args: TextInputProps): JSX.Element {
  return <TextInput {...args} disabled value="Disabled value" />;
}

export function ReadOnly(args: TextInputProps): JSX.Element {
  return <TextInput {...args} readOnly value="Readonly value" />;
}

export function Directions(args: TextInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {directions.map((direction, i) => (
        <TextInput {...args} label={direction} key={i} direction={direction} />
      ))}
    </Space>
  );
}

export function Sizes(args: TextInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {sizes.map((size, i) => (
        <TextInput {...args} label={size} key={i} size={size} />
      ))}
    </Space>
  );
}

export function Shapes(args: TextInputProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {shapes.map((shape, i) => (
        <TextInput {...args} label={shape} key={i} shape={shape} />
      ))}
    </Space>
  );
}
