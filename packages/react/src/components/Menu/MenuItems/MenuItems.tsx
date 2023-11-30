'use client';

import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
} from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { useContext } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { MenuContext } from '../Menu.context';
import { MenuType, MenuVariant } from '../types';

export interface DropdownMenuItemsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialFocus?: number;
}

const INLINE_TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

const FLYOUT_TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

const typeStyles = (type: MenuType) =>
  type === 'inline'
    ? atoms({
        px: 0,
        py: 0.5,
        boxShadow: {
          focusVisible: 'none',
        },
      })
    : atoms({
        maxWidth: 'xs',
        maxHeight: 80,
        borderRadius: 'lg',
        border: 'thin',
        boxShadow: {
          default: 'lg',
          focusVisible: 'lg',
        },
        px: 0,
        py: 0.5,
        zIndex: 10,
      });

const variantStyles = (variant: MenuVariant) =>
  variant === 'dark'
    ? atoms({
        bg: 'primary700',
        borderColor: 'dark100',
      })
    : atoms({
        bg: 'white',
        borderColor: 'neutral100',
      });

const MenuItems: React.FC<DropdownMenuItemsProps> = ({
  children,
  className,
  initialFocus = 0,
  ...props
}) => {
  const {
    context,
    elementsRef,
    floatingStyles,
    getFloatingProps,
    isOpen,
    labelsRef,
    refs,
    type,
    variant,
  } = useContext(MenuContext);

  const renderContent = (status: TransitionStatus) => (
    <FloatingFocusManager
      context={context}
      initialFocus={initialFocus}
      modal={false}
    >
      <div
        {...props}
        className={cn(
          atoms({
            display: 'flex',
            flexDirection: 'column',
            m: 0,
            zIndex: 10,
          }),
          typeStyles(type),
          variantStyles(variant),
          type === 'inline'
            ? atoms({
                transition: 'collapse',
                maxHeight: status === 'entered' ? 96 : 0,
                overflow: 'hidden',
              })
            : atoms({
                opacity: status === 'entered' ? 100 : 0,
                transition: 'fade',
              }),
          className,
        )}
        ref={refs.setFloating}
        style={type === 'inline' ? undefined : floatingStyles}
        {...getFloatingProps()}
      >
        {children}
      </div>
    </FloatingFocusManager>
  );

  return (
    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
      <Transition
        in={isOpen}
        mountOnEnter
        timeout={
          type === 'inline'
            ? INLINE_TRANSITION_TIMEOUT
            : FLYOUT_TRANSITION_TIMEOUT
        }
        unmountOnExit
      >
        {(status) =>
          type === 'inline' ? (
            renderContent(status)
          ) : (
            <FloatingPortal>{renderContent(status)}</FloatingPortal>
          )
        }
      </Transition>
    </FloatingList>
  );
};

export default MenuItems;
