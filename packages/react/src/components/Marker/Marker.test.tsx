import { render } from '../../utils/test-utils';
import { Icon } from '../Icon';

import Marker from './Marker';

describe('Marker', () => {
  describe('Given marker with Icon child component', () => {
    describe('When component is rendered', () => {
      it('Then the correct icon should be rendered', () => {
        const { getByTestId } = render(
          <Marker>
            <Icon data-testid="icon" name="check" />
          </Marker>,
        );

        expect(getByTestId('icon')).toBeInTheDocument();
      });
    });
  });
});
