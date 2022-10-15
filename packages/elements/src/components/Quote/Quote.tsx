import React from 'react';
import cn from 'classnames';

import * as S from './Quote.css';

export type QuoteProps = React.HTMLAttributes<HTMLQuoteElement>;

const Quote: React.FC<QuoteProps & React.RefAttributes<HTMLQuoteElement>> =
  React.forwardRef(({ className, children, ...props }, res) => (
    <blockquote {...props} className={cn(S.root, className)} ref={res}>
      {children}
    </blockquote>
  ));

Quote.displayName = 'Quote';

export default Quote;
