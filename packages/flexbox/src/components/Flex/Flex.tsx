import { Atoms, atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  ElementType,
  FC,
  forwardRef,
  HTMLAttributes,
  RefAttributes,
} from 'react';

import { Box, BoxProps } from '../Box';

export interface FlexProps
  extends Partial<
      Pick<
        Atoms,
        'alignItems' | 'justifyContent' | 'flexDirection' | 'flexWrap'
      >
    >,
    BoxProps,
    HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
}

const Flex: FC<FlexProps> = forwardRef(
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
