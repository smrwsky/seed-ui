import {
  cloneElement,
  FC,
  HTMLProps,
  isValidElement,
  ReactElement,
  useCallback,
  useContext,
} from 'react';

import { MenuContext } from '../Menu.context';

export interface DropdownMenuTriggerProps {
  children: ReactElement;
}

const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ({
  children,
}: DropdownMenuTriggerProps) => {
  const { refs, getReferenceProps, setHasFocusInside } =
    useContext(MenuContext);

  const handleFocus = useCallback(() => {
    setHasFocusInside(false);
  }, [setHasFocusInside]);

  return isValidElement<HTMLProps<HTMLButtonElement>>(children)
    ? cloneElement(children, {
        ...children.props,
        ref: refs.setReference,
        ...getReferenceProps({
          onFocus: handleFocus,
        }),
      })
    : null;
};

export default DropdownMenuTrigger;
