import { render } from '../../utils/test-utils';

import Text from './Text';

describe('Text', () => {
  describe('Given Text with text content', () => {
    describe('When component is rendered', () => {
      it('Then provided text should be displayed', () => {
        const { getByText } = render(<Text>Text</Text>);
        expect(getByText('Text')).toBeInTheDocument();
      });
    });
  });
});
