import { render, screen, userEvent, waitFor } from '../../utils/test-utils';

import Dialog from './Dialog';

describe('Dialog', () => {
  describe('Given a Dialog component with valid Dialog.Trigger and Dialog.Content components', () => {
    describe('When interacting with the Dialog.Trigger component', () => {
      it('Then the Dialog.Content should be displayed', async () => {
        render(
          <Dialog>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        const button = screen.getByRole('button');
        await userEvent.click(button);

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });
      });
    });

    describe('When popover is open and user click outside the popover content', () => {
      it('Then the Dialog.Content should be hidden', async () => {
        render(
          <>
            <button>Outside</button>
            <Dialog>
              <Dialog.Trigger>
                <button>Trigger</button>
              </Dialog.Trigger>
              <Dialog.Content>
                <div>Content</div>
              </Dialog.Content>
            </Dialog>
          </>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });

        await userEvent.click(screen.getByText('Outside'));

        await waitFor(() => {
          expect(screen.queryByText('Content')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('Given a Dialog component with `open` prop', () => {
    describe('When the open prop is toggled from false to true', () => {
      it('Then the Dialog should become open', async () => {
        const { rerender } = render(
          <Dialog open={false}>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        expect(screen.queryByText('Content')).not.toBeInTheDocument();

        rerender(
          <Dialog open>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });
      });
    });

    describe('When the open prop is toggled from true to false', () => {
      it('Then the Dialog should become hidden', async () => {
        const { rerender } = render(
          <Dialog open>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        expect(screen.getByText('Content')).toBeVisible();

        rerender(
          <Dialog open={false}>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        await waitFor(() => {
          expect(screen.queryByText('Content')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('Given a Dialog component with open and onOpenChange props', () => {
    describe('When the popover is opened and user click outside the popover content', () => {
      it('Then the onOpenChange callback should be called with the new open state', async () => {
        const onOpenChange = jest.fn();

        render(
          <>
            <button>Outside</button>
            <Dialog open={true} onOpenChange={onOpenChange}>
              <Dialog.Trigger>
                <button>Trigger</button>
              </Dialog.Trigger>
              <Dialog.Content>
                <div>Content</div>
              </Dialog.Content>
            </Dialog>
          </>,
        );

        await userEvent.click(screen.getByText('Outside'));

        await waitFor(() => {
          expect(onOpenChange).toHaveBeenCalledWith(false);
        });
      });
    });
  });
});
