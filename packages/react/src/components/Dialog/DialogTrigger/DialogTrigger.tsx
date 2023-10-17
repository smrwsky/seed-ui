import {
  ButtonHTMLAttributes,
  cloneElement,
  FC,
  isValidElement,
  useContext,
} from 'react';

import { DialogContext } from '../Dialog.context';

export type DialogTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogTrigger: FC<DialogTriggerProps> = ({ children, ...props }) => {
  const { getReferenceProps, refs } = useContext(DialogContext);

  if (isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ref: refs.setReference,
      ...getReferenceProps(),
    });
  }

  return (
    <button {...props} ref={refs.setReference} {...getReferenceProps()}>
      {children}
    </button>
  );
};

export default DialogTrigger;
