import {
  FC,
  FocusEvent,
  forwardRef,
  memo,
  TextareaHTMLAttributes,
  useCallback,
  useState,
} from 'react';

import { InputBox, InputBoxSize } from '../InputGroup';

import * as S from './Textarea.css';

export type TextareaSize = InputBoxSize;

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  rounded?: boolean;
  size?: TextareaSize;
  value?: string;
}

const Textarea: FC<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      rounded,
      size,
      disabled,
      invalid,
      readOnly,
      id,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(true);

        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    return (
      <InputBox
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        readOnly={readOnly}
        rounded={rounded}
        size={size}
      >
        <textarea
          className={S.textarea}
          disabled={disabled}
          id={id}
          readOnly={readOnly}
          ref={ref}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...inputProps}
        />
      </InputBox>
    );
  },
);

Textarea.displayName = 'Textarea';

export default memo(Textarea);
