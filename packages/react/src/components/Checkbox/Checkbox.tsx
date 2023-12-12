import React, { forwardRef, memo } from 'react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ invalid, ...props }, ref) => (
    <input {...props} ref={ref} data-invalid={invalid} type="checkbox" />
  ),
);

Checkbox.displayName = 'Checkbox';

export default memo(Checkbox);
