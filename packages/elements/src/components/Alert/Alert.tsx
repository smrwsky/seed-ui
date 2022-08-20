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
  (variant === 'warning' && <Icon name="error" size="md" />) ||
  (variant === 'success' && <Icon name="check-circle" size="md" />) ||
  (variant === 'info' && <Icon name="info-circle" size="md" />) || (
    <Icon name="error-circle" size="md" />
  );

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
      {React.cloneElement(icon, {
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
    </div>
  );
};

export default Alert;
