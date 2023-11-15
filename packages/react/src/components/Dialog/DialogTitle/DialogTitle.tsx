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
      className={cn(
        atoms({
          flex: 1,
        }),
        className,
      )}
      fontWeight="semiBold"
      id={id}
      letterSpacing="widest"
      lineHeight="snug"
      {...props}
    >
      {children}
    </Text>
  );
};

export default DialogTitle;
