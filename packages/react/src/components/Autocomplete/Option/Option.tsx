import cx from 'classnames';
import { ComponentType, forwardRef, LiHTMLAttributes, memo } from 'react';

import { IconType } from '../../Icon';
import { OptionAction } from '../OptionAction';
import { OptionDescription } from '../OptionDescription';
import { OptionIcon } from '../OptionIcon';
import { OptionLabel } from '../OptionLabel';

import * as S from './Option.css';

export interface OptionProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  ActionComponent?: ComponentType;
  highlighted?: boolean;
  description?: string;
  disabled?: boolean;
  icon?: string;
  iconType?: IconType;
  invalid?: boolean;
  selected?: boolean;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(
  (
    {
      ActionComponent,
      highlighted,
      disabled,
      description,
      icon,
      iconType,
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
      {icon && <OptionIcon name={icon} type={iconType} />}

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

Option.displayName = 'Option';

export default Object.assign(memo(Option), {
  Action: OptionAction,
  Description: OptionDescription,
  Icon: OptionIcon,
  Label: OptionLabel,
});
