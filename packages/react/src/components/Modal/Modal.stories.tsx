import { Box, Flex } from '@seed-ui/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Text } from '../Text';

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
          <Text
            as="h3"
            fontFamily="secondary"
            fontSize="xl"
            fontWeight="semiBold"
            letterSpacing="wide"
            lineHeight="tight"
          >
            Basic modal
          </Text>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyContent="end">
            <Box mr={3}>
              <Button variant="plain" onClick={() => setOpen(false)}>
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
          <Button variant="outline" onClick={handleOpenSmallModal}>
            Open small modal
          </Button>
        </Box>

        <Box mr={4}>
          <Button variant="outline" onClick={handleOpenMediumModal}>
            Open medium modal
          </Button>
        </Box>

        <Box>
          <Button variant="outline" onClick={handleOpenLargeModal}>
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
          <Text
            as="h1"
            fontFamily="secondary"
            fontSize="xl"
            fontWeight="semiBold"
            letterSpacing="wide"
            lineHeight="tight"
          >
            Small modal
          </Text>
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
          <Text
            as="h1"
            fontFamily="secondary"
            fontSize="xl"
            fontWeight="semiBold"
            letterSpacing="wide"
            lineHeight="tight"
          >
            Medium modal
          </Text>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyContent="end">
            <Box mr={3}>
              <Button variant="plain" onClick={handleClose}>
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
          <Text
            as="h1"
            fontFamily="secondary"
            fontSize="xl"
            fontWeight="semiBold"
            letterSpacing="wide"
            lineHeight="tight"
          >
            Large modal
          </Text>
        </Modal.Header>
        <Modal.Body>
          .<br /> .<br /> .<br /> .<br />.<br /> .<br /> .<br /> .<br />.<br />{' '}
          .<br /> .<br /> .<br />.<br /> .<br /> .<br /> .<br />
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyContent="end">
            <Box mr={3}>
              <Button variant="plain" onClick={handleClose}>
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
