import { Atoms, atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef } from 'react';

import { Box, BoxProps } from '../Box';

export type FlexProps = Partial<
  Pick<Atoms, 'alignItems' | 'justifyContent' | 'flexDirection' | 'flexWrap'>
> &
  BoxProps;

const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      display = 'flex',
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        atoms({
          alignItems,
          justifyContent,
          flexDirection,
          flexWrap,
        }),
        className,
      )}
      display={display}
      {...props}
    >
      {children}
    </Box>
  ),
);

Flex.displayName = 'Flex';

export default Flex;
