import { useContext } from 'react';

import { DialogContext } from './Dialog.context';

export function useDialog() {
  const {
    closeDialog,
    descriptionId,
    open,
    setDescriptionId,
    setTitleId,
    titleId,
  } = useContext(DialogContext);

  return {
    closeDialog,
    descriptionId,
    open,
    setDescriptionId,
    setTitleId,
    titleId,
  };
}
