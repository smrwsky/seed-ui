import { Meta, StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment } from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import Alert, { AlertProps, AlertVariant } from './Alert';

const meta: Meta = {
  title: 'Feedback/Alert',
  args: {
    variant: 'primary',
    children: 'This is an alert',
  },
};

export const Basic: StoryFn<AlertProps> = (args) => (
  <Box width={80}>
    <Alert {...args} />
  </Box>
);

const VARIANTS: AlertVariant[] = ['primary', 'success', 'warning', 'danger'];

export const Variants: StoryFn<AlertProps> = (args) => (
  <Box width={80}>
    {VARIANTS.map((variant, i) => (
      <Fragment key={i}>
        <Text
          as="h3"
          fontSize="xl"
          fontWeight="bold"
          letterSpacing="tight"
          lineHeight="tight"
          mb={4}
          mt={i > 0 ? 8 : 0}
        >
          {capitalize(variant)}
        </Text>

        <Alert {...args} variant={variant} />
      </Fragment>
    ))}
  </Box>
);

export default meta;
