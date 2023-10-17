import { Box, Flex } from '@seed-ui/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import Dialog, { DialogProps } from './Dialog';
import { DialogSize } from './Dialog.context';

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
};

export function Base(args: DialogProps): JSX.Element {
  return (
    <Dialog {...args}>
      <Dialog.Trigger>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>
          <Flex alignItems="baseline" justifyContent="space-between">
            <Dialog.Title>Basic Dialog</Dialog.Title>
            <Dialog.Close>
              <IconButton variant="plain">
                <Icon name="x" />
              </IconButton>
            </Dialog.Close>
          </Flex>
        </Dialog.Header>

        <Dialog.Body>
          <Dialog.Description>
            .<br /> .<br /> .<br /> .<br />
          </Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Flex justifyContent="space-between">
            <Dialog.Close>
              <Button variant="plain">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>OK</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}

export function Sizes(args: DialogProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [dialogSize, setDialogSize] = useState<DialogSize>('md');

  function handleOpenSmallDialog() {
    setOpen(true);
    setDialogSize('sm');
  }

  function handleOpenMediumDialog() {
    setOpen(true);
    setDialogSize('md');
  }

  function handleOpenLargeDialog() {
    setOpen(true);
    setDialogSize('lg');
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Flex>
        <Box mr={4}>
          <Button variant="outline" onClick={handleOpenSmallDialog}>
            Open small Dialog
          </Button>
        </Box>

        <Box mr={4}>
          <Button variant="outline" onClick={handleOpenMediumDialog}>
            Open medium Dialog
          </Button>
        </Box>

        <Box>
          <Button variant="outline" onClick={handleOpenLargeDialog}>
            Open large Dialog
          </Button>
        </Box>
      </Flex>

      <Dialog
        {...args}
        open={open && dialogSize === 'sm'}
        size="sm"
        onOpenChange={setOpen}
      >
        <Dialog.Content>
          <Dialog.Header>
            <Flex alignItems="baseline" justifyContent="space-between">
              <Dialog.Title>Small Dialog</Dialog.Title>
              <IconButton variant="plain" onClick={handleClose}>
                <Icon name="x" />
              </IconButton>
            </Flex>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              .<br /> .<br />
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Flex justifyContent="center">
              <Button variant="primary" onClick={handleClose}>
                OK
              </Button>
            </Flex>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>

      <Dialog
        {...args}
        open={open && dialogSize === 'md'}
        size="md"
        onOpenChange={setOpen}
      >
        <Dialog.Content>
          <Dialog.Header>
            <Flex alignItems="baseline" justifyContent="space-between">
              <Dialog.Title>Medium Dialog</Dialog.Title>
              <IconButton variant="plain" onClick={handleClose}>
                <Icon name="x" />
              </IconButton>
            </Flex>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              .<br /> .<br /> .<br /> .<br />
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Flex justifyContent="space-between">
              <Box mr={3}>
                <Button variant="plain" onClick={handleClose}>
                  Cancel
                </Button>
              </Box>

              <Box>
                <Button variant="primary" onClick={handleClose}>
                  OK
                </Button>
              </Box>
            </Flex>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>

      <Dialog
        {...args}
        open={open && dialogSize === 'lg'}
        size="lg"
        onOpenChange={setOpen}
      >
        <Dialog.Content>
          <Dialog.Header>
            <Flex alignItems="baseline" justifyContent="space-between">
              <Dialog.Title>Large Dialog</Dialog.Title>
              <IconButton variant="plain" onClick={handleClose}>
                <Icon name="x" />
              </IconButton>
            </Flex>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              .<br /> .<br /> .<br /> .<br />.<br /> .<br /> .<br /> .<br />.
              <br /> .<br /> .<br /> .<br />.<br /> .<br /> .<br /> .<br />
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Flex justifyContent="space-between">
              <Box mr={3}>
                <Button variant="plain" onClick={handleClose}>
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button variant="primary" onClick={handleClose}>
                  OK
                </Button>
              </Box>
            </Flex>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}
