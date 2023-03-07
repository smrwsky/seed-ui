import cn from 'classnames';
import {
  ComponentPropsWithRef,
  FC,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import ReactModal, { Aria, OnAfterOpenCallback } from 'react-modal';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

import * as S from './Modal.css';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalContext, ModalSize } from './context';

export interface ModalProps {
  appElement?: HTMLElement | HTMLElement[] | HTMLCollection | NodeList;
  aria?: Aria;
  ariaHideApp?: boolean;
  children?: ReactNode;
  contentElement?: (
    props: ComponentPropsWithRef<'div'>,
    children: ReactNode,
  ) => ReactElement;
  contentLabel?: string;
  contentRef?: (instance: HTMLDivElement) => void;
  data?: Record<string, string>;
  id?: string;
  onAfterClose?: () => void;
  onAfterOpen?: OnAfterOpenCallback;
  onClose: () => void;
  open: boolean;
  overlayElement?: (
    props: ComponentPropsWithRef<'div'>,
    contentEl: ReactElement,
  ) => ReactElement;
  overlayRef?: (instance: HTMLDivElement) => void;
  parentSelector?(): HTMLElement;
  preventScroll?: boolean;
  role?: string | null;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldFocusAfterRender?: boolean;
  shouldReturnFocusAfterClose?: boolean;
  size?: ModalSize;
  testId?: string;
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

const Modal: FC<ModalProps> = ({
  open,
  size = 'md',
  children,
  onClose,
  ...modalProps
}) => {
  const context = useMemo(() => ({ size }), [size]);

  return (
    <ModalContext.Provider value={context}>
      <Transition in={open} timeout={TRANSITION_TIMEOUT}>
        {(status: TransitionStatus, ...childProps) => (
          <ReactModal
            {...modalProps}
            {...childProps}
            className={cn(
              S.content,
              S.contentSize[size],
              status === 'entered' && S.contentEntered,
            )}
            closeTimeoutMS={200}
            isOpen={status !== 'exited'}
            overlayClassName={cn(
              S.overlay,
              S.overlaySize[size],
              status === 'entered' && S.overlayEntered,
            )}
            onRequestClose={onClose}
          >
            {children}
          </ReactModal>
        )}
      </Transition>
    </ModalContext.Provider>
  );
};

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
