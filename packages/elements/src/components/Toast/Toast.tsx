import { Icon } from '@seed-ui/icons';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { IconButton } from '../IconButton';
import { Text } from '../Text';

import * as S from './Toast.css';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  title?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'light';
}

const getIconByVariant = (variant: ToastProps['variant']) =>
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

const Toast: FC<ToastProps> = ({
  className,
  children,
  role = 'alert',
  title,
  variant = 'light',
  onClose,
  ...props
}) => {
  const icon = getIconByVariant(variant);

  return (
    <div className={cn(S.root, className)} role={role} {...props}>
      {icon}

      <div className={S.content}>
        {title && (
          <Text as="div" bold className={S.title}>
            {title}
          </Text>
        )}

        {children}
      </div>

      <IconButton
        className={S.close}
        icon="x"
        onClick={onClose}
        rounded
        size="xs"
        tabIndex={0}
        variant="tertiary"
      />
    </div>
  );
};

export default Toast;
