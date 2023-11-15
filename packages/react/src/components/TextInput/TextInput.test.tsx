import { render, screen, userEvent } from '../../utils/test-utils';
import { Icon } from '../Icon';

import TextInput from './TextInput';

describe('TextInput', () => {
  describe('Given the TextInput component with default props', () => {
    describe('When it is rendered', () => {
      it('Then it should render with default values, and the input field should be enabled and empty', () => {
        render(<TextInput />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeEnabled();
        expect(screen.getByRole('textbox')).toHaveValue('');
      });
    });
  });

  describe('Given the TextInput component with a placeholder', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the placeholder', () => {
        render(<TextInput placeholder="First Name" />);
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'placeholder',
          'First Name',
        );
      });
    });
  });

  describe('Given the TextInput component with `disabled` set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the input field disabled', () => {
        render(<TextInput disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
      });
    });
  });

  describe('Given the TextInput component with `readOnly` set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the input field readOnly', () => {
        render(<TextInput readOnly />);
        expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
      });
    });
  });

  describe('Given the TextInput component with `defaultValue`', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the default value', () => {
        render(<TextInput defaultValue="Bob" />);
        expect(screen.getByRole('textbox')).toHaveValue('Bob');
      });
    });
  });

  describe('Given the TextInput component with `clearable` set to true', () => {
    describe('When a user inputs text into the input field', () => {
      it('Then it should render the clear button', async () => {
        const { getByRole } = render(<TextInput clearable />);
        await userEvent.type(screen.getByRole('textbox'), 'Bob');
        expect(getByRole('button')).toBeInTheDocument();
      });
    });

    describe('When a user inputs text into the input field and clicks the clear button', () => {
      it('Then the input field should be cleared', async () => {
        const { getByRole } = render(<TextInput clearable />);
        await userEvent.type(screen.getByRole('textbox'), 'Bob');
        expect(getByRole('button')).toBeInTheDocument();
        await userEvent.click(getByRole('button'));
        expect(screen.getByRole('textbox')).toHaveValue('');
      });
    });
  });

  describe('Given the TextInput component with `clearable` set to true and a custom `clearLabel`', () => {
    describe('When a user inputs text into the input field', () => {
      it('Then it should render with the clear button with correct aria-label', async () => {
        const clearLabel = 'გასასუფთავებლად';

        const { getByRole } = render(
          <TextInput clearLabel={clearLabel} clearable />,
        );

        await userEvent.type(screen.getByRole('textbox'), 'Bob');

        expect(getByRole('button')).toHaveAttribute('aria-label', clearLabel);
      });
    });
  });

  describe('Given the TextInput component with `defaultValue` and `clearable` set to true', () => {
    describe('When the input is focused', () => {
      it('Then it should render with the clear button', async () => {
        const { getByRole } = render(
          <TextInput clearable defaultValue="Bob" />,
        );

        await userEvent.click(screen.getByRole('textbox'));
        expect(getByRole('button')).toBeInTheDocument();
      });
    });

    describe('When the input is focused and the user clicks the clear button', () => {
      it('Then the input field should be cleared', async () => {
        const { getByRole } = render(
          <TextInput clearable defaultValue="Bob" />,
        );

        await userEvent.click(screen.getByRole('textbox'));
        expect(getByRole('button')).toBeInTheDocument();
        await userEvent.click(getByRole('button'));
        expect(screen.getByRole('textbox')).toHaveValue('');
      });
    });
  });

  describe('Given the TextInput component with a valid `startIcon` component', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the startIcon', () => {
        render(
          <TextInput
            startIcon={<Icon data-testid="start-icon" name="search" />}
          />,
        );

        expect(screen.getByTestId('start-icon')).toBeInTheDocument();
      });
    });
  });

  describe('Given the TextInput component with a valid `endIcon` component', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the endIcon', () => {
        render(
          <TextInput endIcon={<Icon data-testid="end-icon" name="search" />} />,
        );

        expect(screen.getByTestId('end-icon')).toBeInTheDocument();
      });
    });
  });

  describe('Given the TextInput component with an `onChange` handler', () => {
    describe('When a user types into the input field', () => {
      it('Then it should call the `onChange` handler with the new value', async () => {
        const onChange = jest.fn();
        render(<TextInput onChange={onChange} />);
        await userEvent.type(screen.getByRole('textbox'), 'Bob');
        expect(onChange).toHaveBeenCalledWith('Bob');
      });
    });
  });

  describe('Given the TextInput component with the `value` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the value', () => {
        render(<TextInput value="Bob" />);
        expect(screen.getByRole('textbox')).toHaveValue('Bob');
      });
    });

    describe('When the `value` prop changes', () => {
      it('Then it should render with the new value', () => {
        const { rerender } = render(<TextInput value="Bob" />);
        expect(screen.getByRole('textbox')).toHaveValue('Bob');
        rerender(<TextInput value="Alice" />);
        expect(screen.getByRole('textbox')).toHaveValue('Alice');
      });
    });
  });

  describe('Given the TextInput component with the `value` prop and `clearable` set to true', () => {
    describe('When the input is focused', () => {
      it('Then it should render with the clear button', async () => {
        const { getByRole } = render(
          <TextInput clearable defaultValue="Bob" />,
        );

        await userEvent.click(screen.getByRole('textbox'));
        expect(getByRole('button')).toBeInTheDocument();
      });
    });

    describe('When the input is focused and the user clicks the clear button', () => {
      it('Then the input field should be cleared', async () => {
        const { getByRole } = render(<TextInput clearable value="Bob" />);
        await userEvent.click(screen.getByRole('textbox'));
        expect(getByRole('button')).toBeInTheDocument();
        await userEvent.click(getByRole('button'));
        expect(screen.getByRole('textbox')).toHaveValue('');
      });
    });
  });

  describe('Given the TextInput component with the `value`, `onChange`, and `clearable` set to true', () => {
    describe('When the input is focused and the user clicks the clear button', () => {
      it('Then the `onChange` handler should be called with an empty string', async () => {
        const onChange = jest.fn();

        const { getByRole } = render(
          <TextInput clearable value="Bob" onChange={onChange} />,
        );

        await userEvent.click(screen.getByRole('textbox'));
        expect(getByRole('button')).toBeInTheDocument();
        await userEvent.click(getByRole('button'));
        expect(onChange).toHaveBeenCalledWith('');
      });
    });
  });
});
