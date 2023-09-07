import { render } from '../../utils/test-utils';

import { Icon } from './Icon';

describe('Icon', () => {
  describe('Given check icon', () => {
    describe('When component is rendered', () => {
      it('Then the `<i>` tag should be rendered', () => {
        const { container } = render(<Icon name="check" />);
        expect(container.querySelector('i')).toBeInTheDocument();
      });
    });
  });
});
