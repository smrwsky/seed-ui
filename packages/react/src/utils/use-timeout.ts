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

export function useTimeout(): TimeoutAPI {
  const timeouts = React.useRef<Map<TimeoutKey, NodeJS.Timeout>>(new Map());

  const clearTimeout = React.useCallback((key?: TimeoutKey): void => {
    global.clearTimeout(timeouts.current.get(key));
    timeouts.current.delete(key);
  }, []);

  const setTimeout = React.useCallback(
    (
      fn: () => void | Promise<void>,
      timeout?: number,
      key?: TimeoutKey,
    ): void => {
      clearTimeout(key);
      timeouts.current.set(
        key,
        global.setTimeout(() => {
          void fn();
        }, timeout),
      );
    },
    [clearTimeout],
  );

  const clearTimeouts = React.useCallback((): void => {
    timeouts.current.forEach((timeout) => global.clearTimeout(timeout));
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
