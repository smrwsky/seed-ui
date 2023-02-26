import cn from 'classnames';
import {
  FC,
  FocusEvent,
  forwardRef,
  memo,
  RefAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react';

import { textboxStyle } from '../../styles';
import { InputBox } from '../InputGroup';

import * as S from './Textarea.css';

export type TextareaSize = 'sm' | 'md' | 'lg';

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

const Textarea: FC<TextareaProps & RefAttributes<HTMLTextAreaElement>> =
  forwardRef<HTMLTextAreaElement, TextareaProps>(
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

      const handleFocus = (e: FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(true);

        if (onFocus) {
          e.persist();
          onFocus(e);
        }
      };

      const handleBlur = (e: FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(false);

        if (onBlur) {
          e.persist();
          onBlur(e);
        }
      };

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
            className={cn(textboxStyle, S.textarea)}
            disabled={disabled}
            id={id}
            onBlur={handleBlur}
            onFocus={handleFocus}
            readOnly={readOnly}
            ref={ref}
            {...inputProps}
          />
        </InputBox>
      );
    },
  );

Textarea.displayName = 'Textarea';

export default memo(Textarea);
