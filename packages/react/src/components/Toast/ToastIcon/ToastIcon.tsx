import cn from 'classnames';
import React from 'react';

import { Icon } from '../../Icon';

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
      <Icon className={iconClassName} name="error-circle" />
    )) ||
    (variant === 'warning' && (
      <Icon className={iconClassName} name="error" />
    )) ||
    (variant === 'success' && (
      <Icon className={iconClassName} name="check-circle" />
    )) ||
    (variant === 'info' && (
      <Icon className={iconClassName} name="info-circle" />
    )) ||
    null
  );
};

export default React.memo(ToastIcon);
