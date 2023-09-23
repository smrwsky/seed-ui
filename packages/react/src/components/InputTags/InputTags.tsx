import { FC, HTMLAttributes, ReactNode } from 'react';

import { Flex } from '../Flex';

export interface InputTagsProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children?: ReactNode;
}

const InputTags: FC<InputTagsProps> = ({ children, ...props }) => (
  <Flex as="span" flex={1} flexWrap="wrap" mt="-1" mx="-0.5" {...props}>
    {children}
  </Flex>
);

export default InputTags;
