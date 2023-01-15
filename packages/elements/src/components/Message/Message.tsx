import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import Text from '../Text';

import * as S from './Message.css';

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'light';
}

const getIconByVariant = (variant: MessageProps['variant']) =>
  (variant === 'danger' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      name="error-circle"
      size="md"
    />
  )) ||
  (variant === 'warning' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      name="error"
      size="md"
    />
  )) ||
  (variant === 'success' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      name="check-circle"
      size="md"
    />
  )) ||
  (variant === 'info' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      name="info-circle"
      size="md"
    />
  )) ||
  null;

const Message: React.FC<MessageProps> = ({
  className,
  children,
  role = 'alert',
  variant = 'light',
  ...props
}) => {
  const icon = getIconByVariant(variant);

  return (
    <div
      className={cn(S.root, S.rootVariant[variant], className)}
      role={role}
      {...props}
    >
      {icon}

      <Text className={S.content} size="sm" truncate>
        {children}
      </Text>
    </div>
  );
};

export default Message;
