import React from 'react';

import { isSsr } from './is-ssr';
import { useTimeout } from './use-timeout';

export const useThrottle = (): ((
  cb: () => void | Promise<void>,
  wait?: number,
) => void) => {
  const { setTimeout } = useTimeout();

  return React.useCallback(
    (cb: () => void | Promise<void>, timeout) => {
      if (!isSsr()) {
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
};
