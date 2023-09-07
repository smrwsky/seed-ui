import { render, screen, userEvent } from '../../utils/test-utils';

import Button from './Button';

describe('Button', () => {
  describe('Given that the button component is rendered with children', () => {
    const children = 'Click me';

    describe('When the button is displayed', () => {
      it('Then the label should be visible and correctly rendered within the toast', () => {
        render(<Button>{children}</Button>);
        const buttonElement = screen.getByRole('button');
        const titleElement = screen.getByText(children);
        expect(buttonElement).toContainElement(titleElement);
      });
    });
  });

  describe('Given that the button component is rendered with an onClick callback', () => {
    const onClickMock = jest.fn();

    describe('When the close button is clicked', () => {
      it('Then the onClick callback should be triggered', async () => {
        render(<Button onClick={onClickMock}>Click me</Button>);
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
