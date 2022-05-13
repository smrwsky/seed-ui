import React from 'react';
import { Space } from '@seed-ui/layout';

import Button from '../Button';
import Subtitle from '../Subtitle';

import docs from './Modal.docs.mdx';
import Modal, { ModalProps } from './Modal';
import { ModalSize } from './Modal.Provider';

const sizes: ModalSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    appElement: {
      table: {
        type: {
          summary: 'HTMLElement | HTMLElement[] | HTMLCollection | NodeList',
        },
      },
    },
    aria: {
      table: {
        type: {
          summary:
            '{\n' +
            '  labelledby?: string | undefined;\n' +
            '  describedby?: string | undefined;\n' +
            "  modal?: boolean | 'false' | 'true' | undefined;\n" +
            '}',
        },
      },
    },
    ariaHideApp: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    children: {
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    closeButtonLabel: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Close',
        },
      },
    },
    contentElement: {
      table: {
        type: {
          summary:
            '(\n' +
            "  props: React.ComponentPropsWithRef<'div'>,\n" +
            '  children: React.ReactNode,\n' +
            ') => React.ReactElement',
        },
      },
    },
    contentLabel: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    contentRef: {
      table: {
        type: {
          summary: '(instance: HTMLDivElement) => void',
        },
      },
    },
    data: {
      table: {
        type: {
          summary: 'Record<string, string>d',
        },
      },
    },
    id: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onAfterClose: {
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    onAfterOpen: {
      table: {
        type: {
          summary:
            '({\n' +
            '  overlayEl: Element;\n' +
            '  contentEl: HTMLDivElement;\n' +
            '}) => void',
        },
      },
    },
    onClose: {
      table: {
        type: {
          summary: '() => void',
        },
        required: {
          summary: 'true',
        },
      },
    },
    open: {
      table: {
        type: {
          summary: 'boolean',
        },
        required: {
          summary: 'true',
        },
      },
    },
    overlayElement: {
      table: {
        type: {
          summary:
            '(\n' +
            "  props: ComponentPropsWithRef<'div'>,\n" +
            '  contentEl: ReactElement,\n' +
            ') => ReactElement',
        },
      },
    },
    overlayRef: {
      table: {
        type: {
          summary: '(instance: HTMLDivElement) => void',
        },
      },
    },
    parentSelector: {
      table: {
        type: {
          summary: 'HTMLElement',
        },
      },
    },
    preventScroll: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    role: {
      table: {
        type: {
          summary: 'string | null',
        },
      },
    },
    shouldCloseOnEsc: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    shouldCloseOnOverlayClick: {
      control: 'boolean',
      defaultValue: 'true',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    shouldFocusAfterRender: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    shouldReturnFocusAfterClose: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    size: {
      control: 'select',
      defaultValue: 'md',
      table: {
        type: {
          summary: sizes.join(' | '),
        },
        defaultValue: { summary: 'md' },
      },
    },
    testId: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
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
            <Button onClick={() => setOpen(false)} variant="secondary-overlay">
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
        <Button onClick={handleOpenSmallModal} variant="primary-outline">
          Open small modal
        </Button>
        <Button onClick={handleOpenMediumModal} variant="primary-outline">
          Open medium modal
        </Button>
        <Button onClick={handleOpenLargeModal} variant="primary-outline">
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
            <Button onClick={handleClose} variant="secondary-overlay">
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
            <Button onClick={handleClose} variant="secondary-overlay">
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
