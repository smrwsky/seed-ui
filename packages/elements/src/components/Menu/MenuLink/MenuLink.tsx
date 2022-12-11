import React, { ComponentType, forwardRef, memo, RefAttributes } from 'react';
import cx from 'classnames';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { IconType } from '@seed-ui/icons';

import MenuContext from '../context';
import MenuLabel from '../MenuLabel';
import MenuIcon from '../MenuIcon';
import MenuDescription from '../MenuDescription';
import MenuAction from '../MenuAction';

import * as S from './MenuLink.css';

export interface MenuLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {
  active?: boolean;
  description?: string;
  disabled?: boolean;
  icon?: string;
  iconType?: IconType;
  indent?: number;
  invalid?: boolean;
  selected?: boolean;
  renderAction?: ComponentType;
}

const MenuLink: React.FC<MenuLinkProps & RefAttributes<HTMLAnchorElement>> =
  forwardRef<HTMLAnchorElement, MenuLinkProps>(
    (
      {
        active,
        disabled,
        description,
        href,
        icon,
        iconType,
        indent = 0,
        invalid,
        role = 'menuitem',
        selected,
        style,
        renderAction: ActionComponent,
        children,
        ...elementProps
      },
      ref,
    ) => {
      const { collapsed, type, size, variant } = React.useContext(MenuContext);
      const indentBase = size === 'md' ? 2 : 1.75;

      return (
        <a
          className={cx(
            S.root,
            S.rootType[type],
            S.rootSize[size],
            S.rootVariant[variant],
            active && S.rootActiveVariant[variant],
            collapsed && S.rootCollapsed,
          )}
          href={href}
          ref={ref}
          role={role}
          style={{
            ...assignInlineVars({
              [S.rootIndentVar]: `${indentBase * indent}rem`,
            }),
            ...style,
          }}
          {...elementProps}
          aria-disabled={disabled}
          aria-invalid={invalid}
          aria-selected={selected}
        >
          {icon && <MenuIcon name={icon} type={iconType} />}

          {typeof children === 'string' ? (
            <MenuLabel>{children}</MenuLabel>
          ) : (
            children
          )}

          {description && <MenuDescription>{description}</MenuDescription>}

          {ActionComponent && (
            <MenuAction>
              <ActionComponent />
            </MenuAction>
          )}
        </a>
      );
    },
  );

MenuLink.displayName = 'MenuLink';

export default memo(MenuLink);
