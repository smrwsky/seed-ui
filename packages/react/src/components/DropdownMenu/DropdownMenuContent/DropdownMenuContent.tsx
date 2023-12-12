'use client';

import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
} from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';

import { DropdownMenuContext } from '../DropdownMenu.context';

export interface DropdownMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialFocus?: number;
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
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
  } = useContext(DropdownMenuContext);

  return (
    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
      <Transition
        in={isOpen}
        mountOnEnter
        timeout={TRANSITION_TIMEOUT}
        unmountOnExit
      >
        {(status) => (
          <FloatingPortal>
            <FloatingFocusManager
              context={context}
              initialFocus={initialFocus}
              modal={false}
            >
              <div
                {...props}
                ref={refs.setFloating}
                className={cn(
                  atoms({
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 'xs',
                    maxHeight: 80,
                    borderRadius: 'lg',
                    outlineStyle: 'solid',
                    outline: 1,
                    outlineColor: 'neutral100',
                    bg: 'white',
                    boxShadow: {
                      default: 'lg',
                      focusVisible: 'lg',
                    },
                    zIndex: 10,
                    opacity: status === 'entered' ? 100 : 0,
                    transition: 'fade',
                    m: 0,
                    px: 0,
                    py: 0.5,
                  }),
                  className,
                )}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </Transition>
    </FloatingList>
  );
};

DropdownMenuContent.displayName = 'DropdownMenuContent';

export default DropdownMenuContent;
