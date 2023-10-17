import { render, screen, userEvent } from '../../utils/test-utils';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

import IconButton from './IconButton';

describe('IconButton', () => {
  describe('Given that the button component is rendered with an onClick callback', () => {
    describe('When the close button is clicked', () => {
      it('Then the onClick callback should be triggered', async () => {
        const onClickMock = jest.fn();

        render(
          <IconButton onClick={onClickMock}>
            <Icon name="like" type="solid" />
          </IconButton>,
        );

        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given an IconButton component with a specific icon', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the icon element', () => {
        const testId = 'icon-button-icon';

        render(
          <IconButton>
            <Icon data-testid={testId} name="like" type="solid" />
          </IconButton>,
        );

        expect(screen.getByTestId(testId)).toBeInTheDocument();
      });
    });
  });

  describe('Given an IconButton component with an avatar prop set to true', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the avatar element', () => {
        const testId = 'icon-button-avatar';

        render(
          <IconButton avatar>
            <Avatar data-testid={testId}>
              <img alt="Profile" src="https://i.pravatar.cc/300" />
            </Avatar>
          </IconButton>,
        );

        expect(screen.getByTestId(testId)).toBeInTheDocument();
      });
    });
  });

  describe('Given an IconButton component used as a link (with an "as" prop as "a")', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the link element', () => {
        const testId = 'icon-button-link';

        render(
          <IconButton as="a" data-testid={testId} href="#">
            <Icon name="like" type="solid" />
          </IconButton>,
        );

        const link = screen.getByRole('link');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('data-testid', testId);
      });
    });
  });
});
