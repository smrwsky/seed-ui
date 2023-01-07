import React from 'react';
import { atoms } from '@seed-ui/styles';

import docs from './TextInput.docs.mdx';
import TextInput, { TextInputProps, TextInputSize } from './TextInput';

const sizes: TextInputSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    defaultValue: {
      defaultValue: 'Bob',
    },
    placeholder: {
      defaultValue: 'First Name',
    },
  },
};

export function Base(args: TextInputProps): JSX.Element {
  return <TextInput {...args} />;
}

export function Invalid(args: TextInputProps): JSX.Element {
  return <TextInput {...args} invalid />;
}

export function Disabled(args: TextInputProps): JSX.Element {
  return <TextInput {...args} disabled value="Disabled value" />;
}

export function ReadOnly(args: TextInputProps): JSX.Element {
  return <TextInput {...args} readOnly value="Readonly value" />;
}

export function Sizes(args: TextInputProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <TextInput
          {...args}
          className={atoms({ mt: i && 4 })}
          key={i}
          size={size}
        />
      ))}
    </>
  );
}

export function Rounded(args: TextInputProps): JSX.Element {
  return <TextInput {...args} rounded />;
}
