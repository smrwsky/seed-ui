'use client';

import React, {
  cloneElement,
  isValidElement,
  useCallback,
  useContext,
} from 'react';

import { DropdownMenuContext } from '../DropdownMenu.context';

export interface DropdownMenuTriggerProps {
  children: React.ReactElement;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  children,
}: DropdownMenuTriggerProps) => {
  const { refs, getReferenceProps, setHasFocusInside } =
    useContext(DropdownMenuContext);

  const handleFocus = useCallback(() => {
    setHasFocusInside(false);
  }, [setHasFocusInside]);

  return isValidElement<React.HTMLProps<HTMLButtonElement>>(children)
    ? cloneElement(children, {
        ...children.props,
        ref: refs.setReference,
        ...getReferenceProps({
          onFocus: handleFocus,
        }),
      })
    : null;
};

DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export default DropdownMenuTrigger;
