import {
  ChangeEventHandler,
  cloneElement,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  isValidElement,
  memo,
  ReactElement,
  useState,
} from 'react';

import { IconProps } from '../Icon';
import { InputAction, InputBox, InputBoxSize, TextBox } from '../InputGroup';

export type DateInputSize = InputBoxSize;

export interface DateInputProps {
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: ReactElement;
  id?: string;
  invalid?: boolean;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  rounded?: boolean;
  size?: DateInputSize;
  value?: string;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      disabled,
      icon,
      invalid,
      readOnly,
      rounded,
      size = 'md',
      className,
      id,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    function handleFocus(e: FocusEvent<HTMLInputElement>): void {
      e.persist();
      setFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>): void {
      e.persist();
      setFocused(false);

      if (onBlur) {
        onBlur(e);
      }
    }

    return (
      <InputBox
        className={className}
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        readOnly={readOnly}
        rounded={rounded}
        size={size}
      >
        {isValidElement<IconProps>(icon) && (
          <InputAction>{cloneElement(icon, { fontSize: 'lg' })}</InputAction>
        )}

        <TextBox
          {...inputProps}
          disabled={disabled}
          id={id}
          readOnly={readOnly}
          ref={ref}
          type="date"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </InputBox>
    );
  },
);

DateInput.displayName = 'DateInput';

export default memo(DateInput);
