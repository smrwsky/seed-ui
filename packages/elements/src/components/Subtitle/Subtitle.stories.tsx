import React from 'react';

import { TitleProps } from '../Title';

import docs from './Subtitle.docs.mdx';
import Subtitle, {
  SubtitleProps,
  SubtitleSize,
  SubtitleVariant,
} from './Subtitle';

const variants: SubtitleVariant[] = [
  'primary',
  'accent',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
];

const sizes: SubtitleSize[] = ['sm', 'md'];

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'as': {
      table: {
        type: {
          summary: 'ElementType',
        },
        defaultValue: { summary: 'div' },
      },
    },
    'variant': {
      control: 'select',
      defaultValue: 'dark',
      table: {
        type: {
          summary: variants.join(' | '),
        },
        defaultValue: { summary: 'dark' },
      },
    },
    'm': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['m']",
        },
      },
    },
    'mb': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mb']",
        },
      },
    },
    'ml': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['ml']",
        },
      },
    },
    'mr': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mr']",
        },
      },
    },
    'mt': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mt']",
        },
      },
    },
    'mx': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mx']",
        },
      },
    },
    'my': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['my']",
        },
      },
    },
    'serif': {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      control: 'text',
      defaultValue: 'This is a subtitle',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: SubtitleProps): JSX.Element {
  return <Subtitle {...args} />;
}

export function Variants(args: SubtitleProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Subtitle {...args} key={i} variant={variant}>
          This is {variant} subtitle
        </Subtitle>
      ))}
    </>
  );
}

export function Sizes(args: SubtitleProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Subtitle {...args} key={i} size={size}>
          A subtitle with size {size}
        </Subtitle>
      ))}
    </>
  );
}

export function Serif(args: TitleProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Subtitle {...args} key={i} serif size={size}>
          A subtitle with size {size}
        </Subtitle>
      ))}
    </>
  );
}

export function Margins(args: SubtitleProps): JSX.Element {
  return (
    <>
      <Subtitle {...args} my={4}>
        A subtitle with vertical margins
      </Subtitle>
    </>
  );
}
