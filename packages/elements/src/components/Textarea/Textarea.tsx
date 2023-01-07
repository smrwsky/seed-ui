import React, {
  FC,
  forwardRef,
  memo,
  RefAttributes,
  TextareaHTMLAttributes,
} from 'react';
import cn from 'classnames';

import { textboxStyle } from '../../styles';
import { InputContainer } from '../InputGroup';

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
        onKeyPress,
        ...inputProps
      },
      ref,
    ) => {
      const [focused, setFocused] = React.useState(false);

      const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(true);

        if (onFocus) {
          e.persist();
          onFocus(e);
        }
      };

      const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(false);

        if (onBlur) {
          e.persist();
          onBlur(e);
        }
      };

      return (
        <InputContainer
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
        </InputContainer>
      );
    },
  );

Textarea.displayName = 'Textarea';

export default memo(Textarea);
