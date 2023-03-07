import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './Quote.css';

export type QuoteProps = HTMLAttributes<HTMLQuoteElement>;

const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, children, ...props }, res) => (
    <blockquote {...props} className={cn(S.root, className)} ref={res}>
      {children}
    </blockquote>
  ),
);

Quote.displayName = 'Quote';

export default Quote;
