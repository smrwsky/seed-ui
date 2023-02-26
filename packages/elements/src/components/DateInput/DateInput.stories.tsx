import { Box, Flex } from '@seed-ui/flexbox';

import DateInput, { DateInputProps, DateInputSize } from './DateInput';
import docs from './DateInput.docs.mdx';

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
    <Flex flexDirection="column">
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <DateInput {...args} size={size} />
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: DateInputProps): JSX.Element {
  return <DateInput {...args} rounded />;
}
