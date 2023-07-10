import {
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  memo,
  useState,
} from 'react';

import { Icon, IconType } from '../Icon';
import { InputAction, InputBox, InputBoxSize, TextBox } from '../InputGroup';

export type DateInputSize = InputBoxSize;

export interface DateInputProps {
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: string;
  iconType?: IconType;
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
      iconType,
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
        {icon && (
          <InputAction>
            <Icon
              color="primary500"
              fontSize="lg"
              name={icon}
              type={iconType}
            />
          </InputAction>
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
