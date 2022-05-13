import React from 'react';
import cn from 'classnames';
import ReactModal, { Aria, OnAfterOpenCallback } from 'react-modal';
import { TransitionStatus } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';

import useTimeout from '../../utils/use-timeout';

import { ModalProvider, ModalSize } from './Modal.Provider';
import { ModalHeader } from './Modal.Header';
import ModalBody from './Modal.Body';
import ModalFooter from './Modal.Footer';
import * as S from './Modal.css';

export type ModalProps = {
  appElement?: HTMLElement | HTMLElement[] | HTMLCollection | NodeList;
  aria?: Aria;
  ariaHideApp?: boolean;
  children?: React.ReactNode;
  closeButtonLabel?: string;
  contentElement?: (
    props: React.ComponentPropsWithRef<'div'>,
    children: React.ReactNode,
  ) => React.ReactElement;
  contentLabel?: string;
  contentRef?: (instance: HTMLDivElement) => void;
  data?: Record<string, string>;
  id?: string;
  onAfterClose?: () => void;
  onAfterOpen?: OnAfterOpenCallback;
  onClose: () => void;
  open: boolean;
  overlayElement?: (
    props: React.ComponentPropsWithRef<'div'>,
    contentEl: React.ReactElement,
  ) => React.ReactElement;
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
};

const MODAL_ANIMATION_DURATION = 150;

function Modal({
  open,
  size = 'md',
  children,
  onClose,
  ...modalProps
}: ModalProps): JSX.Element {
  const { setTimeout } = useTimeout();

  function handleRequestClose() {
    setTimeout(() => {
      onClose();
    }, 300);
  }

  return (
    <ModalProvider size={size}>
      <Transition
        in={open}
        timeout={{
          appear: 0,
          enter: 0,
          exit: MODAL_ANIMATION_DURATION,
        }}
      >
        {(status: TransitionStatus, ...childProps) => (
          <ReactModal
            {...modalProps}
            {...childProps}
            className={cn(
              S.content,
              S.contentSize[size],
              status === 'entered' && S.contentEntered,
            )}
            isOpen={status !== 'exited'}
            onRequestClose={handleRequestClose}
            overlayClassName={cn(
              S.overlay,
              S.overlaySize[size],
              status === 'entered' && S.overlayEntered,
            )}
          >
            {children}
          </ReactModal>
        )}
      </Transition>
    </ModalProvider>
  );
}

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
