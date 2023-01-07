import React from 'react';
import { Box, Flex } from '@seed-ui/flexbox';

import docs from './Textarea.docs.mdx';
import Textarea, { TextareaProps, TextareaSize } from './Textarea';

const sizes: TextareaSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/Textarea',
  component: Textarea,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    defaultValue: {
      defaultValue: 'Front-end developer at OSS',
    },
    placeholder: {
      defaultValue: 'Tell about yourself',
    },
  },
};

export function Base(args: TextareaProps): JSX.Element {
  return <Textarea {...args} />;
}

export function Invalid(args: TextareaProps): JSX.Element {
  return <Textarea {...args} invalid />;
}

export function Disabled(args: TextareaProps): JSX.Element {
  return <Textarea {...args} disabled />;
}

export function ReadOnly(args: TextareaProps): JSX.Element {
  return <Textarea {...args} readOnly />;
}

export function Sizes(args: TextareaProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Textarea {...args} size={size} value={size} />
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: TextareaProps): JSX.Element {
  return <Textarea {...args} rounded />;
}
