import { render, screen, userEvent } from '../../../utils/test-utils';

import MenuLink from './MenuLink';

describe('MenuLink', () => {
  describe('Given that the menu link component is rendered with children', () => {
    const children = 'Click me';

    describe('When the menu link is displayed', () => {
      it('Then the label should be visible and correctly rendered within the toast', () => {
        render(<MenuLink>{children}</MenuLink>);
        const menuLinkElement = screen.getByRole('menuitem');
        const titleElement = screen.getByText(children);
        expect(menuLinkElement).toContainElement(titleElement);
      });
    });
  });

  describe('Given that the menu link component is rendered with an onClick callback', () => {
    const onClickMock = jest.fn();

    describe('When the close menu link is clicked', () => {
      it('Then the onClick callback should be triggered', async () => {
        render(<MenuLink onClick={onClickMock}>Click me</MenuLink>);
        const menuLinkElement = screen.getByRole('menuitem');
        await userEvent.click(menuLinkElement);
        expect(onClickMock).toHaveBeenCalled();
      });
    });
  });
});
