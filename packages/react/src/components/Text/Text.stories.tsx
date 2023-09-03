import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';
import type { Meta } from '@storybook/react';

import { Box } from '../Box';
import { Flex } from '../Flex';

import Text, { TextProps } from './Text';

const meta: Meta = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'This is a text',
  },
};

export const Basic: StoryFn = (args: TextProps) => <Text {...args} />;

export const Headings: StoryFn = (): JSX.Element => (
  <Flex>
    <Box mr={32}>
      <Text color="neutral500" mb={8}>
        Primary
      </Text>

      <Text
        fontSize="6xl"
        fontWeight="bold"
        letterSpacing="normal"
        lineHeight="tight"
        mb={8}
      >
        48pt
      </Text>

      <Text
        fontSize="5xl"
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="tight"
        mb={8}
      >
        40pt
      </Text>

      <Text
        fontSize="4xl"
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="tight"
        mb={8}
      >
        32pt
      </Text>

      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="tight"
        mb={8}
      >
        28pt
      </Text>

      <Text
        fontSize="2xl"
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="tight"
        mb={8}
      >
        24pt
      </Text>

      <Text
        fontSize="xl"
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="tight"
      >
        20pt
      </Text>
    </Box>

    <Box>
      <Text color="neutral500" mb={8}>
        Secondary
      </Text>

      <Text
        fontFamily="secondary"
        fontSize="6xl"
        fontWeight="medium"
        letterSpacing="normal"
        lineHeight="tight"
        mb={8}
      >
        48pt
      </Text>

      <Text
        fontFamily="secondary"
        fontSize="5xl"
        fontWeight="semiBold"
        letterSpacing="wide"
        lineHeight="tight"
        mb={8}
      >
        40pt
      </Text>

      <Text
        fontFamily="secondary"
        fontSize="4xl"
        fontWeight="semiBold"
        letterSpacing="wide"
        lineHeight="tight"
        mb={8}
      >
        32pt
      </Text>

      <Text
        fontFamily="secondary"
        fontSize="3xl"
        fontWeight="semiBold"
        letterSpacing="wide"
        lineHeight="tight"
        mb={8}
      >
        28pt
      </Text>

      <Text
        fontFamily="secondary"
        fontSize="2xl"
        fontWeight="semiBold"
        letterSpacing="wide"
        lineHeight="tight"
        mb={8}
      >
        24pt
      </Text>

      <Text
        fontFamily="secondary"
        fontSize="xl"
        fontWeight="semiBold"
        letterSpacing="wide"
        lineHeight="tight"
      >
        20pt
      </Text>
    </Box>
  </Flex>
);

export const Body: StoryFn = () => (
  <Flex>
    <Box mr={32}>
      <Text color="neutral500" mb={8}>
        Primary
      </Text>

      <Text mb={2}>Regular 16pt</Text>

      <Text fontWeight="semiBold" mb={8}>
        Bold 16pt
      </Text>

      <Text fontSize="sm" mb={2}>
        Regular 14pt
      </Text>

      <Text fontSize="sm" fontWeight="semiBold">
        Bold 14pt
      </Text>
    </Box>

    <Box>
      <Text color="neutral500" mb={8}>
        Secondary
      </Text>

      <Text fontFamily="secondary" letterSpacing="wide" mb={2}>
        Regular 16pt
      </Text>

      <Text
        fontFamily="secondary"
        fontWeight="semiBold"
        letterSpacing="wide"
        mb={8}
      >
        Bold 16pt
      </Text>

      <Text fontFamily="secondary" fontSize="sm" letterSpacing="wide" mb={2}>
        Regular 14pt
      </Text>

      <Text
        fontFamily="secondary"
        fontSize="sm"
        fontWeight="semiBold"
        letterSpacing="wide"
      >
        Bold 14pt
      </Text>
    </Box>
  </Flex>
);

export const Elements: StoryFn = () => (
  <>
    <Text fontWeight="semiBold" letterSpacing="widest" lineHeight="snug" mb={8}>
      Medium Label
    </Text>

    <Text
      fontSize="sm"
      fontWeight="semiBold"
      letterSpacing="widest"
      lineHeight="snug"
      mb={8}
    >
      Small Label
    </Text>

    <Text fontSize="xs" letterSpacing="widest" lineHeight="snug" mb={8}>
      Caption
    </Text>

    <Text
      fontSize="sm"
      fontWeight="regular"
      letterSpacing="widest"
      lineHeight="snug"
      mb={8}
    >
      Button
    </Text>

    <Text
      className={atoms({ cursor: 'pointer' })}
      color="primary500"
      textDecoration={{ hover: 'underline' }}
    >
      Link
    </Text>
  </>
);

export default meta;
