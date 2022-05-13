import React from 'react';

import isCsr from './is-csr';
import useTimeout from './use-timeout';

function useThrottle(): (
  cb: () => void | Promise<void>,
  wait?: number,
) => void {
  const { setTimeout } = useTimeout();

  return React.useCallback(
    (cb: () => void | Promise<void>, timeout) => {
      if (isCsr()) {
        setTimeout(async () => {
          try {
            await cb();
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
          }
        }, timeout);
      }
    },
    [setTimeout],
  );
}

export default useThrottle;
