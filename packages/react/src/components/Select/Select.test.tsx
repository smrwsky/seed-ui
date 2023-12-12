import { render, screen, userEvent } from '../../utils/test-utils';

import Select from './Select';

describe('Select', () => {
  describe('Given a Select component with default props and valid options children', () => {
    describe("When it's rendered", () => {
      it('Then it should render without errors', () => {
        render(
          <Select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        expect(screen.getByRole('combobox')).toBeInTheDocument();
      });
    });
  });

  describe('Given a Select component with valid `startIcon` element', () => {
    describe("When it's rendered", () => {
      it('Then it should render with the `startIcon` element', () => {
        render(
          <Select startIcon={<div data-testid="start-icon" />}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        expect(screen.getByTestId('start-icon')).toBeInTheDocument();
      });
    });
  });

  describe('Given a Select component with valid `endIcon` element', () => {
    describe("When it's rendered", () => {
      it('Then it should render with the `endIcon` element', () => {
        render(
          <Select endIcon={<div data-testid="end-icon" />}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        expect(screen.getByTestId('end-icon')).toBeInTheDocument();
      });
    });
  });

  describe('Given a Select component with `htmlSize` prop provided with a numeric value', () => {
    describe("When it's rendered", () => {
      it('Then it should render with the size attribute set to the provided value', () => {
        render(
          <Select htmlSize={2}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        expect(screen.getByRole('listbox')).toHaveAttribute('size', '2');
      });
    });
  });

  describe('Given a Select component with `disabled` prop set to true', () => {
    describe("When it's rendered", () => {
      it('Then it should render with the `disabled` attribute set to true', () => {
        render(
          <Select disabled>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        expect(screen.getByRole('combobox')).toHaveAttribute('disabled');
      });
    });
  });

  describe('Given the Select component with the `defaultValue` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with correct selected option', () => {
        render(
          <Select defaultValue="2">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        expect(screen.getByRole('combobox')).toHaveValue('2');
      });
    });
  });

  describe('Given the Select component with the `value` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the correct value', () => {
        render(
          <Select value="2">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        expect(screen.getByRole('combobox')).toHaveValue('2');
      });
    });
  });

  describe('Given the Select component with an `onChange` handler', () => {
    describe('When a user selects an option', () => {
      it('Then it should call the `onChange` handler', async () => {
        const onChange = jest.fn();

        render(
          <Select onChange={onChange}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>,
        );

        await userEvent.selectOptions(screen.getByRole('combobox'), '1');

        expect(onChange).toHaveBeenCalledWith('1');
      });
    });
  });

  describe('Given the Select component with the `defaultValue` and `multiple` prop set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the correct value', () => {
        render(
          <Select defaultValue={['1', '2']} multiple>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>,
        );

        expect(screen.getByRole('listbox')).toHaveValue(['1', '2']);
      });
    });
  });

  describe('Given the Select component with the `value` and `multiple` props', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the correct value', () => {
        render(
          <Select multiple value={['1', '2']}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>,
        );

        expect(screen.getByRole('listbox')).toHaveValue(['1', '2']);
      });
    });
  });

  describe('Given the Select component with the `onChange` and `multiple` props', () => {
    describe('When a user selects an option', () => {
      it('Then it should call the `onChange` handler', async () => {
        const onChange = jest.fn();
        render(
          <Select multiple onChange={onChange}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>,
        );

        await userEvent.selectOptions(screen.getByRole('listbox'), ['1', '2']);

        expect(onChange).toHaveBeenCalledWith(['1', '2']);
      });
    });
  });
});
