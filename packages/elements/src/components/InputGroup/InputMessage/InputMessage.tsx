import React, { memo } from 'react';

import Text, { TextVariant } from '../../Text';

import * as S from './InputMessage.css';

export interface InputMessageProps {
  variant?: TextVariant;
  children?: string;
}

const InputMessage: React.FC<InputMessageProps> = ({
  variant = 'secondary',
  children,
}) => (
  <Text as="div" className={S.root} size="sm" variant={variant}>
    {children}
  </Text>
);

InputMessage.displayName = 'InputMessage';

export default memo(InputMessage);
