import { Atoms, atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
} from 'react';

import { IconProps } from '../../Icon';
import { MenuSize, MenuType, MenuVariant } from '../Menu.types';

export interface MenuLinkProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  active: boolean;
  collapsed: boolean;
  disabled?: boolean;
  indent?: number;
  selected?: boolean;
  size: MenuSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  type: MenuType;
  variant: MenuVariant;
}

const INDENT_BASE = 1.625;

const rootTypeStyle = (type: MenuType) =>
  type !== 'horizontal'
    ? atoms({ borderRadius: 'md', mx: 1, my: 0.5 })
    : undefined;

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

const rootVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral900',
    bg: { hover: 'dark50' },
  },
  secondary: {
    color: 'neutral900',
    bg: { hover: 'dark50' },
  },
  dark: {
    color: 'white',
    bg: { hover: 'light200' },
  },
};

const rootActiveVariantStyle: Record<MenuVariant, Atoms> = {
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

const rootVerticalSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral900',
    bg: 'primary50',
  },
  secondary: {
    color: 'primary500',
  },
  dark: {
    color: 'white',
    bg: 'primary500',
  },
};

const rootHorizontalSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral900',
  },
  secondary: {
    color: 'primary500',
  },
  dark: {
    color: 'white',
    bg: 'primary500',
  },
};

const rootSelectedStyle = (type: MenuType, variant: MenuVariant): Atoms =>
  type === 'horizontal'
    ? rootHorizontalSelectedVariantStyle[variant]
    : rootVerticalSelectedVariantStyle[variant];

const rootCollapsedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral900',
    bg: { hover: 'dark50' },
  },
  secondary: {
    color: 'neutral500',
    bg: { hover: 'dark50' },
  },
  dark: {
    color: 'white',
    bg: { hover: 'light200' },
  },
};

const rootCollapsedActiveVariantStyle: Record<MenuVariant, Atoms> = {
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

const rootCollapsedSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'primary500',
  },
  secondary: {
    color: 'primary500',
  },
  dark: {
    color: 'white',
    bg: 'primary500',
  },
};

const rootDisabledVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'neutral200',
    bg: 'transparent',
  },
  secondary: {
    color: 'neutral200',
    bg: 'transparent',
  },
  dark: {
    color: 'light400',
    bg: 'transparent',
  },
};

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

const iconDisabledVariantStyle: Atoms = {
  color: 'inherit',
};

const MenuButton = forwardRef<HTMLButtonElement, MenuLinkProps>(
  (
    {
      active,
      children,
      collapsed,
      disabled,
      indent = 0,
      selected,
      startIcon,
      endIcon,
      size,
      type,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          atoms({
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            transition: 'base',
            textAlign: 'start',
            pointerEvents: disabled ? 'none' : 'auto',
          }),
          collapsed
            ? [
                atoms({
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 0,
                  transition: 'base',
                  px: 2,
                  py: 1,
                  ...rootCollapsedVariantStyle[variant],
                  ...(selected && rootCollapsedSelectedVariantStyle[variant]),
                  ...(active && rootCollapsedActiveVariantStyle[variant]),
                  ...(disabled && rootDisabledVariantStyle[variant]),
                }),
              ]
            : [
                atoms({
                  position: 'relative',
                }),
                rootTypeStyle(type),
                rootSizeStyle(type, size),
                atoms({
                  ...rootVariantStyle[variant],
                  ...(active && rootActiveVariantStyle[variant]),
                  ...(selected && rootSelectedStyle(type, variant)),
                  ...(disabled && rootDisabledVariantStyle[variant]),
                }),
              ],
        )}
        disabled={disabled}
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

        {isValidElement<IconProps>(startIcon) &&
          cloneElement(startIcon, {
            className: cn(
              collapsed
                ? [
                    atoms({
                      fontSize: '2xl',
                      mb: 1,
                    }),
                    atoms({
                      ...iconCollapsedVariantStyle[variant],
                      ...(selected && iconSelectedVariantStyle[variant]),
                      ...(disabled && iconDisabledVariantStyle),
                    }),
                  ]
                : [
                    atoms({
                      fontSize: 'xl',
                      mx: 1.5,
                    }),
                    atoms({
                      ...iconVariantStyle[variant],
                      ...(selected && iconSelectedVariantStyle[variant]),
                      ...(disabled && iconDisabledVariantStyle),
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
            collapsed
              ? [
                  atoms({
                    fontSize: 'xs',
                    letterSpacing: 'wide',
                    lineHeight: 'snug',
                    display: 'block',
                    textAlign: 'center',
                    mx: 1.5,
                  }),
                ]
              : [
                  atoms({
                    fontSize: 'md',
                    lineHeight: 'normal',
                    textOverflow: 'ellipsis',

                    ...(selected && {
                      fontWeight: 'semiBold',
                    }),
                  }),
                ],
          )}
        >
          {children}
        </span>

        {!collapsed &&
          isValidElement<IconProps>(endIcon) &&
          cloneElement(endIcon, {
            className: cn(
              atoms({
                fontSize: 'xl',
                mx: 1.5,
              }),
              endIcon.props.className,
            ),
          })}

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

              ...(selected &&
                !disabled && {
                  bg: 'primary400',
                }),
            })}
          />
        )}
      </button>
    );
  },
);

MenuButton.displayName = 'MenuButton';

export default MenuButton;
