import { render, screen, userEvent, waitFor } from '../../utils/test-utils';

import Popover from './Popover';

describe('Popover', () => {
  describe('Given a Popover component with valid Popover.Trigger and Popover.Content components', () => {
    describe('When interacting with the Popover.Trigger component', () => {
      it('Then the Popover.Content should be displayed', async () => {
        render(
          <Popover>
            <Popover.Trigger>
              <button>Trigger</button>
            </Popover.Trigger>
            <Popover.Content>
              <div>Content</div>
            </Popover.Content>
          </Popover>,
        );

        const button = screen.getByRole('button');
        await userEvent.click(button);

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });
      });
    });

    describe('When popover is open and user click outside the popover content', () => {
      it('Then the Popover.Content should be hidden', async () => {
        render(
          <>
            <button>Outside</button>
            <Popover>
              <Popover.Trigger>
                <button>Trigger</button>
              </Popover.Trigger>
              <Popover.Content>
                <div>Content</div>
              </Popover.Content>
            </Popover>
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

  describe('Given a Popover component with `initialOpen` prop set to true', () => {
    describe("When it's rendered", () => {
      it('Then the popover content is visible', () => {
        render(
          <Popover initialOpen>
            <Popover.Trigger>
              <button>Trigger</button>
            </Popover.Trigger>
            <Popover.Content>
              <div>Content</div>
            </Popover.Content>
          </Popover>,
        );

        expect(screen.getByText('Content')).toBeVisible();
      });
    });
  });

  describe('Given a Popover component with `open` prop', () => {
    describe('When the open prop is toggled from false to true', () => {
      it('Then the Popover should become open', async () => {
        const { rerender } = render(
          <Popover open={false}>
            <Popover.Trigger>
              <button>Trigger</button>
            </Popover.Trigger>
            <Popover.Content>
              <div>Content</div>
            </Popover.Content>
          </Popover>,
        );

        expect(screen.queryByText('Content')).not.toBeInTheDocument();

        rerender(
          <Popover open>
            <Popover.Trigger>
              <button>Trigger</button>
            </Popover.Trigger>
            <Popover.Content>
              <div>Content</div>
            </Popover.Content>
          </Popover>,
        );

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });
      });
    });

    describe('When the open prop is toggled from true to false', () => {
      it('Then the Popover should become hidden', async () => {
        const { rerender } = render(
          <Popover open>
            <Popover.Trigger>
              <button>Trigger</button>
            </Popover.Trigger>
            <Popover.Content>
              <div>Content</div>
            </Popover.Content>
          </Popover>,
        );

        expect(screen.getByText('Content')).toBeVisible();

        rerender(
          <Popover open={false}>
            <Popover.Trigger>
              <button>Trigger</button>
            </Popover.Trigger>
            <Popover.Content>
              <div>Content</div>
            </Popover.Content>
          </Popover>,
        );

        await waitFor(() => {
          expect(screen.queryByText('Content')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('Given a Popover component with open and onOpenChange props', () => {
    describe('When the popover is opened and user click outside the popover content', () => {
      it('Then the onOpenChange callback should be called with the new open state', async () => {
        const onOpenChange = jest.fn();

        render(
          <>
            <button>Outside</button>
            <Popover open={true} onOpenChange={onOpenChange}>
              <Popover.Trigger>
                <button>Trigger</button>
              </Popover.Trigger>
              <Popover.Content>
                <div>Content</div>
              </Popover.Content>
            </Popover>
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
