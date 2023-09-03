import { atoms, Atoms, textBreak, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, LiHTMLAttributes, Ref } from 'react';

export interface ListItemProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, 'color'> {
  color?: Atoms['color'];
  fontWeight?: Atoms['fontWeight'];
  breakWord?: boolean;
  truncate?: boolean;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      breakWord,
      className,
      color,
      fontWeight,
      truncate,
      children,
      ...elemProps
    }: ListItemProps,
    ref: Ref<HTMLLIElement>,
  ): JSX.Element => (
    <li
      className={cn(
        atoms({
          color,
          fontWeight,
        }),
        breakWord && textBreak,
        truncate && textTruncate,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </li>
  ),
);

ListItem.displayName = 'ListItem';

export default ListItem;
