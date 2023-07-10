import cn from 'classnames';
import {
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  memo,
  ReactElement,
  ReactNode,
  RefAttributes,
  useEffect,
  useState,
} from 'react';

import { textboxStyle } from '../../styles';
import { Icon, IconType } from '../Icon';
import { InputAction, InputBox, InputBoxSize } from '../InputGroup';

import * as S from './Select.css';

export type SelectSize = InputBoxSize;

export type SelectValue = string | string[];

export interface SelectProps<TValue extends SelectValue = SelectValue> {
  autoFocus?: boolean;
  defaultValue?: TValue;
  disabled?: boolean;
  icon?: string;
  iconType?: IconType;
  id?: string;
  invalid?: boolean;
  maxRows?: number;
  multiple?: boolean;
  name?: string;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: (value: TValue) => void;
  onFocus?: FocusEventHandler<HTMLSelectElement>;
  rounded?: boolean;
  size?: SelectSize;
  value?: TValue;
  children?: ReactNode;
}

export interface SelectFn {
  <TValue extends SelectValue = SelectValue>(
    props: SelectProps<TValue> & RefAttributes<HTMLSelectElement>,
  ): ReactElement;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      defaultValue,
      disabled,
      icon,
      iconType,
      invalid,
      maxRows,
      multiple,
      rounded,
      size = 'md',
      id = 'select',
      value,
      onChange,
      onFocus,
      onBlur,
      children,
      ...inputProps
    },
    ref,
  ) => {
    const [valueState, setValueState] = useState<
      string | number | readonly string[] | undefined
    >(defaultValue);

    const [focused, setFocused] = useState(false);

    useEffect(() => {
      if (typeof value !== 'undefined') {
        setValueState(value);
      }
    }, [value]);

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
      const nextValue = multiple
        ? Array.from(e.target.selectedOptions, (v) => v.value)
        : e.target.value;

      if (typeof value === 'undefined' && !onChange) {
        setValueState(nextValue);
      } else {
        onChange?.(nextValue);
      }
    }

    function handleFocus(e: FocusEvent<HTMLSelectElement>): void {
      e.persist();
      setFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    }

    function handleBlur(e: FocusEvent<HTMLSelectElement>): void {
      e.persist();
      setFocused(false);

      if (onBlur) {
        onBlur(e);
      }
    }

    return (
      <InputBox
        className={S.container}
        disabled={disabled}
        focused={focused}
        invalid={invalid}
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

        <select
          {...inputProps}
          className={cn(S.select, textboxStyle, multiple && S.selectMultiple)}
          disabled={disabled}
          id={id}
          multiple={multiple}
          ref={ref}
          size={maxRows}
          value={valueState}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        >
          {children}
        </select>

        {!multiple && !disabled && (
          <InputAction className={S.action}>
            <Icon fontSize="lg" name="chevron-down" />
          </InputAction>
        )}
      </InputBox>
    );
  },
);

Select.displayName = 'Select';

export default memo(Select) as SelectFn;
