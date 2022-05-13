import React, { HTMLAttributes, Ref, forwardRef } from 'react';
import cn from 'classnames';
import { atoms, MarginProps } from '@seed-ui/styles';

import * as S from './Quote.css';

export type QuoteProps = MarginProps & HTMLAttributes<HTMLQuoteElement>;

function Quote(
  { m, mb, ml, mr, mt, mx, my, className, children, ...props }: QuoteProps,
  res: Ref<HTMLQuoteElement>,
) {
  return (
    <blockquote
      {...props}
      className={cn(
        S.root,
        atoms({
          m,
          mb,
          ml,
          mr,
          mt,
          mx,
          my,
        }),
        className,
      )}
      ref={res}
    >
      {children}
    </blockquote>
  );
}

export default forwardRef(Quote);
