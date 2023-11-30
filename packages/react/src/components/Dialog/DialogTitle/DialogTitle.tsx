'use client';

import { useId } from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { useContext, useLayoutEffect } from 'react';

import { Text, TextProps } from '../../Text';
import { DialogContext } from '../Dialog.context';

export type DialogTitleProps = Omit<TextProps, 'id'>;

const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  className,
  ...props
}) => {
  const id = useId();
  const { setLabelId } = useContext(DialogContext);

  useLayoutEffect(() => {
    setLabelId(id);

    return () => {
      setLabelId(undefined);
    };
  }, [id, setLabelId]);

  return (
    <Text
      as="h1"
      className={cn(
        atoms({
          flex: 1,
        }),
        className,
      )}
      fontWeight="semiBold"
      id={id}
      {...props}
    >
      {children}
    </Text>
  );
};

export default DialogTitle;
