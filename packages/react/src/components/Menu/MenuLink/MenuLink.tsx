import { Atoms, atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ComponentType,
  forwardRef,
  memo,
  useContext,
} from 'react';

import { Icon, IconType } from '../../Icon';
import { MenuContext } from '../Menu.context';
import { MenuSize, MenuType, MenuVariant } from '../Menu.types';

export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  ActionComponent?: ComponentType;
  description?: string;
  disabled?: boolean;
  highlighted?: boolean;
  icon?: string;
  iconType?: IconType;
  indent?: number;
  selected?: boolean;
}

const INDENT_BASE = 1.625;

const rootSizeStyle: Record<MenuSize, string> = {
  sm: atoms({
    minWidth: 36,
    px: 1,
    py: 0.5,
  }),
  md: atoms({
    minWidth: 40,
    p: 1.5,
  }),
  lg: atoms({
    minWidth: 44,
    p: 2.5,
  }),
};

const rootVerticalHighlightedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    bg: 'dark50',
  },
  secondary: {
    bg: 'dark50',
  },
  dark: {
    bg: 'light200',
  },
};

const rootHorizontalHighlightedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {},
  secondary: {
    bg: 'dark50',
  },
  dark: {
    bg: 'light200',
  },
};

const rootHighlightedStyle = (type: MenuType, variant: MenuVariant): Atoms =>
  type === 'horizontal'
    ? rootHorizontalHighlightedVariantStyle[variant]
    : rootVerticalHighlightedVariantStyle[variant];

const rootVerticalSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'primary500',
    bg: 'primary50',
  },
  secondary: {
    color: 'primary500',
  },
  dark: {
    bg: 'primary400',
  },
};

const rootHorizontalSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {},
  secondary: {},
  dark: {
    bg: 'primary400',
  },
};

const rootSelectedStyle = (type: MenuType, variant: MenuVariant): Atoms =>
  type === 'horizontal'
    ? rootHorizontalSelectedVariantStyle[variant]
    : rootVerticalSelectedVariantStyle[variant];

const iconVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral500',
  },
  secondary: {
    color: 'neutral500',
  },
  dark: {
    color: 'white',
  },
};

const iconCollapsedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral900',
  },
  secondary: {
    color: 'neutral500',
  },
  dark: {
    color: 'white',
  },
};

const iconSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'primary500',
  },
  secondary: {
    color: 'primary500',
  },
  dark: {
    color: 'white',
  },
};

const labelVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral900',
  },
  secondary: {
    color: 'neutral900',
  },
  dark: {
    color: 'white',
  },
};

const labelSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'primary500',
  },
  secondary: {
    color: 'primary500',
  },
  dark: {},
};

const labelCollapsedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral900',
  },
  secondary: {
    color: 'neutral500',
  },
  dark: {
    color: 'white',
  },
};

let MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  (
    {
      ActionComponent,
      disabled,
      description,
      highlighted,
      href,
      icon,
      iconType,
      indent = 0,
      selected,
      children,
      ...props
    },
    ref,
  ) => {
    const { collapsed, type, size, variant } = useContext(MenuContext);

    return (
      <a
        aria-disabled={disabled}
        className={cn(
          collapsed
            ? [
                atoms({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 0,
                  transition: 'base',
                  px: 2,
                  py: 1,
                  cursor: 'pointer',
                }),
                highlighted &&
                  atoms({ bg: variant === 'dark' ? 'light200' : 'dark50' }),
              ]
            : [
                atoms({
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'base',
                  cursor: 'pointer',
                }),
                type !== 'horizontal' &&
                  atoms({ borderRadius: 'md', mx: 1, my: 0.5 }),
                rootSizeStyle[size],
                atoms({
                  ...(highlighted && rootHighlightedStyle(type, variant)),
                  ...(selected && rootSelectedStyle(type, variant)),
                }),
              ],
        )}
        href={href}
        ref={ref}
        role="menuitem"
        {...props}
      >
        {indent > 0 && (
          <span
            className={atoms({ display: 'block' })}
            style={{ width: `${indent * INDENT_BASE}rem` }}
          />
        )}

        {icon && (
          <Icon
            className={cn(
              collapsed
                ? [
                    atoms({
                      mb: 1,
                    }),
                    atoms({
                      ...iconCollapsedVariantStyle[variant],
                      ...(selected && iconSelectedVariantStyle[variant]),
                    }),
                  ]
                : [
                    atoms({
                      mx: 1.5,
                    }),
                    atoms({
                      ...iconVariantStyle[variant],
                      ...(selected && iconSelectedVariantStyle[variant]),
                    }),
                  ],
            )}
            fontSize={collapsed ? '2xl' : 'lg'}
            name={icon}
            type={iconType}
          />
        )}

        <span
          className={cn(
            atoms({
              flex: 1,
              display: 'block',
            }),
            !collapsed && atoms({ mx: 1.5 }),
          )}
        >
          <span
            className={cn(
              collapsed
                ? [
                    atoms({
                      fontSize: 'xs',
                      letterSpacing: 'wide',
                      lineHeight: 'snug',
                      display: 'block',
                      textAlign: 'center',
                    }),
                    atoms({
                      ...labelCollapsedVariantStyle[variant],
                      ...(selected && labelSelectedVariantStyle[variant]),
                    }),
                  ]
                : [
                    atoms({
                      fontSize: 'md',
                      lineHeight: 'normal',
                      display: 'block',
                      textOverflow: 'ellipsis',
                      ...(selected && {
                        fontWeight: 'semiBold',
                      }),
                    }),
                    atoms({
                      ...labelVariantStyle[variant],
                      ...(selected && labelSelectedVariantStyle[variant]),
                    }),
                  ],
            )}
          >
            {children}
          </span>

          {!collapsed && description && (
            <span
              className={cn(
                atoms({
                  fontSize: 'xs',
                  letterSpacing: 'wide',
                  lineHeight: 'snug',
                  display: 'block',
                  textOverflow: 'ellipsis',
                }),
                variant === 'dark'
                  ? atoms({ color: 'white' })
                  : atoms({ color: 'neutral500' }),
              )}
            >
              {description}
            </span>
          )}
        </span>

        {!collapsed && ActionComponent && (
          <span
            className={cn(
              atoms({
                display: 'block',
                lineHeight: 0,
                overflow: 'hidden',
                mx: 1.5,
              }),
            )}
          >
            <ActionComponent />
          </span>
        )}

        {!collapsed && type === 'horizontal' && variant === 'primary' && (
          <span
            className={atoms({
              position: 'absolute',
              bottom: 0,
              left: 1,
              right: 1,
              display: 'block',
              height: 1,
              borderRadius: 'full',
              mb: '-0.5',
              transition: 'base',

              ...(highlighted && {
                bg: 'primary100',
              }),

              ...(selected && {
                bg: 'primary400',
              }),
            })}
          />
        )}
      </a>
    );
  },
);

MenuLink.displayName = 'MenuLink';

MenuLink = memo(MenuLink);

export { MenuLink };
