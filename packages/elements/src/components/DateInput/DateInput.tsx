import React, {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  forwardRef,
  memo,
  ReactNode,
  RefAttributes,
  useState,
} from 'react';
import { Icon, IconType } from '@seed-ui/icons';

import { InputAction, InputBox, TextBox } from '../InputGroup';

export type DateInputSize = 'sm' | 'md' | 'lg';

export interface DateInputProps {
  autoFocus?: boolean;
  children?: ReactNode;
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
  success?: boolean;
  value?: string;
}

const DateInput: FC<DateInputProps & RefAttributes<HTMLInputElement>> =
  forwardRef<HTMLInputElement, DateInputProps>(
    (
      {
        disabled,
        icon,
        iconType,
        invalid,
        readOnly,
        rounded,
        size = 'md',
        success,
        className,
        id,
        onFocus,
        onBlur,
        children,
        ...inputProps
      },
      ref,
    ) => {
      const [focused, setFocused] = useState(false);

      function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
        e.persist();
        setFocused(true);

        if (onFocus) {
          onFocus(e);
        }
      }

      function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
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
              <Icon name={icon} size="sm" type={iconType} variant="secondary" />
            </InputAction>
          )}

          <TextBox
            {...inputProps}
            disabled={disabled}
            id={id}
            onBlur={handleBlur}
            onFocus={handleFocus}
            readOnly={readOnly}
            ref={ref}
            type="date"
          />
        </InputBox>
      );
    },
  );

DateInput.displayName = 'DateInput';

export default memo(DateInput);
