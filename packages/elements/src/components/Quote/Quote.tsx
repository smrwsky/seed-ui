import cn from 'classnames';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

import * as S from './Quote.css';

export type QuoteProps = HTMLAttributes<HTMLQuoteElement>;

const Quote: FC<QuoteProps & RefAttributes<HTMLQuoteElement>> = forwardRef(
  ({ className, children, ...props }, res) => (
    <blockquote {...props} className={cn(S.root, className)} ref={res}>
      {children}
    </blockquote>
  ),
);

Quote.displayName = 'Quote';

export default Quote;
