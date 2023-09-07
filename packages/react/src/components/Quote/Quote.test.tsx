import { render } from '../../utils/test-utils';

import Quote from './Quote';

describe('Quote', () => {
  describe('Given Quote with default props', () => {
    describe('When component is rendered', () => {
      it('Then `<blockquote>` element should be in the document', () => {
        const { container } = render(<Quote />);
        expect(container.querySelector('blockquote')).toBeInTheDocument();
      });
    });
  });

  describe('Given Quote with text content', () => {
    describe('When component is rendered', () => {
      it('Then provided text should be displayed', () => {
        const { getByText } = render(<Quote>Quote</Quote>);
        expect(getByText('Quote')).toBeInTheDocument();
      });
    });
  });
});
