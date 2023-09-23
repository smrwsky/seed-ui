import { Atoms, atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';

import { IconProps } from '../../Icon';
import { MenuContext } from '../Menu.context';
import { MenuSize, MenuType, MenuVariant } from '../Menu.types';

export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  action?: ReactNode;
  description?: string;
  disabled?: boolean;
  highlighted?: boolean;
  icon?: ReactElement;
  indent?: number;
  selected?: boolean;
}

const INDENT_BASE = 1.625;

const rootVerticalSizeStyle: Record<MenuSize, string> = {
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

const rootHorizontalSizeStyle: Record<MenuSize, string> = {
  sm: atoms({
    px: 1,
    py: 0.5,
  }),
  md: atoms({
    p: 1.5,
  }),
  lg: atoms({
    p: 2.5,
  }),
};

function rootSizeStyle(type: MenuType, size: MenuSize): string {
  return type === 'horizontal'
    ? rootHorizontalSizeStyle[size]
    : rootVerticalSizeStyle[size];
}

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
    bg: 'primary50',
  },
  secondary: {},
  dark: {
    bg: 'primary500',
  },
};

const rootHorizontalSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {},
  secondary: {},
  dark: {
    bg: 'primary500',
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

const iconDisabledVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral200',
  },
  secondary: {
    color: 'neutral200',
  },
  dark: {
    color: 'light400',
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
    color: 'neutral900',
  },
  secondary: {
    color: 'primary500',
  },
  dark: {},
};

const labelDisabledVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral200',
  },
  secondary: {
    color: 'neutral200',
  },
  dark: {
    color: 'light400',
  },
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
      action,
      disabled,
      description,
      highlighted,
      href,
      icon,
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
                  textDecoration: { default: 'none', hover: 'none' },
                  transition: 'base',
                  px: 2,
                  py: 1,
                  cursor: 'pointer',
                }),
                highlighted &&
                  !disabled &&
                  atoms({ bg: variant === 'dark' ? 'light200' : 'dark50' }),
              ]
            : [
                atoms({
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: { default: 'none', hover: 'none' },
                  transition: 'base',
                  cursor: 'pointer',
                }),
                type !== 'horizontal' &&
                  atoms({ borderRadius: 'md', mx: 1, my: 0.5 }),
                rootSizeStyle(type, size),
                atoms({
                  ...(highlighted &&
                    !disabled &&
                    rootHighlightedStyle(type, variant)),

                  ...(selected &&
                    !disabled &&
                    rootSelectedStyle(type, variant)),
                }),
              ],
          disabled && atoms({ pointerEvents: 'none' }),
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

        {isValidElement<IconProps>(icon) &&
          cloneElement(icon, {
            fontSize: collapsed ? '2xl' : 'xl',
            className: cn(
              collapsed
                ? [
                    atoms({
                      mb: 1,
                    }),
                    atoms({
                      ...iconCollapsedVariantStyle[variant],

                      ...(selected && iconSelectedVariantStyle[variant]),

                      ...(disabled && iconDisabledVariantStyle[variant]),
                    }),
                  ]
                : [
                    atoms({
                      mx: 1.5,
                    }),
                    atoms({
                      ...iconVariantStyle[variant],

                      ...(selected && iconSelectedVariantStyle[variant]),

                      ...(disabled && iconDisabledVariantStyle[variant]),
                    }),
                  ],
            ),
          })}

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

                      ...(disabled && labelDisabledVariantStyle[variant]),
                    }),
                  ]
                : [
                    atoms({
                      fontSize: 'md',
                      lineHeight: 'normal',
                      display: 'block',
                      textOverflow: 'ellipsis',

                      ...(selected &&
                        !disabled && {
                          fontWeight: 'semiBold',
                        }),
                    }),
                    atoms({
                      ...labelVariantStyle[variant],

                      ...(selected && labelSelectedVariantStyle[variant]),

                      ...(disabled && labelDisabledVariantStyle[variant]),
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
                  display: 'block',
                  fontSize: 'xs',
                  letterSpacing: 'wide',
                  lineHeight: 'snug',
                  textOverflow: 'ellipsis',
                }),

                variant === 'dark'
                  ? atoms({
                      color: 'white',

                      ...(disabled && {
                        color: 'light400',
                      }),
                    })
                  : atoms({
                      color: 'neutral500',

                      ...(disabled && {
                        color: 'neutral200',
                      }),
                    }),
              )}
            >
              {description}
            </span>
          )}
        </span>

        {!collapsed && action && (
          <span
            className={cn(
              atoms({
                display: 'block',
                lineHeight: 'none',
                overflow: 'hidden',
                mx: 1.5,
              }),
            )}
          >
            {action}
          </span>
        )}

        {!collapsed && type === 'horizontal' && variant === 'primary' && (
          <span
            className={atoms({
              position: 'absolute',
              bottom: '-0.5',
              left: 1,
              right: 1,
              display: 'block',
              height: 1,
              borderRadius: 'full',
              transition: 'base',

              ...(highlighted &&
                !disabled && {
                  bg: 'primary100',
                }),

              ...(selected &&
                !disabled && {
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
