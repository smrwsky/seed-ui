import { FC } from 'react';

import { InputMessage, InputMessageProps } from '../InputMessage';

export interface InputErrorProps extends Omit<InputMessageProps, 'color'> {
  children?: string;
}

const InputError: FC<InputErrorProps> = ({ children, ...props }) => (
  <InputMessage color="danger500" {...props}>
    {children}
  </InputMessage>
);

InputError.displayName = 'InputError';

export default InputError;
