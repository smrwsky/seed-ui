import React from 'react';

import Text from '../../Text';

import * as S from './InputError.css';

export interface InputErrorProps {
  children?: string;
}

const InputError: React.FC<InputErrorProps> = ({ children }) => (
  <Text as="div" className={S.root} role="alert" size="sm" variant="danger">
    {children}
  </Text>
);

InputError.displayName = 'InputError';

export default InputError;
