import { Atoms, atoms, textBreak, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, HTMLAttributes } from 'react';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  as?: ElementType;
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
  textAlign?: Atoms['textAlign'];
  textDecoration?: Atoms['textDecoration'];
  breakWord?: boolean;
  truncate?: boolean;
}

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: As = 'p',
      color,
      breakWord,
      className,
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
      textAlign,
      textDecoration,
      truncate,
      children,
      ...elemProps
    }: TextProps,
    ref,
  ) => (
    <As
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
          textAlign,
          textDecoration,
        }),
        breakWord && textBreak,
        truncate && textTruncate,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  ),
);

Text.displayName = 'Text';

export default Text;
