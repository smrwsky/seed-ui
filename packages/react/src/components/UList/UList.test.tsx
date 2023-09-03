import { render } from '../../utils/test-utils';
import { ListItem } from '../ListItem';

import UList from './UList';

describe('UList', () => {
  describe('Given UList with default props', () => {
    describe('When component is rendered', () => {
      it('Then `<ul>` element should be in the document', () => {
        const { container } = render(<UList />);
        expect(container.querySelector('ul')).toBeInTheDocument();
      });
    });
  });

  describe('Given UList with list items', () => {
    describe('When component is rendered', () => {
      it('Then provided children should be displayed', () => {
        const { getByText } = render(
          <UList>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </UList>,
        );

        expect(getByText('Item 1')).toBeInTheDocument();
        expect(getByText('Item 2')).toBeInTheDocument();
        expect(getByText('Item 3')).toBeInTheDocument();
      });
    });
  });
});
