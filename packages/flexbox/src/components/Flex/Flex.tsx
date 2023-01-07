import React, { ElementType } from 'react';
import cn from 'classnames';
import { Atoms, atoms } from '@seed-ui/styles';

import Box, { BoxProps } from '../Box';

export interface FlexProps
  extends Pick<
      Atoms,
      'alignItems' | 'justifyContent' | 'flexDirection' | 'flexWrap'
    >,
    BoxProps,
    React.HTMLAttributes<HTMLElement>,
    React.RefAttributes<HTMLElement> {
  as?: ElementType;
}

const Flex: React.FC<FlexProps> = React.forwardRef(
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
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  ),
);

Flex.displayName = 'Flex';

export default Flex;
