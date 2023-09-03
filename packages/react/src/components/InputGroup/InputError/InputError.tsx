import { FC } from 'react';

import { Text } from '../../Text';

import * as S from './InputError.css';

export interface InputErrorProps {
  children?: string;
}

const InputError: FC<InputErrorProps> = ({ children }) => (
  <Text
    as="div"
    className={S.root}
    color="danger500"
    fontSize="sm"
    role="alert"
  >
    {children}
  </Text>
);

InputError.displayName = 'InputError';

export default InputError;
