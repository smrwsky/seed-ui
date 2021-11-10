import React from 'react';

export interface InputGroupProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children?: React.ReactNode;
}

const InputGroup = (
  { children, ...elementProps }: InputGroupProps,
  ref: React.Ref<HTMLLabelElement>,
): JSX.Element => (
  <label {...elementProps} ref={ref}>
    {children}
  </label>
);

InputGroup.displayName = 'InputGroup';

export default React.forwardRef(InputGroup);
