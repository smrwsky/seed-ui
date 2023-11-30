import { Box, Flex } from '@seed-ui/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import Dialog, { DialogProps } from './Dialog';
import { DialogSize } from './types';

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
          <Flex alignItems="center" justifyContent="space-between">
            <Dialog.Title>Basic Dialog</Dialog.Title>
            <Dialog.Close>
              <IconButton rounded variant="tertiary">
                <Icon name="x" />
              </IconButton>
            </Dialog.Close>
          </Flex>
        </Dialog.Header>

        <Dialog.Body>
          <Dialog.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            lectus convallis, ultrices dui non, varius massa. Quisque tempus
            convallis purus, ut interdum nulla venenatis vitae. Proin imperdiet
            tellus purus, id convallis leo porttitor ac.
            <br />
            <br />
            Phasellus maximus facilisis mauris, vel pretium lacus scelerisque a.
            Ut mauris dui, aliquet ut felis quis, aliquam vehicula massa. In
            eget ipsum eleifend, facilisis metus ac, luctus nunc. Duis tristique
            laoreet ipsum nec cursus. Sed quis bibendum odio, ac laoreet quam.
          </Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Flex justifyContent="space-between">
            <Dialog.Close>
              <Button variant="tertiary">Cancel</Button>
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
          <Button variant="secondary" onClick={handleOpenSmallDialog}>
            Open small Dialog
          </Button>
        </Box>

        <Box mr={4}>
          <Button variant="secondary" onClick={handleOpenMediumDialog}>
            Open medium Dialog
          </Button>
        </Box>

        <Box>
          <Button variant="secondary" onClick={handleOpenLargeDialog}>
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
            <Flex alignItems="center" justifyContent="space-between">
              <Dialog.Title>Small Dialog</Dialog.Title>
              <IconButton rounded variant="tertiary" onClick={handleClose}>
                <Icon name="x" />
              </IconButton>
            </Flex>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              lectus convallis, ultrices dui non, varius massa.
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
            <Flex alignItems="center" justifyContent="space-between">
              <Dialog.Title>Medium Dialog</Dialog.Title>
              <IconButton rounded variant="tertiary" onClick={handleClose}>
                <Icon name="x" />
              </IconButton>
            </Flex>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              lectus convallis, ultrices dui non, varius massa. Quisque tempus
              convallis purus, ut interdum nulla venenatis vitae. Proin
              imperdiet tellus purus, id convallis leo porttitor ac.
              <br />
              <br />
              Phasellus maximus facilisis mauris, vel pretium lacus scelerisque
              a. Ut mauris dui, aliquet ut felis quis, aliquam vehicula massa.
              In eget ipsum eleifend, facilisis metus ac, luctus nunc. Duis
              tristique laoreet ipsum nec cursus. Sed quis bibendum odio, ac
              laoreet quam.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Flex justifyContent="space-between">
              <Box mr={3}>
                <Button variant="tertiary" onClick={handleClose}>
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
            <Flex alignItems="center" justifyContent="space-between">
              <Dialog.Title>Large Dialog</Dialog.Title>
              <IconButton rounded variant="tertiary" onClick={handleClose}>
                <Icon name="x" />
              </IconButton>
            </Flex>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              lectus convallis, ultrices dui non, varius massa. Quisque tempus
              convallis purus, ut interdum nulla venenatis vitae. Proin
              imperdiet tellus purus, id convallis leo porttitor ac. Phasellus
              maximus facilisis mauris, vel pretium lacus scelerisque a. Ut
              mauris dui, aliquet ut felis quis, aliquam vehicula massa. In eget
              ipsum eleifend, facilisis metus ac, luctus nunc. Duis tristique
              laoreet ipsum nec cursus. Sed quis bibendum odio, ac laoreet quam.
              Donec dignissim in est non gravida.
              <br />
              <br />
              Vivamus auctor interdum hendrerit. Pellentesque non tortor eu arcu
              volutpat pharetra a eget ipsum. Morbi suscipit mi ut justo
              commodo, at semper risus eleifend. Curabitur pharetra auctor mi,
              vel egestas magna pellentesque ac. Suspendisse augue nulla, porta
              et sem in, consequat dictum augue. Duis quis facilisis leo. Morbi
              porta purus eu tincidunt cursus. Praesent efficitur fringilla quam
              eget pellentesque. Duis urna nunc, pharetra sit amet leo at,
              congue egestas elit. Vivamus congue aliquam libero, a euismod
              sapien viverra vitae. Integer libero justo, sodales non tincidunt
              sed, blandit eget lacus. Aliquam tempor nec ex non eleifend.
              <br />
              <br />
              Praesent accumsan non sem ut rhoncus. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae;
              Praesent congue pharetra ipsum, ultricies pellentesque lorem
              consectetur eget. Cras finibus, nisl vel sollicitudin ullamcorper,
              leo odio bibendum elit, at imperdiet ligula ipsum nec tortor.
              Vivamus ultrices lectus nunc, quis cursus mi laoreet vel. Sed id
              lectus placerat, tempor lectus a, mattis nunc. Phasellus aliquet
              nibh metus, vitae iaculis sem pretium ac. Vestibulum vulputate
              dapibus accumsan. Sed pharetra ligula at finibus volutpat.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Flex justifyContent="space-between">
              <Box mr={3}>
                <Button variant="tertiary" onClick={handleClose}>
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
