import React from 'react';

export type TimeoutKey = number | string | undefined;

export interface TimeoutAPI {
  clearTimeout: (key?: TimeoutKey) => void;
  clearTimeouts: () => void;
  setTimeout: (
    fn: () => void | Promise<void>,
    timeout?: number,
    key?: TimeoutKey,
  ) => void;
}

function useTimeout(): TimeoutAPI {
  const timeouts = React.useRef<Map<TimeoutKey, number>>(
    new Map<TimeoutKey, number>(),
  );

  const clearTimeout = React.useCallback((key?: TimeoutKey): void => {
    window.clearTimeout(timeouts.current.get(key));
    timeouts.current.delete(key);
  }, []);

  const setTimeout = React.useCallback(
    (
      fn: () => void | Promise<void>,
      timeout?: number,
      key?: TimeoutKey,
    ): void => {
      clearTimeout(key);
      timeouts.current.set(key, window.setTimeout(fn, timeout));
    },
    [clearTimeout],
  );

  const clearTimeouts = React.useCallback((): void => {
    timeouts.current.forEach((timeout) => window.clearTimeout(timeout));
    timeouts.current.clear();
  }, []);

  React.useEffect(
    () => () => {
      clearTimeouts();
    },
    [clearTimeouts],
  );

  return { setTimeout, clearTimeout, clearTimeouts };
}

export default useTimeout;
