import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  ComponentPropsWithRef,
  FC,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import ReactModal, { Aria, OnAfterOpenCallback } from 'react-modal';
import { Transition, TransitionStatus } from 'react-transition-group';

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

const overlaySizeStyles = {
  sm: atoms({
    justifyContent: 'center',
    overflowY: 'auto',
    px: 2,
    py: 4,
  }),
  md: atoms({
    justifyContent: 'center',
    overflowY: 'auto',
    px: 2,
    py: 4,
  }),
  lg: atoms({
    justifyContent: 'flex-start',
    overflowY: { mobile: 'hidden', tablet: 'auto' },
    px: { mobile: 0, tablet: 2 },
    py: { mobile: 0, tablet: 4 },
  }),
};

const contentSizeStyles = {
  sm: atoms({
    borderRadius: 'lg',
    boxShadow: 'md',
    maxWidth: 'sm',
  }),
  md: atoms({
    borderRadius: 'lg',
    boxShadow: 'md',
    maxWidth: 'lg',
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
      tablet: 'lg',
    },
    boxShadow: 'md',
    py: {
      mobile: 7,
      tablet: 0,
    },
    overflow: {
      mobile: 'auto',
      tablet: 'hidden',
    },
  }),
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
              atoms({
                width: 'full',
                bg: 'white',
                transition: 'base',
                overflow: 'hidden',
                opacity: status === 'entered' ? 100 : 0,
              }),
              contentSizeStyles[size],
            )}
            closeTimeoutMS={200}
            isOpen={status !== 'exited'}
            overlayClassName={cn(
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
              }),
              overlaySizeStyles[size],
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
