import { render, screen } from '../../utils/test-utils';

import Radio from './Radio';

describe('Radio', () => {
  describe('Given the Radio component with default props', () => {
    describe('When it is rendered', () => {
      it('Then it should be enabled and unchecked', () => {
        render(<Radio />);
        expect(screen.getByRole('radio')).toBeInTheDocument();
        expect(screen.getByRole('radio')).toBeEnabled();
        expect(screen.getByRole('radio')).not.toBeChecked();
      });
    });
  });

  describe('Given the Radio component with `disabled` set to true', () => {
    describe('When it is rendered', () => {
      it('Then it should render with the input field disabled', () => {
        render(<Radio disabled />);
        expect(screen.getByRole('radio')).toBeDisabled();
      });
    });
  });

  describe('Given the Radio component with `defaultChecked`', () => {
    describe('When it is rendered', () => {
      it('Then it should be checked', () => {
        render(<Radio defaultChecked />);
        expect(screen.getByRole('radio')).toBeChecked();
      });
    });
  });

  describe('Given the Radio component with the `checked` prop', () => {
    describe('When it is rendered', () => {
      it('Then it should be checked', () => {
        render(<Radio checked />);
        expect(screen.getByRole('radio')).toBeChecked();
      });
    });
  });
});
