import React from 'react';
import { Space } from '@seed-ui/layout';

import docs from './Textarea.docs.mdx';
import Textarea, {
  TextareaDirection,
  TextareaProps,
  TextareaShape,
  TextareaSize,
} from './Textarea';

const shapes: TextareaShape[] = ['rectangle', 'stadium'];

const sizes: TextareaSize[] = ['sm', 'md', 'lg'];

const directions: TextareaDirection[] = ['column', 'row'];

export default {
  title: 'Elements/Textarea',
  component: Textarea,
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
      defaultValue: 'Message',
      type: {
        summary: 'ReactNode',
      },
    },
    'placeholder': {
      control: 'text',
      defaultValue: 'Say hello!',
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
          summary: 'HTMLTextAreaAttributes',
        },
      },
    },
  },
};

export function Base(args: TextareaProps): JSX.Element {
  return <Textarea {...args} />;
}

export function MinAndMaxRows(args: TextareaProps): JSX.Element {
  return <Textarea {...args} minRows={3} maxRows={4} />;
}

export function Invalid(args: TextareaProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      <Textarea {...args} invalid label="Invalid input" />
      <Textarea {...args} error="You lie!" label="Input with error" />
    </Space>
  );
}

export function Disabled(args: TextareaProps): JSX.Element {
  return <Textarea {...args} disabled value="Disabled value" />;
}

export function ReadOnly(args: TextareaProps): JSX.Element {
  return <Textarea {...args} readOnly value="Readonly value" />;
}

export function Directions(args: TextareaProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {directions.map((direction, i) => (
        <Textarea {...args} label={direction} key={i} direction={direction} />
      ))}
    </Space>
  );
}

export function Sizes(args: TextareaProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {sizes.map((size, i) => (
        <Textarea {...args} label={size} key={i} size={size} />
      ))}
    </Space>
  );
}

export function Shapes(args: TextareaProps): JSX.Element {
  return (
    <Space direction="column" gutter={2}>
      {shapes.map((shape, i) => (
        <Textarea {...args} label={shape} key={i} shape={shape} />
      ))}
    </Space>
  );
}
