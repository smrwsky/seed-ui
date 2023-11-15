import React from 'react';

export function useMergeRefs<T>(...refs: Array<React.ForwardedRef<T>>) {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        ref.current = node;
      }
    });
  };
}
