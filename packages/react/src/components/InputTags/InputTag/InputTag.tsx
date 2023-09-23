import { FC, HTMLAttributes, ReactNode } from 'react';

import { Box } from '../../Box';

export interface InputTagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

const InputTag: FC<InputTagProps> = ({ children, ...props }) => (
  <Box
    as="span"
    display="block"
    lineHeight="none"
    maxWidth="full"
    minWidth={0}
    mt={1}
    px={0.5}
    {...props}
  >
    {children}
  </Box>
);

export default InputTag;
