import { render } from '../../utils/test-utils';

import { Badge } from './Badge';

describe('Badge', () => {
  describe('Given a badge with content prop', () => {
    describe('When component is rendered', () => {
      it('Then the badge displays the provided content', () => {
        const content = 42; // Replace with the desired content value
        const { getByText } = render(<Badge content={content} />);
        const badgeContent = getByText(content.toString());
        expect(badgeContent).toBeInTheDocument();
      });
    });
  });

  describe('Given a badge with dot prop', () => {
    describe('When component is rendered', () => {
      it('Then the badge displays a dot', () => {
        const { getByTestId } = render(<Badge dot />);
        const dot = getByTestId('badge-dot');
        expect(dot).toBeInTheDocument();
      });
    });
  });

  describe('Given a badge with children prop', () => {
    describe('When component is rendered', () => {
      it('Then the badge wraps around the provided children components', () => {
        const { getByTestId } = render(
          <Badge>
            <div data-testid="child" />
          </Badge>,
        );
        const child = getByTestId('child');
        expect(child).toBeInTheDocument();
      });
    });
  });

  describe('Given a badge with content exceeding overflowCount', () => {
    describe('When component is rendered', () => {
      it('Then the badge displays the overflowCount', () => {
        const content = 1000; // Replace with the desired content value
        const overflowCount = 999; // Replace with the desired overflowCount value
        const { getByText } = render(
          <Badge content={content} overflowCount={overflowCount} />,
        );
        const badgeContent = getByText(`${overflowCount}+`);
        expect(badgeContent).toBeInTheDocument();
      });
    });
  });

  describe('Given a badge with content and showZero prop set to true', () => {
    describe('When component is rendered', () => {
      it("Then the badge displays count even when it's zero", () => {
        const content = 0; // Replace with the desired content value
        const { getByText } = render(<Badge content={content} showZero />);
        const badgeContent = getByText(content.toString());
        expect(badgeContent).toBeInTheDocument();
      });
    });
  });
});
