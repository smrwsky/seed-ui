import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  ElementType,
  FC,
  forwardRef,
  HTMLAttributes,
  RefAttributes,
} from 'react';

export interface BoxProps
  extends Partial<
      Pick<
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
      >
    >,
    HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
}

const Box: FC<BoxProps> = forwardRef(
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
      lineHeight,
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
          lineHeight,
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
