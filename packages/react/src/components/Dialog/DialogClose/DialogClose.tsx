import {
  ButtonHTMLAttributes,
  cloneElement,
  FC,
  isValidElement,
  useContext,
} from 'react';

import { DialogContext } from '../Dialog.context';

export type DialogCloseProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogClose: FC<DialogCloseProps> = ({ children, ...props }) => {
  const { handleClose } = useContext(DialogContext);

  if (isValidElement<ButtonHTMLAttributes<HTMLButtonElement>>(children)) {
    return cloneElement(children, { onClick: handleClose });
  }

  return (
    <button {...props} onClick={handleClose}>
      {children}
    </button>
  );
};

export default DialogClose;
