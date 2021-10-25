import React from 'react';

export type IntervalKey = number | string | undefined;

export interface IntervalAPI {
  setInterval: (fn: () => void, interval?: number, key?: IntervalKey) => void;
  clearInterval: (key?: IntervalKey) => void;
  clearIntervals: () => void;
}

export const useInterval = (): IntervalAPI => {
  const intervals = React.useRef<Map<IntervalKey, number>>(
    new Map<IntervalKey, number>(),
  );

  const clearInterval = React.useCallback((key?: IntervalKey): void => {
    window.clearInterval(intervals.current.get(key));
    intervals.current.delete(key);
  }, []);

  const setInterval = React.useCallback(
    (fn: () => void, interval?: number, key?: IntervalKey): void => {
      clearInterval(key);
      intervals.current.set(key, window.setInterval(fn, interval));
    },
    [clearInterval],
  );

  const clearIntervals = React.useCallback((): void => {
    intervals.current.forEach((interval) => window.clearInterval(interval));
    intervals.current.clear();
  }, []);

  React.useEffect(
    () => () => {
      clearIntervals();
    },
    [clearIntervals],
  );

  return { setInterval, clearInterval, clearIntervals };
};
