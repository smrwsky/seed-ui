import { atoms, Atoms, listTypeDash, listTypeDisc } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export type UListType = 'disc' | 'dash' | 'none';

export interface UListProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'color' | 'type'> {
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
  type?: UListType;
}

const UList = forwardRef<HTMLUListElement, UListProps>(
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
      type = 'disc',
      children,
      ...elemProps
    },
    ref,
  ) => (
    <ul
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
        type === 'disc' && listTypeDisc,
        type === 'dash' && listTypeDash,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </ul>
  ),
);

UList.displayName = 'UList';

export default UList;
