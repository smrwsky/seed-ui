import { render } from '../../utils/test-utils';
import { Icon } from '../Icon';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  describe('Given an Avatar without props', () => {
    describe('When the component is rendered', () => {
      it('Then it should render without crashing', () => {
        const { container } = render(<Avatar />);
        expect(container).toBeDefined();
      });
    });
  });

  describe('Given an image element as the children prop', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the image element', () => {
        const { container } = render(
          <Avatar>
            <img alt="Profile" src="https://i.pravatar.cc/300" />
          </Avatar>,
        );
        expect(container.querySelector('img')).toBeInTheDocument();
      });
    });
  });

  describe('Given an icon element as the icon prop', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the icon element', () => {
        const testId = 'avatar-icon';

        const { getByTestId } = render(
          <Avatar icon={<Icon data-testid={testId} name="user" />} />,
        );

        expect(getByTestId(testId)).toBeInTheDocument();
      });
    });
  });

  describe('Given a placeholder text as the placeholder prop', () => {
    describe('When the Avatar component is rendered without children or icon', () => {
      it('Then it should render initials of the placeholder text', () => {
        const { getByText } = render(<Avatar placeholder="Peter Griffin" />);
        expect(getByText('PG')).toBeInTheDocument();
      });
    });
  });

  describe('Given both an image (children) and a placeholder as props', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the image element', () => {
        const { container, queryByText } = render(
          <Avatar placeholder="Peter Griffin">
            <img alt="Profile" src="https://i.pravatar.cc/300" />
          </Avatar>,
        );

        expect(queryByText('PG')).not.toBeInTheDocument();
        expect(container.querySelector('img')).toBeInTheDocument();
      });
    });
  });

  describe('Given both an image (children) and an icon as props', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the image element', () => {
        const testId = 'avatar-icon';

        const { container, queryByTestId } = render(
          <Avatar icon={<Icon data-testid={testId} name="user" />}>
            <img alt="Profile" src="https://i.pravatar.cc/300" />
          </Avatar>,
        );

        expect(queryByTestId(testId)).not.toBeInTheDocument();
        expect(container.querySelector('img')).toBeInTheDocument();
      });
    });
  });
});
