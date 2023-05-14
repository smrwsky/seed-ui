import { Icon } from '@seed-ui/icons';
import cn from 'classnames';
import React from 'react';

import * as S from './ToastIcon.css';

export interface ToastIconProps {
  className?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'light';
}

const ToastIcon: React.FC<ToastIconProps> = ({
  className,
  variant = 'light',
}) => {
  const iconClassName = cn(S.rootVariant[variant], className);

  return (
    (variant === 'danger' && (
      <Icon className={iconClassName} name="error-circle" size="lg" />
    )) ||
    (variant === 'warning' && (
      <Icon className={iconClassName} name="error" size="lg" />
    )) ||
    (variant === 'success' && (
      <Icon className={iconClassName} name="check-circle" size="lg" />
    )) ||
    (variant === 'info' && (
      <Icon className={iconClassName} name="info-circle" size="lg" />
    )) ||
    null
  );
};

export default React.memo(ToastIcon);
