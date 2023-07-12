import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';

import * as S from './Alert.css';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success';
}

const getIconByVariant = (variant: AlertProps['variant']) =>
  (variant === 'warning' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      fontSize="xl"
      name="error"
    />
  )) ||
  (variant === 'success' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      fontSize="xl"
      name="check-circle"
    />
  )) ||
  (variant === 'info' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      fontSize="xl"
      name="info-circle"
    />
  )) ||
  (variant === 'danger' && (
    <Icon
      className={cn(S.icon, S.iconVariant[variant])}
      fontSize="xl"
      name="error-circle"
    />
  )) ||
  null;

const Alert: FC<AlertProps> = ({
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
