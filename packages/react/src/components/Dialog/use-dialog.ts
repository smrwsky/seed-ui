import { useContext } from 'react';

import { DialogContext } from './Dialog.context';

export function useDialog() {
  const {
    closeDialog,
    descriptionId,
    open,
    setDescriptionId,
    setLabelId,
    labelId,
  } = useContext(DialogContext);

  return {
    descriptionId,
    labelId,
    open,
    closeDialog,
    setDescriptionId,
    setLabelId,
  };
}
