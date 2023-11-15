import { render, screen, fireEvent } from '../../utils/test-utils';

import Range from './Range';

describe('Range', () => {
  describe('Given the Range component with default props', () => {
    describe('When it is rendered', () => {
      it('Then it should render with default values, and the input field should be enabled and empty', () => {
        render(<Range />);
        expect(screen.getByRole('slider')).toBeInTheDocument();
        expect(screen.getByRole('slider')).toBeEnabled();
        expect(screen.getByRole('slider')).toHaveValue('50');
      });
    });
  });

  describe('Given the Range component with `disabled` set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the input field disabled', () => {
        render(<Range disabled />);
        expect(screen.getByRole('slider')).toBeDisabled();
      });
    });
  });

  describe('Given the Range component with `min` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the min value', () => {
        render(<Range min={10} />);
        expect(screen.getByRole('slider')).toHaveAttribute('min', '10');
      });
    });
  });

  describe('Given the Range component with `max` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the max value', () => {
        render(<Range max={1000} />);
        expect(screen.getByRole('slider')).toHaveAttribute('max', '1000');
      });
    });
  });

  describe('Given the Range component with `step` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the step value', () => {
        render(<Range step={1} />);
        expect(screen.getByRole('slider')).toHaveAttribute('step', '1');
      });
    });
  });

  describe('Given the Range component with `defaultValue`', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the default value', () => {
        render(<Range defaultValue={100} />);
        expect(screen.getByRole('slider')).toHaveValue('100');
      });
    });
  });

  describe('Given the Range component with an `onChange` handler', () => {
    describe('When a user types into the input field', () => {
      it('Then it should call the `onChange` handler with the new value', () => {
        const onChange = jest.fn();
        render(<Range onChange={onChange} />);

        fireEvent.change(screen.getByRole('slider'), {
          target: { value: 100 },
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(onChange.mock.calls[0][0].target.value).toBe('100');
      });
    });
  });

  describe('Given the Range component with the `value` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the value', () => {
        render(<Range value={100} />);
        expect(screen.getByRole('slider')).toHaveValue('100');
      });
    });

    describe('When the `value` prop changes', () => {
      it('Then it should render with the new value', () => {
        const { rerender } = render(<Range value={80} />);
        expect(screen.getByRole('slider')).toHaveValue('80');
        rerender(<Range value={100} />);
        expect(screen.getByRole('slider')).toHaveValue('100');
      });
    });
  });
});
