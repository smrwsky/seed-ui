import { Atoms } from '@seed-ui/styles';
import { FC, HTMLAttributes, memo } from 'react';

import { Text } from '../Text';

export interface InputMessageProps
  extends Pick<Atoms, 'color' | 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'mx' | 'my'>,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  children?: string;
}

const InputMessage: FC<InputMessageProps> = ({ color, children, ...props }) => (
  <Text as="div" color={color} fontSize="sm" {...props}>
    {children}
  </Text>
);

InputMessage.displayName = 'InputMessage';

export default memo(InputMessage);
