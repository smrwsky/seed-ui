import cn from 'classnames';
import {
  cloneElement,
  CSSProperties,
  ElementType,
  Fragment,
  HTMLAttributes,
  isValidElement,
  ReactNode,
  useMemo,
} from 'react';
import Transition, {
  TransitionStatus,
} from 'react-transition-group/Transition';

import * as S from './Animation.css';

export type AnimationType = 'fade' | 'slide';

export interface AnimationProps {
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  className?: string;
  children: ReactNode;
  duration?: number;
  in?: boolean | undefined;
  style?: CSSProperties;
  type: AnimationType;
}

function Animation({
  as: Element = Fragment,
  in: inProp,
  duration = 200,
  type,
  style,
  className,
  children,
}: AnimationProps): JSX.Element {
  const transitionTimeout = useMemo(
    () => ({
      appear: 0,
      enter: 0,
      exit: duration,
    }),
    [duration],
  );

  return (
    <Transition in={inProp} timeout={transitionTimeout}>
      {(status: TransitionStatus) =>
        Element === Fragment &&
        isValidElement<HTMLAttributes<HTMLElement>>(children) ? (
          cloneElement<HTMLAttributes<HTMLElement>>(children, {
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
