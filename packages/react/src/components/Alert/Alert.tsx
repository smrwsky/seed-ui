import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Text } from '../Text';

export type AlertVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: AlertVariant;
}

const rootVariantStyles: Record<AlertVariant, string> = {
  primary: atoms({
    borderColor: 'primary200',
    color: 'primary500',
    bg: 'primary50',
  }),
  success: atoms({
    borderColor: 'success200',
    color: 'success500',
    bg: 'success50',
  }),
  warning: atoms({
    borderColor: 'warning200',
    color: 'warning500',
    bg: 'warning50',
  }),
  danger: atoms({
    borderColor: 'danger200',
    color: 'danger500',
    bg: 'danger50',
  }),
};

const iconByVariant = {
  primary: 'info-circle',
  success: 'check-circle',
  warning: 'error',
  danger: 'error-circle',
};

const iconVariantStyles = {
  primary: atoms({
    color: 'primary400',
  }),
  success: atoms({
    color: 'success400',
  }),
  warning: atoms({
    color: 'warning400',
  }),
  danger: atoms({
    color: 'danger400',
  }),
};

const Alert: FC<AlertProps> = ({
  variant = 'primary',
  children,
  className,
  role = 'alert',
  ...props
}) => (
  <Flex
    className={cn(
      atoms({
        borderStyle: 'solid',
        border: 1,
        borderRadius: 'lg',
      }),
      rootVariantStyles[variant],
      className,
    )}
    p={3}
    role={role}
    {...props}
  >
    <Icon
      className={cn(
        atoms({
          mr: 3,
        }),
        iconVariantStyles[variant],
      )}
      fontSize="2xl"
      name={iconByVariant[variant]}
    />

    <Text color="inherit">{children}</Text>
  </Flex>
);

export default Alert;
