import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { forwardRef, useContext } from 'react';
import { Transition } from 'react-transition-group';

import { useMergeRefs } from '../../../utils/use-merge-refs';
import { PopoverContext } from '../Popover.context';

export type PopoverContentProps = React.HTMLAttributes<HTMLDivElement>;

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, style, children, ...props }, ref) => {
    const {
      context,
      descriptionId,
      floatingStyles,
      labelId,
      modal,
      open,
      refs,
      getFloatingProps,
    } = useContext(PopoverContext);

    const meredRef = useMergeRefs(ref, refs.setFloating);

    return (
      <Transition
        in={open}
        mountOnEnter
        timeout={TRANSITION_TIMEOUT}
        unmountOnExit
      >
        {(status) => (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={modal}>
              <div
                ref={meredRef}
                aria-describedby={descriptionId}
                aria-labelledby={labelId}
                className={cn(
                  atoms({
                    opacity: status === 'entered' ? 100 : 0,
                    transition: 'fade',
                    zIndex: 40,
                  }),
                  className,
                )}
                style={{
                  ...floatingStyles,
                  ...style,
                }}
                {...getFloatingProps(props)}
              >
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </Transition>
    );
  },
);

PopoverContent.displayName = 'PopoverContent';

export default PopoverContent;
