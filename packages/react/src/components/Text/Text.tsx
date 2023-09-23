import { Atoms, atoms, textBreak, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { AllHTMLAttributes, ElementType, forwardRef } from 'react';

export interface TextProps
  extends Partial<
      Pick<
        Atoms,
        | 'color'
        | 'fontFamily'
        | 'fontSize'
        | 'fontWeight'
        | 'letterSpacing'
        | 'lineHeight'
        | 'm'
        | 'mt'
        | 'mb'
        | 'ml'
        | 'mr'
        | 'mx'
        | 'my'
        | 'textAlign'
        | 'textDecoration'
      >
    >,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color'> {
  as?: ElementType;
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
      ...props
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
      {...props}
    >
      {children}
    </As>
  ),
);

Text.displayName = 'Text';

export default Text;
