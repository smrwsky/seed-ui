'use client';

import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
} from 'react';

import { useTimeout } from '../../utils/use-timeout';
import { ClearIcon } from '../ClearIcon';
import { Icon } from '../Icon';
import { Text } from '../Text';

export type ToastVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the duration (in milliseconds) after which the toast automatically closes if set.
   */
  autoHideDuration?: number;

  /**
   * Represents the title or main content of the toast component.
   */
  children?: ReactNode;

  /**
   * Aria label for close button.
   */
  closeLabel?: string;

  /**
   * Specifies whether the toast should be closed when the escape key is pressed.
   */
  closeOnEscKey?: boolean;

  /**
   * Represents the icon of the toast component.
   */
  icon?: ReactElement;

  /**
   * Determines the visual style or variant of the toast component.
   */
  variant?: ToastVariant;

  /**
   * Indicates whether the toast component is currently visible or not.
   */
  visible?: boolean;

  /**
   * A callback function triggered when the toast is closed manually.
   */
  onClose?: () => void;

  /**
   * A callback function triggered when the toast is closed automatically after timeout.
   */
  onHide?: () => void;

  /**
   * A callback function triggered after the hide animation has finished.
   */
  onAfterHide?: () => void;
}

const iconByVariant: Record<ToastVariant, ReactNode> = {
  primary: <Icon color="primary400" fontSize="3xl" name="info-circle" />,
  danger: <Icon color="danger400" fontSize="3xl" name="error-circle" />,
  warning: <Icon color="warning400" fontSize="3xl" name="error" />,
  success: <Icon color="success400" fontSize="3xl" name="check-circle" />,
};

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      autoHideDuration,
      children,
      className,
      closeLabel = 'Close',
      closeOnEscKey = true,
      icon,
      role = 'alert',
      visible = true,
      variant = 'primary',
      onClose,
      onHide,
      onAfterHide,
      ...props
    },
    ref,
  ) => {
    const { setTimeout } = useTimeout();

    useEffect(() => {
      if (autoHideDuration != null) {
        setTimeout(() => {
          onHide?.();
        }, autoHideDuration);
      }
    }, [autoHideDuration, onHide, setTimeout]);

    useEffect(() => {
      if (!visible && onAfterHide) {
        setTimeout(() => {
          onAfterHide();
        }, 200);
      }
    }, [onAfterHide, setTimeout, visible]);

    useEffect(() => {
      if (!closeOnEscKey || !onHide) {
        return;
      }

      function handler(e: KeyboardEvent) {
        if (e.key === 'Escape') {
          e.stopPropagation();
          onHide?.();
        }
      }

      document.addEventListener('keydown', handler, true);

      return () => {
        document.removeEventListener('keydown', handler, true);
      };
    }, [closeOnEscKey, onHide]);

    return (
      <div
        className={cn(
          atoms({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: 'full',
            maxWidth: 'sm',
            borderRadius: 'lg',
            borderStyle: 'solid',
            border: 1,
            borderColor: 'neutral100',
            backgroundColor: 'white',
            boxShadow: 'md',
            transition: 'fade',
            opacity: visible ? 100 : 0,
            overflow: 'hidden',
            pointerEvents: 'auto',
            py: 3,
            pr: 12,
            pl: 4,
          }),
          className,
        )}
        ref={ref}
        role={role}
        {...props}
      >
        {icon ?? iconByVariant[variant]}

        <Text as="div" fontSize="sm" ml={3}>
          {children}
        </Text>

        <ClearIcon
          aria-label={closeLabel}
          className={atoms({
            position: 'absolute',
            top: 2,
            right: 2,
          })}
          role="button"
          tabIndex={0}
          onMouseDown={onClose}
        />
      </div>
    );
  },
);

Toast.displayName = 'Toast';

export default Toast;
