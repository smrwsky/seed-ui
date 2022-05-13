import React, { useEffect, useState } from 'react';

import isCsr from './is-csr';

export type CSROnlyProps = {
  children: React.ReactNode;
};

function CSROnly({ children }: CSROnlyProps): JSX.Element {
  const [csr, setCsr] = useState(() => isCsr());

  useEffect(() => {
    setCsr(true);
  }, []);

  return <>{csr && children}</>;
}

export default CSROnly;
