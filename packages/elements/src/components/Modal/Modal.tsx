import React from 'react';
import cn from 'classnames';
import ReactModal, { Aria, OnAfterOpenCallback } from 'react-modal';
import { TransitionStatus } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';

import ModalContext, { ModalSize } from './context';
import { ModalHeader } from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import * as S from './Modal.css';

export type ModalProps = {
  appElement?: HTMLElement | HTMLElement[] | HTMLCollection | NodeList;
  aria?: Aria;
  ariaHideApp?: boolean;
  children?: React.ReactNode;
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

const Modal: React.FC<ModalProps> = ({
  open,
  size = 'md',
  children,
  onClose,
  ...modalProps
}) => {
  const context = React.useMemo(() => ({ size }), [size]);

  return (
    <ModalContext.Provider value={context}>
      <Transition
        in={open}
        timeout={{
          appear: 0,
          enter: 0,
          exit: 200,
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
            closeTimeoutMS={200}
            isOpen={status !== 'exited'}
            onRequestClose={onClose}
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
    </ModalContext.Provider>
  );
};

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
