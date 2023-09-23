import { FC, HTMLAttributes, ReactNode } from 'react';

import { Flex } from '../Flex';

export interface InputActionProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

const InputAction: FC<InputActionProps> = ({
  children,
  ...props
}): JSX.Element => (
  <Flex
    alignItems="center"
    as="span"
    justifyContent="center"
    lineHeight="none"
    minWidth={6}
    {...props}
  >
    {children}
  </Flex>
);

export default InputAction;
