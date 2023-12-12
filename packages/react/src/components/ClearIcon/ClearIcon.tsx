import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { memo } from 'react';

import { Icon } from '../Icon';

export interface ClearIconProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  color?: Atoms['color'];
  disabled?: boolean;
  fontSize?: Atoms['fontSize'];
}

const ClearIcon = React.forwardRef<HTMLElement, ClearIconProps>(
  ({ color, fontSize, className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={cn(
        atoms({
          opacity: {
            default: 65,
            hover: 100,
          },
          transition: 'fade',
          cursor: 'pointer',
        }),
        className,
      )}
      color={color}
      fontSize={fontSize}
      name="x"
      {...props}
    />
  ),
);

ClearIcon.displayName = 'ClearIcon';

export default memo(ClearIcon);
