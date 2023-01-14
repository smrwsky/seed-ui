import React, {
  forwardRef,
  memo,
  ReactElement,
  ReactNode,
  RefAttributes,
} from 'react';
import cn from 'classnames';
import { Icon, IconType } from '@seed-ui/icons';

import { InputAction, InputContainer } from '../InputGroup';
import { textboxStyle } from '../../styles';

import * as S from './Select.css';

export type SelectSize = 'sm' | 'md' | 'lg';

export type SelectValue = string | string[];

export interface SelectProps<TValue extends SelectValue = SelectValue>
  extends React.RefAttributes<HTMLSelectElement> {
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
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: (value: TValue) => void;
  onFocus?: React.FocusEventHandler<HTMLSelectElement>;
  rounded?: boolean;
  size?: SelectSize;
  success?: boolean;
  value?: TValue;
  children?: ReactNode;
}

export interface SelectFn {
  <TValue extends SelectValue = SelectValue>(
    props: SelectProps<TValue> & RefAttributes<HTMLSelectElement>,
  ): ReactElement | null;
}

const Select: React.FC<SelectProps> = forwardRef(
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
      success,
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
    const [valueState, setValueState] = React.useState<
      string | number | readonly string[] | undefined
    >(defaultValue);

    const [focused, setFocused] = React.useState(false);

    React.useEffect(() => {
      if (typeof value !== 'undefined') {
        setValueState(value);
      }
    }, [value]);

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
      const nextValue = multiple
        ? Array.from(e.target.selectedOptions, (v) => v.value)
        : e.target.value;

      if (typeof value === 'undefined' && !onChange) {
        setValueState(nextValue);
      } else {
        onChange?.(nextValue);
      }
    }

    function handleFocus(e: React.FocusEvent<HTMLSelectElement>): void {
      e.persist();
      setFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    }

    function handleBlur(e: React.FocusEvent<HTMLSelectElement>): void {
      e.persist();
      setFocused(false);

      if (onBlur) {
        onBlur(e);
      }
    }

    return (
      <InputContainer
        className={S.container}
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        rounded={rounded}
        size={size}
      >
        {icon && (
          <InputAction>
            <Icon name={icon} size="sm" type={iconType} variant="secondary" />
          </InputAction>
        )}

        <select
          {...inputProps}
          className={cn(S.select, textboxStyle, multiple && S.selectMultiple)}
          disabled={disabled}
          id={id}
          multiple={multiple}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          ref={ref}
          size={maxRows}
          value={valueState}
        >
          {children}
        </select>

        {!multiple && !disabled && (
          <InputAction className={S.action}>
            <Icon name="chevron-down" size="sm" />
          </InputAction>
        )}
      </InputContainer>
    );
  },
);

Select.displayName = 'Select';

export default memo(Select) as SelectFn;
