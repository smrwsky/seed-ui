'use client';

import { useId } from '@floating-ui/react';
import React, { useContext, useLayoutEffect } from 'react';

import { Text, TextProps } from '../../Text';
import { DialogContext } from '../Dialog.context';

export type DialogDescriptionProps = Omit<TextProps, 'id'>;

const DialogDescription: React.FC<DialogDescriptionProps> = ({
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

DialogDescription.displayName = 'DialogDescription';

export default DialogDescription;
