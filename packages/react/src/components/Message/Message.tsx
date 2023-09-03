import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, useEffect } from 'react';

import { useTimeout } from '../../utils/use-timeout';
import { Text } from '../Text';

import * as S from './Message.css';
import { MessageIcon } from './MessageIcon';

export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The duration in milliseconds for which the message will be automatically
   * closed.
   */
  autoCloseTimeout?: number;

  /**
   * The variant or type of the message.
   */
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'light';

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

const Message: FC<MessageProps> = ({
  autoCloseTimeout,
  className,
  children,
  role = 'alert',
  variant = 'light',
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
        S.root,
        visible && S.rootVisible,
        atoms({
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 'xs',
          minWidth: 40,
          borderRadius: 'lg',
          boxShadow: 'md',
          px: 3,
          py: 1.5,
        }),
        className,
      )}
      role={role}
      {...props}
    >
      <MessageIcon variant={variant} />

      <Text className={atoms({ pt: 0.5 })} fontSize="sm" truncate>
        {children}
      </Text>
    </div>
  );
};

export default Message;
