import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, useEffect } from 'react';

import { useTimeout } from '../../utils/use-timeout';
import { Icon } from '../Icon';
import { Text } from '../Text';

export type MessageVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The duration in milliseconds for which the message will be automatically
   * closed.
   */
  autoCloseTimeout?: number;

  /**
   * The variant or type of the message.
   */
  variant?: MessageVariant;

  /**
   * Determines whether the message is visible or not.
   */
  visible?: boolean;

  /**
   * Callback function to be executed when the message is being hidden.
   */
  onHide?: () => void;

  /**
   * Callback function to be executed after the message has been hidden.
   */
  onAfterHide?: () => void;
}

const iconByVariant: Record<MessageVariant, string> = {
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

const Message: FC<MessageProps> = ({
  autoCloseTimeout,
  className,
  children,
  role = 'alert',
  variant = 'primary',
  visible = true,
  onHide,
  onAfterHide,
  ...props
}) => {
  const { setTimeout } = useTimeout();

  useEffect(() => {
    if (autoCloseTimeout && onHide) {
      setTimeout(() => {
        onHide();
      }, autoCloseTimeout);
    }
  }, [autoCloseTimeout, onHide, setTimeout]);

  useEffect(() => {
    if (!visible && onAfterHide) {
      setTimeout(() => {
        onAfterHide();
      }, 200);
    }
  }, [onAfterHide, setTimeout, visible]);

  return (
    <div
      className={cn(
        atoms({
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 'xs',
          minWidth: 40,
          borderStyle: 'solid',
          border: 1,
          borderColor: 'neutral100',
          borderRadius: 'lg',
          color: 'neutral900',
          bg: 'white',
          boxShadow: 'md',
          transition: 'fade',
          px: 3,
          py: 1.5,
          opacity: visible ? 100 : 0,
        }),
        className,
      )}
      role={role}
      {...props}
    >
      <Icon
        className={cn(
          atoms({
            mr: 1.5,
          }),
          iconVariantStyles[variant],
        )}
        fontSize="lg"
        name={iconByVariant[variant]}
      />

      <Text fontSize="sm" truncate>
        {children}
      </Text>
    </div>
  );
};

export default Message;
