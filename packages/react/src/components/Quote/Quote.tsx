import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export type QuoteProps = HTMLAttributes<HTMLQuoteElement>;

const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, children, ...props }, res) => (
    <blockquote
      {...props}
      className={cn(
        atoms({
          borderLeft: 'thick',
          borderColor: 'primary500',
          pl: 3,
        }),
        className,
      )}
      ref={res}
    >
      {children}
    </blockquote>
  ),
);

Quote.displayName = 'Quote';

export default Quote;
