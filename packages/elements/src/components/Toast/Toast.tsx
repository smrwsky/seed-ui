import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import IconButton from '../IconButton';
import Text from '../Text';

import * as S from './Toast.css';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactElement;
  onClose?: () => void;
  title?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'default';
}

const getIconByVariant = (variant: ToastProps['variant']) =>
  (variant === 'danger' && <Icon name="error-circle" size="md" />) ||
  (variant === 'warning' && <Icon name="error" size="md" />) ||
  (variant === 'success' && <Icon name="check-circle" size="md" />) ||
  (variant === 'info' && <Icon name="info-circle" size="md" />) ||
  null;

const Toast: React.FC<ToastProps> = ({
  className,
  children,
  icon,
  role = 'alert',
  title,
  variant = 'default',
  onClose,
  ...props
}) => {
  const displayIcon = icon || getIconByVariant(variant);

  return (
    <div className={cn(S.root, className)} role={role} {...props}>
      {React.isValidElement<React.HTMLAttributes<HTMLElement>>(displayIcon) &&
        React.cloneElement(displayIcon, {
          className: cn(S.icon, S.iconVariant[variant]),
        })}

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
        onClick={onClose}
        size="sm"
        tabIndex={0}
        variant="secondary"
      >
        <Icon name="x" />
      </IconButton>
    </div>
  );
};

export default Toast;
