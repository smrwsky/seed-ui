import React, { forwardRef, memo } from 'react';

export interface RangeProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  defaultValue?: number;
  disabled?: boolean;
  invalid?: boolean;
  min?: number;
  max?: number;
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ invalid, ...props }, ref) => (
    <input {...props} ref={ref} data-invalid={invalid} type="range" />
  ),
);

Range.displayName = 'Range';

export default memo(Range);
