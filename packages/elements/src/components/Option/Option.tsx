import React, { ComponentType, forwardRef, memo } from 'react';
import cx from 'classnames';
import { IconType } from '@seed-ui/icons';

import OptionLabel from './OptionLabel';
import OptionIcon from './OptionIcon';
import OptionDescription from './OptionDescription';
import OptionAction from './OptionAction';
import * as S from './Option.css';

export interface OptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ActionComponent?: ComponentType;
  active?: boolean;
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
      active,
      disabled,
      description,
      icon,
      iconType,
      invalid,
      selected,
      children,
      ...elementProps
    },
    ref,
  ) => (
    <li
      aria-disabled={disabled}
      aria-selected={selected}
      className={cx(
        S.root,
        selected && S.rootSelected,
        active && S.rootActive,
        invalid && S.rootInvalid,
      )}
      ref={ref}
      role="option"
      {...elementProps}
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
