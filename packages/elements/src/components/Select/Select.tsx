import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import IconButton from '../IconButton';
import InputContainer from '../InputContainer';
import InputAction from '../InputAction';
import Label from '../Label';
import InputGroup from '../InputGroup';
import { textboxStyle } from '../../styles';

import * as S from './Select.css';

export type SelectShape = 'rectangle' | 'stadium';

export type SelectSize = 'sm' | 'md' | 'lg';

export type SelectDirection = 'row' | 'column';

export interface SelectProps {
  autoFocus?: boolean;
  children?: React.ReactNode;
  defaultValue?: string | number | readonly string[];
  direction?: SelectDirection;
  disabled?: boolean;
  error?: string;
  id?: string;
  invalid?: boolean;
  label?: React.ReactNode;
  maxRows?: number;
  message?: string;
  multiple?: boolean;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: (value: string | number | readonly string[]) => void;
  onFocus?: React.FocusEventHandler<HTMLSelectElement>;
  readOnly?: boolean;
  shape?: SelectShape;
  size?: SelectSize;
  success?: boolean;
  value?: string | number | readonly string[];
}

function Select(
  {
    defaultValue,
    direction = 'row',
    disabled,
    error,
    invalid,
    label,
    maxRows,
    message,
    multiple,
    readOnly,
    shape = 'rectangle',
    size = 'md',
    success,
    id = 'select',
    value,
    onChange,
    onFocus,
    onBlur,
    children,
    ...inputProps
  }: SelectProps,
  ref: React.Ref<HTMLSelectElement>,
): JSX.Element {
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
    <InputGroup
      direction={direction}
      error={error}
      htmlFor={id}
      label={
        typeof label === 'string' ? (
          <Label size={size === 'sm' ? 'sm' : 'md'}>{label}</Label>
        ) : (
          label
        )
      }
      message={message}
    >
      <InputContainer
        className={S.container}
        disabled={disabled}
        focused={focused}
        invalid={invalid || Boolean(error)}
        readOnly={readOnly}
        shape={shape}
        size={size}
      >
        <select
          {...inputProps}
          className={cn(S.select, textboxStyle, multiple && S.selectMultiple)}
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

        {!multiple && (
          <InputAction className={S.action}>
            <IconButton
              as="span"
              className={S.icon}
              size="sm"
              variant="secondary"
            >
              <Icon name="chevron-down" />
            </IconButton>
          </InputAction>
        )}
      </InputContainer>
    </InputGroup>
  );
}

export default React.forwardRef(Select);
