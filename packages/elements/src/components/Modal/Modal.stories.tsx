import { Box, Flex } from '@seed-ui/flexbox';
import { useState } from 'react';

import { Button } from '../Button';
import { Subtitle } from '../Subtitle';

import Modal, { ModalProps } from './Modal';
import { ModalSize } from './context';

export default {
  title: 'Feedback/Modal',
  component: Modal,
};

export function Base(args: ModalProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Subtitle>Basic modal</Subtitle>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyContent="end">
            <Box mr={3}>
              <Button variant="overlay-tertiary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Box>

            <Box>
              <Button onClick={() => setOpen(false)}>OK</Button>
            </Box>
          </Flex>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function Sizes(args: ModalProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ModalSize>('md');

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
      <Flex>
        <Box mr={4}>
          <Button variant="outline-secondary" onClick={handleOpenSmallModal}>
            Open small modal
          </Button>
        </Box>

        <Box mr={4}>
          <Button variant="outline-secondary" onClick={handleOpenMediumModal}>
            Open medium modal
          </Button>
        </Box>

        <Box>
          <Button variant="outline-secondary" onClick={handleOpenLargeModal}>
            Open large modal
          </Button>
        </Box>
      </Flex>

      <Modal
        {...args}
        open={open && modalSize === 'sm'}
        size="sm"
        onClose={handleClose}
      >
        <Modal.Header>
          <Subtitle>Small modal</Subtitle>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyContent="center">
            <Button variant="primary" onClick={() => setOpen(false)}>
              OK
            </Button>
          </Flex>
        </Modal.Footer>
      </Modal>

      <Modal
        {...args}
        open={open && modalSize === 'md'}
        size="md"
        onClose={handleClose}
      >
        <Modal.Header>
          <Subtitle>Medium modal</Subtitle>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyContent="end">
            <Box mr={3}>
              <Button variant="overlay-tertiary" onClick={handleClose}>
                Cancel
              </Button>
            </Box>

            <Box>
              <Button variant="primary" onClick={() => setOpen(false)}>
                OK
              </Button>
            </Box>
          </Flex>
        </Modal.Footer>
      </Modal>

      <Modal
        {...args}
        open={open && modalSize === 'lg'}
        size="lg"
        onClose={handleClose}
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
          <Flex justifyContent="end">
            <Box mr={3}>
              <Button variant="overlay-tertiary" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
            <Box>
              <Button variant="primary" onClick={() => setOpen(false)}>
                OK
              </Button>
            </Box>
          </Flex>
        </Modal.Footer>
      </Modal>
    </>
  );
}
