import { useId } from '@floating-ui/react';
import { FC, useContext, useLayoutEffect } from 'react';

import { Text, TextProps } from '../../Text';
import { DialogContext } from '../Dialog.context';

export type DialogTitleProps = Omit<TextProps, 'id'>;

const DialogTitle: FC<DialogTitleProps> = ({ children, ...props }) => {
  const id = useId();
  const { setTitleId } = useContext(DialogContext);

  useLayoutEffect(() => {
    setTitleId(id);

    return () => {
      setTitleId(undefined);
    };
  }, [id, setTitleId]);

  return (
    <Text
      as="h1"
      fontSize="xl"
      fontWeight="bold"
      id={id}
      letterSpacing="tight"
      lineHeight="tight"
      {...props}
    >
      {children}
    </Text>
  );
};

export default DialogTitle;
