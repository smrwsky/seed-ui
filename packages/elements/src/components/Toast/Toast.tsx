import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, {
  forwardRef,
  HTMLAttributes,
  KeyboardEventHandler,
  useCallback,
  useEffect,
} from 'react';

import { useTimeout } from '../../utils/use-timeout';
import { IconButton } from '../IconButton';
import { Text } from '../Text';

import * as S from './Toast.css';
import { ToastIcon } from './ToastIcon';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the duration (in milliseconds) after which the toast automatically closes if set.
   */
  autoCloseTimeout?: number;

  /**
   * Aria label for close button.
   */
  closeLabel?: string;

  /**
   * Represents the title or main content of the toast component.
   */
  title?: string;

  /**
   * Determines the visual style or variant of the toast component.
   */
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'light';

  /**
   * Indicates whether the toast component is currently visible or not.
   */
  visible?: boolean;

  /**
   * A callback function triggered when the toast is hidden or dismissed.
   */
  onHide?: () => void;

  /**
   * A callback function triggered after the toast has been hidden or dismissed.
   */
  onAfterHide?: () => void;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      autoCloseTimeout,
      className,
      closeLabel = 'Close',
      children,
      role = 'alert',
      title,
      visible = true,
      variant = 'light',
      tabIndex = 0,
      onHide,
      onAfterHide,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const { setTimeout } = useTimeout();

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
      (e) => {
        if (e.key === 'Esc') {
          onHide?.();
        }

        onKeyDown?.(e);
      },
      [onHide, onKeyDown],
    );

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
            position: 'relative',
            display: 'flex',
            width: 'full',
            maxWidth: 96,
            borderRadius: 'lg',
            border: 'thin',
            borderColor: 'neutral100',
            backgroundColor: 'white',
            boxShadow: 'md',
            py: 2,
            pr: 11,
            pl: 3,
          }),
          className,
        )}
        ref={ref}
        role={role}
        tabIndex={tabIndex}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <ToastIcon className={atoms({ mr: 2 })} variant={variant} />

        <Text
          as="div"
          className={atoms({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 6,
            mt: 0.5,
          })}
          size="sm"
        >
          {title && (
            <Text as="div" bold className={atoms({ mt: '-0.5', mb: 1 })}>
              {title}
            </Text>
          )}

          {children}
        </Text>

        <IconButton
          aria-label={closeLabel}
          className={cn(
            S.close,
            atoms({
              top: 1,
              right: 1,
            }),
          )}
          icon="x"
          rounded
          size="xs"
          tabIndex={0}
          title=""
          variant="tertiary"
          onClick={onHide}
        />
      </div>
    );
  },
);

Toast.displayName = 'Toast';

export default Toast;
