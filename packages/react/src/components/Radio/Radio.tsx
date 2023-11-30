import React, { forwardRef, memo } from 'react';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ invalid, ...props }, ref) => (
    <input {...props} data-invalid={invalid} ref={ref} type="radio" />
  ),
);

Radio.displayName = 'Radio';

export default memo(Radio);
