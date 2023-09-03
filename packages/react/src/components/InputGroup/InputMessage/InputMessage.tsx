import { Atoms } from '@seed-ui/styles';
import { FC, memo } from 'react';

import { Text } from '../../Text';

import * as S from './InputMessage.css';

export interface InputMessageProps {
  color?: Atoms['color'];
  children?: string;
}

const InputMessage: FC<InputMessageProps> = ({ color, children }) => (
  <Text as="div" className={S.root} color={color} fontSize="sm">
    {children}
  </Text>
);

InputMessage.displayName = 'InputMessage';

export default memo(InputMessage);
