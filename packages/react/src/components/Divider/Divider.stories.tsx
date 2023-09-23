import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Text } from '../Text';

import Divider, { DividerProps } from './Divider';

const meta: Meta = {
  title: 'Layout/Divider',
};

export const Basic: StoryFn<DividerProps> = (args) => (
  <Box width={80}>
    <Divider {...args} />
  </Box>
);

export const Direction: StoryFn<DividerProps> = (args) => (
  <>
    <Text
      as="h3"
      fontSize="xl"
      fontWeight="bold"
      letterSpacing="tight"
      lineHeight="tight"
      mb={4}
    >
      Horizontal
    </Text>

    <Box width={80}>
      <Divider {...args} direction="horizontal" />
    </Box>

    <Text
      as="h3"
      fontSize="xl"
      fontWeight="bold"
      letterSpacing="tight"
      lineHeight="tight"
      mb={4}
      mt={8}
    >
      Vertical
    </Text>

    <Flex height={48} justifyContent="center">
      <Divider {...args} direction="vertical" />
    </Flex>
  </>
);
export default meta;
