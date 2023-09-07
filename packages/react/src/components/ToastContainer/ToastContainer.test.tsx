import { render } from '../../utils/test-utils';
import { Toast } from '../Toast';

import ToastContainer from './ToastContainer';

describe('ToastContainer', () => {
  describe('Given ToastContainer is rendered with Toast as children', () => {
    describe('When the toast is displayed', () => {
      it('Then the title should be visible and correctly rendered within the toast', () => {
        const { getByTestId } = render(
          <ToastContainer>
            <Toast data-testid="toast">Error Message</Toast>
          </ToastContainer>,
        );

        expect(getByTestId('toast')).toBeInTheDocument();
      });
    });
  });
});
