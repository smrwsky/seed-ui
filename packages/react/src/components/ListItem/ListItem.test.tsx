import { render } from '../../utils/test-utils';
import { Icon } from '../Icon';
import { Marker } from '../Marker';

import ListItem from './ListItem';

describe('ListItem', () => {
  describe('Given ListItem with default props', () => {
    describe('When component is rendered', () => {
      it('Then `<li>` element should be in the document', () => {
        const { container } = render(<ListItem />);
        expect(container.querySelector('li')).toBeInTheDocument();
      });
    });
  });

  describe('Given ListItem with text content', () => {
    describe('When component is rendered', () => {
      it('Then provided text content should be displayed', () => {
        const { getByText } = render(<ListItem>List Item</ListItem>);
        expect(getByText('List Item')).toBeInTheDocument();
      });
    });
  });

  describe('Given ListItem with text content and custom marker', () => {
    describe('When component is rendered', () => {
      it('Then provided text content and marker icon', () => {
        const { getByText, getByTestId } = render(
          <ListItem>
            <Marker>
              <Icon data-testid="icon" name="check" />
            </Marker>{' '}
            List Item
          </ListItem>,
        );

        expect(getByText('List Item')).toBeInTheDocument();
        expect(getByTestId('icon')).toBeInTheDocument();
      });
    });
  });
});
