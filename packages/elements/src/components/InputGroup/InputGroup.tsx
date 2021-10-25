import React from 'react';
import { Space } from '@seed-ui/layout';

export interface InputGroupProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children?: React.ReactNode;
}

const InputGroup = (
  { children, ...elementProps }: InputGroupProps,
  ref: React.Ref<HTMLLabelElement>,
): JSX.Element => (
  <Space {...elementProps} ref={ref} as="label" direction="column" gutter={1}>
    {children}
  </Space>
);

InputGroup.displayName = 'InputGroup';

export default React.forwardRef(InputGroup);
