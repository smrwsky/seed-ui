import { render, screen, userEvent } from '../../utils/test-utils';

import Toast from './Toast';

describe('Toast', () => {
  describe('Given that the toast component is rendered with visible set to true', () => {
    describe('When the toast is displayed', () => {
      it('Then it should be visible on the screen', () => {
        render(<Toast visible={true} />);
        const toastElement = screen.getByRole('alert');
        expect(toastElement).toBeVisible();
      });
    });
  });

  describe('Given that the toast component is rendered with visible set to false', () => {
    describe('When the toast is displayed', () => {
      it('Then it should not be visible', () => {
        render(<Toast visible={false} />);
        const toastElement = screen.getByRole('alert');
        expect(toastElement).not.toBeVisible();
      });
    });
  });

  describe('Given that the toast component is rendered with a title', () => {
    const title = 'Error Message';

    describe('When the toast is displayed', () => {
      it('Then the title should be visible and correctly rendered within the toast', () => {
        render(<Toast title={title} />);
        const toastElement = screen.getByRole('alert');
        const titleElement = screen.getByText(title);
        expect(toastElement).toContainElement(titleElement);
      });
    });
  });

  describe('Given that the toast component is rendered with an onHide callback', () => {
    const onHideMock = jest.fn();

    describe('When the close button is clicked', () => {
      it('Then the onHide callback should be triggered', async () => {
        render(<Toast onHide={onHideMock} />);
        const closeButton = screen.getByLabelText('Close');
        await userEvent.click(closeButton);
        expect(onHideMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given that the toast component is rendered with a specified autoCloseTimeout and onHide callback', () => {
    const autoCloseTimeout = 3000;
    const onHideMock = jest.fn();

    describe('When the toast is displayed', () => {
      it('Then the onHide callback should be triggered automatically after the specified duration', () => {
        jest.useFakeTimers();

        render(
          <Toast autoCloseTimeout={autoCloseTimeout} onHide={onHideMock} />,
        );

        expect(onHideMock).toHaveBeenCalledTimes(0);
        jest.advanceTimersByTime(autoCloseTimeout);
        expect(onHideMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given that the toast component is rendered with an onAfterHide callback and visible set to false', () => {
    const onAfterHideMock = jest.fn();

    describe('When the toast is displayed', () => {
      it('Then the onAfterHide callback should be triggered after the animation is finished', () => {
        jest.useFakeTimers();
        render(<Toast visible={false} onAfterHide={onAfterHideMock} />);
        jest.advanceTimersByTime(200);
        expect(onAfterHideMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
