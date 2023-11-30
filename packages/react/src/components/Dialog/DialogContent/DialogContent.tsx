'use client';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';

import { DialogContext } from '../Dialog.context';

export type DialogContentProps = React.HTMLAttributes<HTMLDivElement>;

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

const overlaySizeStyles = {
  sm: atoms({
    justifyContent: {
      mobile: 'flex-end',
      mobileLg: 'center',
    },
    overflowY: 'auto',
  }),
  md: atoms({
    justifyContent: 'center',
    overflowY: { mobile: 'hidden', tablet: 'auto' },
  }),
  lg: atoms({
    justifyContent: 'flex-start',
    overflowY: { mobile: 'hidden', tablet: 'auto' },
  }),
};

const contentSizeStyles = {
  sm: atoms({
    borderRadiusTop: 'xl',
    borderRadiusBottom: {
      mobile: 'none',
      mobileLg: 'xl',
    },
    boxShadow: 'md',
    maxWidth: {
      mobile: 'full',
      mobileLg: 'sm',
    },
    overflow: 'hidden',
  }),
  md: atoms({
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
    borderRadius: {
      mobile: 'none',
      tablet: 'xl',
    },
    boxShadow: 'md',
    maxWidth: {
      mobile: 'full',
      tablet: 'lg',
    },
    overflow: {
      mobile: 'auto',
      tablet: 'hidden',
    },
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
      tablet: 'xl',
    },
    boxShadow: 'md',
    overflow: {
      mobile: 'auto',
      tablet: 'hidden',
    },
  }),
};

const DialogContent: React.FC<DialogContentProps> = ({
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
    labelId,
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
                px: { mobile: 0, tablet: 4 },
                py: { mobile: 0, tablet: 6 },
                zIndex: 30,
              }),
              overlaySizeStyles[size],
            )}
            lockScroll
          >
            <FloatingFocusManager context={context}>
              <div
                {...props}
                aria-describedby={descriptionId}
                aria-labelledby={labelId}
                className={cn(
                  atoms({
                    flex: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'full',
                    bg: 'white',
                    transition: 'base',
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

DialogContent.displayName = 'DialogContent';

export default DialogContent;
