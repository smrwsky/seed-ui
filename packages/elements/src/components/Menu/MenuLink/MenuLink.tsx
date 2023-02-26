import { IconType } from '@seed-ui/icons';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import cx from 'classnames';
import {
  AnchorHTMLAttributes,
  ComponentType,
  FC,
  forwardRef,
  memo,
  RefAttributes,
  useContext,
} from 'react';

import { MenuAction } from '../MenuAction';
import { MenuDescription } from '../MenuDescription';
import { MenuIcon } from '../MenuIcon';
import { MenuLabel } from '../MenuLabel';
import { MenuContext } from '../context';

import * as S from './MenuLink.css';

export interface MenuLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    RefAttributes<HTMLAnchorElement> {
  ActionComponent?: ComponentType;
  active?: boolean;
  description?: string;
  disabled?: boolean;
  icon?: string;
  iconType?: IconType;
  indent?: number;
  selected?: boolean;
}

const INDENT_BASE = 1.75;

const MenuLink: FC<MenuLinkProps> = forwardRef(
  (
    {
      ActionComponent,
      active,
      disabled,
      description,
      href,
      icon,
      iconType,
      indent = 0,
      selected,
      style,
      children,
      ...elementProps
    },
    ref,
  ) => {
    const { collapsed, type, size, variant } = useContext(MenuContext);

    return (
      <a
        aria-disabled={disabled}
        className={cx(
          S.root({
            type,
            size,
            variant,
            collapsed,
            active,
            selected,
          }),
        )}
        href={href}
        ref={ref}
        role="menuitem"
        style={{
          ...assignInlineVars({
            [S.rootIndentVar]: `${INDENT_BASE * indent}rem`,
          }),
          ...style,
        }}
        {...elementProps}
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
