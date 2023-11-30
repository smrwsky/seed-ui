import { render, screen } from '../../utils/test-utils';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  describe('Given the Checkbox component with default props', () => {
    describe('When it is rendered', () => {
      it('Then it should be enabled and unchecked', () => {
        render(<Checkbox />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeEnabled();
        expect(screen.getByRole('checkbox')).not.toBeChecked();
      });
    });
  });

  describe('Given the Checkbox component with `disabled` set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the input field disabled', () => {
        render(<Checkbox disabled />);
        expect(screen.getByRole('checkbox')).toBeDisabled();
      });
    });
  });

  describe('Given the Checkbox component with `defaultChecked`', () => {
    describe('When it is rendered', () => {
      it('Then it should be checked', () => {
        render(<Checkbox defaultChecked />);
        expect(screen.getByRole('checkbox')).toBeChecked();
      });
    });
  });

  describe('Given the Checkbox component with the `checked` and `readOnly` props', () => {
    describe('When it is rendered', () => {
      it('Then it should be checked', () => {
        render(<Checkbox checked readOnly />);
        expect(screen.getByRole('checkbox')).toBeChecked();
      });
    });

    describe('When the `checked` prop changes', () => {
      it('Then it should render with the new value', () => {
        const { rerender } = render(<Checkbox checked readOnly />);
        expect(screen.getByRole('checkbox')).toBeChecked();
        rerender(<Checkbox checked={false} readOnly />);
        expect(screen.getByRole('checkbox')).not.toBeChecked();
      });
    });
  });
});
