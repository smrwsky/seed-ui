import React from 'react';
import Transition, {
  EndHandler,
  TransitionProps,
  TransitionStatus,
} from 'react-transition-group/Transition';
import cn from 'classnames';

import * as S from './Fade.css';

export type FadeProps = Omit<TransitionProps, 'addEndListener'> & {
  addEndListener?: EndHandler<HTMLElement>;
  children: React.ReactElement;
  duration?: 150 | 300 | 600;
};

function Fade({
  in: inProp,
  addEndListener,
  duration = 300,
  style,
  children,
  ...transitionProps
}: FadeProps): JSX.Element {
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
      {(status: TransitionStatus, ...childProps) =>
        React.cloneElement(children, {
          ...childProps,
          className: cn(
            S.root,
            status === 'entered' && S.entered,
            !inProp && status === 'exited' && S.exited,
            S.duration[duration],
            children.props.className,
          ),
          style: {
            ...style,
            ...children.props.style,
          },
        })
      }
    </Transition>
  );
}

export default Fade;
