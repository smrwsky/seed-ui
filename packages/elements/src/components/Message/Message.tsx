import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import * as S from './Message.css';

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactElement;
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'default';
}

const getIconByVariant = (variant: MessageProps['variant']) =>
  (variant === 'danger' && <Icon name="error-circle" size="md" />) ||
  (variant === 'warning' && <Icon name="error" size="md" />) ||
  (variant === 'success' && <Icon name="check-circle" size="md" />) ||
  (variant === 'info' && <Icon name="info-circle" size="md" />) ||
  null;

const Message: React.FC<MessageProps> = ({
  className,
  children,
  icon,
  role = 'alert',
  variant = 'default',
  ...props
}) => {
  const displayIcon = icon || getIconByVariant(variant);

  return (
    <div
      className={cn(S.root, S.rootVariant[variant], className)}
      role={role}
      {...props}
    >
      {React.isValidElement<React.HTMLAttributes<HTMLElement>>(displayIcon) &&
        React.cloneElement(displayIcon, {
          className: cn(S.icon, S.iconVariant[variant]),
        })}

      <div className={S.content}>{children}</div>
    </div>
  );
};

export default Message;
