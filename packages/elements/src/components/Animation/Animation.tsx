import React, {
  cloneElement,
  ElementType,
  Fragment,
  isValidElement,
  ReactNode,
} from 'react';
import Transition, {
  EndHandler,
  TransitionProps,
  TransitionStatus,
} from 'react-transition-group/Transition';
import cn from 'classnames';

import * as S from './Animation.css';

export type AnimationType = 'fade' | 'slide';

export type AnimationProps = Omit<TransitionProps, 'addEndListener'> & {
  as?: ElementType;
  addEndListener?: EndHandler<HTMLElement>;
  type: AnimationType;
  className?: string;
  children: ReactNode;
  duration?: number;
};

function Animation({
  as: Element = Fragment,
  in: inProp,
  addEndListener,
  duration = 200,
  type,
  style,
  className,
  children,
  ...transitionProps
}: AnimationProps): JSX.Element {
  function handleAddEndListener(done: () => void) {
    addEndListener?.(done);
  }

  return (
    <Transition
      addEndListener={handleAddEndListener}
      in={inProp}
      timeout={{
        appear: 0,
        enter: 0,
        exit: duration,
      }}
      {...transitionProps}
    >
      {(status: TransitionStatus) =>
        Element === Fragment && isValidElement(children) ? (
          cloneElement(children, {
            className: cn(
              S.rootType[type],
              status === 'entered' && S.rootEntered[type],
              !inProp && status === 'exited' && S.rootExited,
              className,
              children.props.className,
            ),
            style: {
              ...style,
              ...children.props.style,
            },
          })
        ) : (
          <Element
            className={cn(
              S.rootType[type],
              status === 'entered' && S.rootEntered[type],
              !inProp && status === 'exited' && S.rootExited,
              className,
            )}
            style={style}
          >
            {children}
          </Element>
        )
      }
    </Transition>
  );
}

export default Animation;
