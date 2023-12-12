import { Atoms } from '@seed-ui/styles';
import React, { memo } from 'react';

import { Text } from '../Text';

export interface InputMessageProps
  extends Pick<Atoms, 'color' | 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'mx' | 'my'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  as?: React.ElementType;
  children?: string;
}

const InputMessage: React.FC<InputMessageProps> = ({
  color = 'danger500',
  children,
  ...props
}) => (
  <Text color={color} fontSize="sm" {...props}>
    {children}
  </Text>
);

InputMessage.displayName = 'InputMessage';

export default memo(InputMessage);
