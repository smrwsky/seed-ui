import React from 'react';

export function mergeRefs<T>(
  ...refs: Array<React.Ref<T> | React.MutableRefObject<T> | undefined>
) {
  return (node: T): void => {
    // eslint-disable-next-line no-restricted-syntax
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    }
  };
}
