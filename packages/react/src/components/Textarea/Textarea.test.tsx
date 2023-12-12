import { render, screen, userEvent } from '../../utils/test-utils';

import Textarea from './Textarea';

describe('Textarea', () => {
  describe('Given the Textarea component with default props', () => {
    describe('When it is rendered', () => {
      it('Then it should render with default values, and the input field should be enabled and empty', () => {
        render(<Textarea />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeEnabled();
        expect(screen.getByRole('textbox')).toHaveValue('');
      });
    });
  });

  describe('Given the Textarea component with a placeholder', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the placeholder', () => {
        render(<Textarea placeholder="First Name" />);
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'placeholder',
          'First Name',
        );
      });
    });
  });

  describe('Given the Textarea component with `disabled` set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the input field disabled', () => {
        render(<Textarea disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
      });
    });
  });

  describe('Given the Textarea component with `readOnly` set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the input field readOnly', () => {
        render(<Textarea readOnly />);
        expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
      });
    });
  });

  describe('Given the Textarea component with `defaultValue`', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the default value', () => {
        render(<Textarea defaultValue="Bob" />);
        expect(screen.getByRole('textbox')).toHaveValue('Bob');
      });
    });
  });

  describe('Given the Textarea component with a valid `startIcon` component', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the startIcon', () => {
        render(<Textarea startIcon={<div data-testid="start-icon" />} />);

        expect(screen.getByTestId('start-icon')).toBeInTheDocument();
      });
    });
  });

  describe('Given the Textarea component with a valid `endIcon` component', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the endIcon', () => {
        render(<Textarea endIcon={<div data-testid="end-icon" />} />);

        expect(screen.getByTestId('end-icon')).toBeInTheDocument();
      });
    });
  });

  describe('Given the Textarea component with an `onChange` handler', () => {
    describe('When a user types into the input field', () => {
      it('Then it should call the `onChange` handler with the new value', async () => {
        const onChange = jest.fn();
        render(<Textarea onChange={onChange} />);
        await userEvent.type(screen.getByRole('textbox'), 'Bob');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(onChange['mock'].calls[0][0].target.value).toEqual('Bob');
      });
    });
  });

  describe('Given the Textarea component with the `value` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the value', () => {
        render(<Textarea value="Bob" />);
        expect(screen.getByRole('textbox')).toHaveValue('Bob');
      });
    });

    describe('When the `value` prop changes', () => {
      it('Then it should render with the new value', () => {
        const { rerender } = render(<Textarea value="Bob" />);
        expect(screen.getByRole('textbox')).toHaveValue('Bob');
        rerender(<Textarea value="Alice" />);
        expect(screen.getByRole('textbox')).toHaveValue('Alice');
      });
    });
  });
});
