import { render, screen } from '../../utils/test-utils';

import Message from './Message';

describe('Message', () => {
  describe('Given that the toast component is rendered with visible set to true', () => {
    describe('When the toast is displayed', () => {
      it('Then it should be visible on the screen', () => {
        render(<Message visible={true} />);
        const toastElement = screen.getByRole('alert');
        expect(toastElement).toBeVisible();
      });
    });
  });

  describe('Given that the toast component is rendered with visible set to false', () => {
    describe('When the toast is displayed', () => {
      it('Then it should not be visible', () => {
        render(<Message visible={false} />);
        const toastElement = screen.getByRole('alert');
        expect(toastElement).not.toBeVisible();
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
          <Message autoCloseTimeout={autoCloseTimeout} onHide={onHideMock} />,
        );

        expect(onHideMock).not.toHaveBeenCalled();
        jest.advanceTimersByTime(autoCloseTimeout);
        expect(onHideMock).toHaveBeenCalled();
      });
    });
  });

  describe('Given that the toast component is rendered with an onAfterHide callback and visible set to false', () => {
    const onAfterHideMock = jest.fn();

    describe('When the toast is displayed', () => {
      it('Then the onAfterHide callback should be triggered after the animation is finished', () => {
        jest.useFakeTimers();
        render(<Message visible={false} onAfterHide={onAfterHideMock} />);
        jest.advanceTimersByTime(200);
        expect(onAfterHideMock).toHaveBeenCalled();
      });
    });
  });
});
