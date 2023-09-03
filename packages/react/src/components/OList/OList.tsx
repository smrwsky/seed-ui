import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export interface OListProps
  extends Omit<HTMLAttributes<HTMLOListElement>, 'color'> {
  color?: Atoms['color'];
  fontFamily?: Atoms['fontFamily'];
  fontSize?: Atoms['fontSize'];
  fontWeight?: Atoms['fontWeight'];
  letterSpacing?: Atoms['letterSpacing'];
  lineHeight?: Atoms['lineHeight'];
  m?: Atoms['m'];
  mt?: Atoms['mt'];
  mb?: Atoms['mb'];
  ml?: Atoms['ml'];
  mr?: Atoms['mr'];
  mx?: Atoms['mx'];
  my?: Atoms['my'];
}

const OList = forwardRef<HTMLOListElement, OListProps>(
  (
    {
      className,
      color,
      fontFamily,
      fontSize,
      fontWeight,
      letterSpacing,
      lineHeight,
      m,
      mt,
      mb,
      ml,
      mr,
      mx,
      my,
      children,
      ...elemProps
    },
    ref,
  ) => (
    <ol
      className={cn(
        atoms({
          color,
          fontFamily,
          fontSize,
          fontWeight,
          letterSpacing,
          lineHeight,
          m,
          mt,
          mb,
          ml,
          mr,
          mx,
          my,
        }),
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </ol>
  ),
);

OList.displayName = 'OList';

export default OList;
