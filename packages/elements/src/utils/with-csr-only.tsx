import React from 'react';

import CSROnly from './CSROnly';

function withCsrOnly<TProps = never>(
  Component: React.ComponentType<TProps>,
): React.ComponentType<TProps> {
  function CSROnlyComponent(props: TProps) {
    return (
      <CSROnly>
        <Component {...props} />
      </CSROnly>
    );
  }

  return CSROnlyComponent;
}

export default withCsrOnly;
