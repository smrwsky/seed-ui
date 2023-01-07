import React from 'react';
import { Space } from '@seed-ui/layout';

import Button from '../Button';
import Subtitle from '../Subtitle';

import docs from './Modal.docs.mdx';
import Modal, { ModalProps } from './Modal';
import { ModalSize } from './context';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    docs: { page: docs },
  },
};

export function Base(args: ModalProps): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal {...args} onClose={() => setOpen(false)} open={open}>
        <Modal.Header>
          <Subtitle>Basic modal</Subtitle>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Space gutter={1.5} justifyContent="end">
            <Button onClick={() => setOpen(false)} variant="overlay-tertiary">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </Space>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function Sizes(args: ModalProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [modalSize, setModalSize] = React.useState<ModalSize>('md');

  function handleOpenSmallModal() {
    setOpen(true);
    setModalSize('sm');
  }

  function handleOpenMediumModal() {
    setOpen(true);
    setModalSize('md');
  }

  function handleOpenLargeModal() {
    setOpen(true);
    setModalSize('lg');
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Space gutter={2}>
        <Button onClick={handleOpenSmallModal} variant="outline-secondary">
          Open small modal
        </Button>
        <Button onClick={handleOpenMediumModal} variant="outline-secondary">
          Open medium modal
        </Button>
        <Button onClick={handleOpenLargeModal} variant="outline-secondary">
          Open large modal
        </Button>
      </Space>

      <Modal
        {...args}
        onClose={handleClose}
        open={open && modalSize === 'sm'}
        size="sm"
      >
        <Modal.Header>
          <Subtitle>Small modal</Subtitle>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Space justifyContent="center">
            <Button onClick={() => setOpen(false)} variant="primary">
              OK
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>

      <Modal
        {...args}
        onClose={handleClose}
        open={open && modalSize === 'md'}
        size="md"
      >
        <Modal.Header>
          {' '}
          <Subtitle>Medium modal</Subtitle>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Space gutter={1.5} justifyContent="end">
            <Button onClick={handleClose} variant="overlay-tertiary">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)} variant="primary">
              OK
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>

      <Modal
        {...args}
        onClose={handleClose}
        open={open && modalSize === 'lg'}
        size="lg"
      >
        <Modal.Header>
          {' '}
          <Subtitle>Large modal</Subtitle>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />.<br /> .<br /> .<br /> .<br />.<br />{' '}
          .<br /> .<br /> .<br />.<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Space gutter={1.5} justifyContent="end">
            <Button onClick={handleClose} variant="overlay-tertiary">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)} variant="primary">
              OK
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>
    </>
  );
}
