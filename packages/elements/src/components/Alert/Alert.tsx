import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import Text from '../Text';

import * as S from './Alert.css';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  title?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success';
};

const getIconByVariant = (variant: AlertProps['variant']) =>
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
  (variant === 'danger' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      name="error-circle"
      size="md"
    />
  )) ||
  null;

const Alert: React.FC<AlertProps> = ({
  title,
  variant = 'danger',
  children,
  className,
  role = 'alert',
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

      <Text as="div" className={S.content} size="sm">
        {title && (
          <Text as="div" bold className={S.title}>
            {title}
          </Text>
        )}

        {children}
      </Text>
    </div>
  );
};

export default Alert;
