import { act, fireEvent, render } from '../../utils/test-utils';

import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('should clear input on blur', () => {
    const { getByRole } = render(<Autocomplete />);
    const input = getByRole('combobox');

    act(() => {
      input.focus();

      fireEvent.change(document.activeElement as HTMLInputElement, {
        target: { value: 'a' },
      });
    });

    expect((input as HTMLInputElement).value).toEqual('a');

    act(() => {
      (document.activeElement as HTMLInputElement).blur();
    });

    expect((input as HTMLInputElement).value).toEqual('');
  });
});
