import React, { ElementType } from 'react';
import cn from 'classnames';
import { atoms, Atoms } from '@seed-ui/styles';

export interface BoxProps
  extends Pick<
      Atoms,
      | 'display'
      | 'alignSelf'
      | 'flex'
      | 'order'
      | 'width'
      | 'maxWidth'
      | 'minWidth'
      | 'height'
      | 'maxHeight'
      | 'minHeight'
      | 'lineHeight'
      | 'p'
      | 'pt'
      | 'pb'
      | 'pl'
      | 'pr'
      | 'px'
      | 'py'
      | 'm'
      | 'mt'
      | 'mb'
      | 'ml'
      | 'mr'
      | 'mx'
      | 'my'
      | 'overflow'
      | 'overflowX'
      | 'overflowY'
    >,
    React.HTMLAttributes<HTMLElement>,
    React.RefAttributes<HTMLElement> {
  as?: ElementType;
}

const Box: React.FC<BoxProps> = React.forwardRef(
  (
    {
      as: Element = 'div',
      display,
      alignSelf,
      flex,
      order,
      width,
      minWidth,
      maxWidth,
      height,
      maxHeight,
      minHeight,
      p,
      pt,
      pb,
      pl,
      pr,
      px,
      py,
      m,
      mt,
      mb,
      ml,
      mr,
      mx,
      my,
      overflow,
      overflowX,
      overflowY,
      className,
      children,
      ...elemProps
    },
    ref,
  ) => (
    <Element
      className={cn(
        atoms({
          display,
          alignSelf,
          flex,
          order,
          width,
          minWidth,
          maxWidth,
          height,
          maxHeight,
          minHeight,
          p,
          pt,
          pb,
          pl,
          pr,
          px,
          py,
          m,
          mt,
          mb,
          ml,
          mr,
          mx,
          my,
          overflow,
          overflowX,
          overflowY,
        }),
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </Element>
  ),
);

Box.displayName = 'Box';

export default Box;
