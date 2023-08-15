import cx from 'classnames';
import {
  ComponentType,
  forwardRef,
  LiHTMLAttributes,
  ReactElement,
} from 'react';

import * as S from './Option.css';
import { OptionAction } from './OptionAction';
import { OptionDescription } from './OptionDescription';
import { OptionIcon } from './OptionIcon';
import { OptionLabel } from './OptionLabel';

export interface OptionProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  ActionComponent?: ComponentType;
  highlighted?: boolean;
  description?: string;
  disabled?: boolean;
  icon?: ReactElement;
  invalid?: boolean;
  selected?: boolean;
}

const OptionBase = forwardRef<HTMLLIElement, OptionProps>(
  (
    {
      ActionComponent,
      highlighted,
      disabled,
      description,
      icon,
      invalid,
      selected,
      children,
      ...props
    },
    ref,
  ) => (
    <li
      aria-disabled={disabled}
      aria-selected={selected}
      className={cx(S.root, { highlighted, invalid })}
      ref={ref}
      role="option"
      {...props}
    >
      {icon}

      {typeof children === 'string' ? (
        <OptionLabel>{children}</OptionLabel>
      ) : (
        children
      )}

      {description && <OptionDescription>{description}</OptionDescription>}

      {ActionComponent && (
        <OptionAction>
          <ActionComponent />
        </OptionAction>
      )}
    </li>
  ),
);

OptionBase.displayName = 'Option';

const Option = Object.assign(OptionBase, {
  Action: OptionAction,
  Description: OptionDescription,
  Icon: OptionIcon,
  Label: OptionLabel,
});

export { Option };
