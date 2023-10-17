import { useId } from '@floating-ui/react';
import { FC, useContext, useLayoutEffect } from 'react';

import { Text, TextProps } from '../../Text';
import { DialogContext } from '../Dialog.context';

export type DialogDescriptionProps = Omit<TextProps, 'id'>;

const DialogDescription: FC<DialogDescriptionProps> = ({
  children,
  ...props
}) => {
  const id = useId();
  const { setDescriptionId } = useContext(DialogContext);

  useLayoutEffect(() => {
    setDescriptionId(id);

    return () => {
      setDescriptionId(undefined);
    };
  }, [id, setDescriptionId]);

  return (
    <Text id={id} {...props}>
      {children}
    </Text>
  );
};

export default DialogDescription;
