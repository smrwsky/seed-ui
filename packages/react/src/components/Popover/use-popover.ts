import { useContext } from 'react';

import { PopoverContext } from './Popover.context';

export function usePopover() {
  const {
    descriptionId,
    labelId,
    open,
    closePopover,
    setDescriptionId,
    setLabelId,
  } = useContext(PopoverContext);

  return {
    descriptionId,
    labelId,
    open,
    closePopover,
    setDescriptionId,
    setLabelId,
  };
}
