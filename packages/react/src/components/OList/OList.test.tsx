import { render } from '../../utils/test-utils';
import { ListItem } from '../ListItem';

import OList from './OList';

describe('OList', () => {
  describe('Given OList with default props', () => {
    describe('When component is rendered', () => {
      it('Then `<ol>` element should be in the document', () => {
        const { container } = render(<OList />);
        expect(container.querySelector('ol')).toBeInTheDocument();
      });
    });
  });

  describe('Given OList with list items', () => {
    describe('When component is rendered', () => {
      it('Then provided children should be displayed', () => {
        const { getByText } = render(
          <OList>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </OList>,
        );

        expect(getByText('Item 1')).toBeInTheDocument();
        expect(getByText('Item 2')).toBeInTheDocument();
        expect(getByText('Item 3')).toBeInTheDocument();
      });
    });
  });
});
