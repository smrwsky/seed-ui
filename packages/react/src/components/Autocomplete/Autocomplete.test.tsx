import {
  act,
  fireEvent,
  render,
  screen,
  userEvent,
  waitFor,
} from '../../utils/test-utils';

import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  describe('Given an Autocomplete with a set of options', () => {
    const options = ['Apple', 'Banana', 'Cherry'];

    describe('When the user opens the combobox menu', () => {
      it('Then all options should be displayed', async () => {
        render(<Autocomplete options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.click(input);

        expect(screen.getByText('Apple')).toBeVisible();
        expect(screen.getByText('Banana')).toBeVisible();
        expect(screen.getByText('Cherry')).toBeVisible();
      });
    });

    describe('When the user types in a search term', () => {
      it('Then the matching options should be displayed', async () => {
        render(<Autocomplete options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'a');

        await waitFor(() => {
          expect(screen.getByText('Apple')).toBeVisible();
          expect(screen.getByText('Banana')).toBeVisible();
          expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
        });
      });
    });

    describe('When the user selects an option', () => {
      it('Then the input should be updated with the selected option', async () => {
        render(<Autocomplete options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.click(input);

        const option1 = screen.getByText('Apple');
        await userEvent.click(option1);

        expect(input).toHaveValue('Apple');
      });
    });

    describe('When the user navigates through the options using the keyboard arrow keys', () => {
      it('Then the focus should move up or down with each arrow key press', async () => {
        render(<Autocomplete options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.click(input);
        await userEvent.keyboard('{arrowdown}{arrowdown}');

        const textElement = screen.getByText('Banana');
        const optionsElements = screen.getAllByRole('option');

        const optionElement = optionsElements.find((el) =>
          el.contains(textElement),
        );

        expect(optionElement).toHaveClass('highlighted');
      });
    });

    describe("When the user types in a search term that doesn't match any of the autocomplete options", () => {
      it('Then no options should be displayed', async () => {
        render(<Autocomplete options={options} />);
        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'Cucumber');

        await waitFor(() => {
          expect(screen.queryByRole('option')).not.toBeInTheDocument();
        });
      });
    });

    describe('When the user types in a search term and clears the input', () => {
      it('Then all options should be displayed again', async () => {
        render(<Autocomplete options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'a');

        await waitFor(() => {
          expect(screen.getByText('Apple')).toBeInTheDocument();
          expect(screen.getByText('Banana')).toBeInTheDocument();
          expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
        });

        await userEvent.clear(input);

        await waitFor(() => {
          expect(screen.getByText('Apple')).toBeInTheDocument();
          expect(screen.getByText('Banana')).toBeInTheDocument();
          expect(screen.getByText('Cherry')).toBeInTheDocument();
        });
      });
    });

    describe('When the user types in a search term and the input is blurred', () => {
      it('Then the value of the input should be empty', async () => {
        render(<Autocomplete options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'a');

        act(() => {
          fireEvent.blur(input);
        });

        expect(input).toHaveValue('');
      });
    });
  });

  describe('Given an Autocomplete with a set of options and a default value', () => {
    const options = ['Apple', 'Banana', 'Cherry'];
    const defaultValue = options[1];

    describe('When the user clicks on the combobox input', () => {
      it('Then the combobox menu should open and the selected option should be highlighted', async () => {
        render(<Autocomplete defaultValue={defaultValue} options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.click(input);

        const textElement = screen.getByText('Banana');
        const optionsElements = screen.getAllByRole('option');

        const optionElement = optionsElements.find((el) =>
          el.contains(textElement),
        );

        expect(optionElement).toHaveAttribute('aria-selected', 'true');
      });
    });

    describe('When the user clears the input', () => {
      it('Then the value of the input should be empty and all options should be displayed', async () => {
        render(<Autocomplete defaultValue={defaultValue} options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.click(input);
        await userEvent.clear(input);

        expect(input).toHaveValue('');

        await waitFor(() => {
          expect(screen.getByText('Apple')).toBeInTheDocument();
          expect(screen.getByText('Banana')).toBeInTheDocument();
          expect(screen.getByText('Cherry')).toBeInTheDocument();
        });
      });
    });

    describe('When the user types in a search term and the input is blurred', () => {
      it('Then the value of the input should match the selected option', async () => {
        render(<Autocomplete defaultValue={defaultValue} options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'a');

        act(() => {
          fireEvent.blur(input);
        });

        expect(input).toHaveValue(defaultValue);
      });
    });

    describe('When the user clears the input and the input is blurred', () => {
      it('Then the value of the input should be empty', async () => {
        render(<Autocomplete defaultValue={defaultValue} options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.clear(input);

        act(() => {
          fireEvent.blur(input);
        });

        expect(input).toHaveValue('');
      });
    });
  });

  describe('Given an Autocomplete with a set of options and allowed input value', () => {
    const options = ['Apple', 'Banana', 'Cherry'];

    describe('When the user types in a search term and the input is blurred', () => {
      test("Then the value of the input shouldn't be empty", async () => {
        render(<Autocomplete allowInputValue options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'a');

        act(() => {
          fireEvent.blur(input);
        });

        expect(input).toHaveValue('a');
      });
    });
  });

  describe('Given an Autocomplete with a set of options, allowed input value, and a default value', () => {
    const options = ['Apple', 'Banana', 'Cherry'];
    const defaultValue = options[1];

    describe('When the user types in a search term and the input is blurred', () => {
      it("Then the value of the input shouldn't match the default value", async () => {
        render(
          <Autocomplete
            allowInputValue
            defaultValue={defaultValue}
            options={options}
          />,
        );

        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'a');

        act(() => {
          fireEvent.blur(input);
        });

        expect(input).toHaveValue('a');
      });
    });
  });

  describe('Given an Autocomplete with a set of options and disabled search', () => {
    const options = ['Apple', 'Banana', 'Cherry'];

    describe('When the user types in a search term', () => {
      it('Then all options should be displayed', async () => {
        render(<Autocomplete disableSearch options={options} />);

        const input = screen.getByRole('combobox');
        await userEvent.type(input, 'a');

        expect(screen.getByText('Apple')).toBeVisible();
        expect(screen.getByText('Banana')).toBeVisible();
        expect(screen.getByText('Cherry')).toBeVisible();
      });
    });
  });

  describe('Given an Autocomplete with a set of options and autoHighlight set to true', () => {
    const options = ['Apple', 'Banana', 'Cherry'];

    describe('When the user clicks on the combobox input', () => {
      it('Then the first option in the dropdown list should be highlighted', async () => {
        render(<Autocomplete autoHighlight options={options} />);

        const inputElement = screen.getByRole('combobox');
        await userEvent.click(inputElement); // Open the dropdown list

        const textElement = screen.getByText('Apple');
        const optionsElements = screen.getAllByRole('option');

        const optionElement = optionsElements.find((el) =>
          el.contains(textElement),
        );

        expect(optionElement).toHaveClass('highlighted');
      });
    });

    describe('When the user types in the input and triggers a search', () => {
      it('Then the first option in the updated dropdown list should be highlighted', async () => {
        render(<Autocomplete autoHighlight options={options} />);

        const inputElement = screen.getByRole('combobox');
        await userEvent.click(inputElement); // Open the dropdown list
        await userEvent.type(inputElement, 'b'); // Trigger a search

        await waitFor(() => {
          const textElement = screen.getByText('Banana');
          const optionsElements = screen.getAllByRole('option');

          const optionElement = optionsElements.find((el) =>
            el.contains(textElement),
          );

          expect(optionElement).toHaveClass('highlighted');
        });
      });
    });
  });

  describe('Given an Autocomplete component with a set of options and inlineAutoComplete set to true', () => {
    const options = ['Apple', 'Banana', 'Orange'];

    describe('When the user types in the input and matches an option', () => {
      it('Then the matched portion of the option should be highlighted in the input', async () => {
        render(<Autocomplete inlineAutoComplete options={options} />);

        const input = screen.getByRole<HTMLInputElement>('combobox');
        await userEvent.type(input, 'b');

        await waitFor(() => {
          const textElement = screen.getByText('Banana');
          const optionsElements = screen.getAllByRole('option');

          const optionElement = optionsElements.find((el) =>
            el.contains(textElement),
          );

          expect(optionElement).toHaveClass('highlighted');
          expect(input.value).toBe('Banana');
        });
      });
    });

    describe('When the user types in the input and does not match any options', () => {
      it('Then the input should not be modified', async () => {
        render(<Autocomplete inlineAutoComplete options={options} />);

        const input = screen.getByRole<HTMLInputElement>('combobox');
        await userEvent.type(input, 'Grapes');

        await waitFor(() => {
          expect(input.value).toBe('Grapes');
        });
      });
    });
  });
});
