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

  const clearTimeouts = React.useCallback((): void => {
    timeouts.current.forEach((timeout) => global.clearTimeout(timeout));
    timeouts.current.clear();
  }, []);

  const clear = React.useCallback((key?: TimeoutKey): void => {
    clearTimeout(timeouts.current.get(key));
    timeouts.current.delete(key);
  }, []);

  const set = React.useCallback(
    (
      fn: () => void | Promise<void>,
      timeout?: number,
      key?: TimeoutKey,
    ): void => {
      clearTimeout(key);
      timeouts.current.set(
        key,
        setTimeout(() => {
          void fn();
        }, timeout),
      );
    },
    [],
  );

  React.useEffect(
    () => () => {
      clearTimeouts();
    },
    [clearTimeouts],
  );

  return { setTimeout: set, clearTimeout: clear, clearTimeouts };
}
