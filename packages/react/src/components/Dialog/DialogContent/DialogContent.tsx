import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, useContext } from 'react';
import { Transition } from 'react-transition-group';

import { DialogContext } from '../Dialog.context';

export type DialogContentProps = HTMLAttributes<HTMLDivElement>;

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

const overlaySizeStyles = {
  sm: atoms({
    justifyContent: 'center',
    overflowY: 'auto',
    px: 2,
    py: 4,
  }),
  md: atoms({
    justifyContent: 'center',
    overflowY: 'auto',
    px: 2,
    py: 4,
  }),
  lg: atoms({
    justifyContent: 'flex-start',
    overflowY: { mobile: 'hidden', tablet: 'auto' },
    p: { mobile: 0, tablet: 4 },
  }),
};

const contentSizeStyles = {
  sm: atoms({
    borderRadius: 'lg',
    boxShadow: 'md',
    maxWidth: 'sm',
  }),
  md: atoms({
    borderRadius: 'lg',
    boxShadow: 'md',
    maxWidth: 'lg',
  }),
  lg: atoms({
    position: {
      mobile: 'absolute',
      tablet: 'static',
    },
    inset: 0,
    width: 'full',
    height: {
      mobile: 'full',
      tablet: 'auto',
    },
    maxWidth: {
      mobile: 'full',
      tablet: '4xl',
    },
    borderRadius: {
      mobile: 'none',
      tablet: 'lg',
    },
    boxShadow: 'md',
    py: {
      mobile: 14,
      tablet: 0,
    },
    overflow: {
      mobile: 'auto',
      tablet: 'hidden',
    },
  }),
};

const DialogContent: FC<DialogContentProps> = ({
  children,
  className,
  ...props
}) => {
  const {
    context,
    getFloatingProps,
    open,
    refs,
    size,
    titleId,
    descriptionId,
  } = useContext(DialogContext);

  return (
    <Transition
      in={open}
      mountOnEnter
      timeout={TRANSITION_TIMEOUT}
      unmountOnExit
    >
      {(status) => (
        <FloatingPortal>
          <FloatingOverlay
            className={cn(
              atoms({
                position: 'fixed',
                inset: 0,
                size: 'full',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bg: 'dark500',
                transition: 'fade',
                opacity: status === 'entered' ? 100 : 0,
                zIndex: 40,
              }),
              overlaySizeStyles[size],
            )}
            lockScroll
          >
            <FloatingFocusManager context={context}>
              <div
                {...props}
                aria-describedby={descriptionId}
                aria-labelledby={titleId}
                className={cn(
                  atoms({
                    width: 'full',
                    bg: 'white',
                    transition: 'base',
                    overflow: 'hidden',
                    opacity: status === 'entered' ? 100 : 0,
                  }),
                  contentSizeStyles[size],
                  className,
                )}
                ref={refs.setFloating}
                {...getFloatingProps()}
              >
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </Transition>
  );
};

export default DialogContent;
