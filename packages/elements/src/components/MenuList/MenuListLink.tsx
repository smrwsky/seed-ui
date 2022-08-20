import React from 'react';
import cx from 'classnames';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as S from './MenuListLabel.css';
import MenuListContext from './context';

export interface MenuListLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {
  action?: React.ReactNode;
  active?: boolean;
  children?: string;
  counter?: number;
  description?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement;
  indent?: number;
  invalid?: boolean;
  selected?: boolean;
}

const INDENT_SIZE = 2; // 2rem

const MenuListLink: React.FC<MenuListLinkProps> = React.forwardRef(
  (
    {
      action,
      active,
      children,
      counter,
      description,
      disabled,
      href = '#',
      icon,
      indent = 0,
      invalid,
      role = 'menuitem',
      selected,
      style,
      ...elementProps
    },
    ref,
  ) => {
    const { collapsed, direction, size, variant } =
      React.useContext(MenuListContext);

    return (
      <a
        className={cx(
          S.root,
          S.rootDirection[direction],
          S.rootSize[size],
          S.rootVariant[variant],
          active && S.rootActiveVariant[variant],
        )}
        href={href}
        ref={ref}
        role={role}
        style={{
          ...assignInlineVars({
            [S.rootIndentVar]: `${indent * INDENT_SIZE}rem`,
          }),
          ...style,
        }}
        {...elementProps}
        aria-disabled={disabled}
        aria-invalid={invalid}
        aria-selected={selected}
      >
        {icon &&
          React.cloneElement(icon, {
            className: cx(
              S.icon,
              S.iconVariant[variant],
              collapsed && S.iconCollapsed,
              icon.props.className,
            ),
          })}

        <div className={S.labelContainer}>
          <div
            className={cx(
              S.label,
              S.labelSize[size],
              collapsed && S.labelCollapsed,
            )}
          >
            {children}
          </div>

          {description && !collapsed && (
            <div className={S.description}>{description}</div>
          )}
        </div>

        {action && !collapsed && <div className={S.action}>{action}</div>}
      </a>
    );
  },
);

MenuListLink.displayName = 'MenuListLink';

export default MenuListLink;
