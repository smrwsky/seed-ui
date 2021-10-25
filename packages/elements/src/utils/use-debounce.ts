import React from 'react';

import { isSsr } from './is-ssr';
import { useTimeout } from './use-timeout';

export const useDebounce = (): ((
  cb: () => void | Promise<void>,
  wait?: number,
) => void) => {
  const { setTimeout } = useTimeout();

  const promise = React.useRef<Promise<void> | void | null>(null);

  return React.useCallback(
    (cb: () => void | Promise<void>, timeout) => {
      const fn = async () => {
        try {
          if (promise.current) {
            await promise.current;
          }

          promise.current = cb();
          await promise.current;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        } finally {
          promise.current = null;
        }
      };

      if (timeout == null) {
        fn();
      } else if (!isSsr()) {
        setTimeout(fn, timeout);
      }
    },
    [setTimeout],
  );
};
