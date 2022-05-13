import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

interface PopoverPortalProps {
  children?: React.ReactNode;
  container: Element;
  element: Element;
  scoutElement: Element;
}

function PopoverPortal({
  container,
  element,
  scoutElement,
  children,
}: PopoverPortalProps): JSX.Element {
  useLayoutEffect(() => {
    container.appendChild(element);
    container.appendChild(scoutElement);
    return () => {
      container.removeChild(element);
      container.removeChild(scoutElement);
    };
  }, [container, element, scoutElement]);

  return ReactDOM.createPortal(children, element);
}

export default PopoverPortal;
