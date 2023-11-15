'use client';

import { Atoms, atoms, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import React, { cloneElement, forwardRef, isValidElement, memo } from 'react';

import { IconProps } from '../../Icon';
import { MenuSize, MenuType, MenuVariant } from '../types';

export interface MenuLinkProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  active: boolean;
  children: string;
  collapsed: boolean;
  disabled?: boolean;
  indent?: number;
  selected?: boolean;
  size: MenuSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  type: MenuType;
  variant: MenuVariant;
}

const INDENT_BASE = 1.625;

const rootTypeStyle = (type: MenuType) =>
  type === 'horizontal'
    ? atoms({ justifyContent: 'center', mx: 0.5, my: 1 })
    : atoms({ mx: 1, my: 0.5 });

const rootCollapsedTypeStyle = (type: MenuType) =>
  type === 'horizontal' ? atoms({ mx: 0.5, my: 1 }) : atoms({ mx: 1, my: 0.5 });

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
    px: 0,
    py: 0.5,
  }),
  md: atoms({
    py: 0.5,
    px: 2.5,
  }),
  lg: atoms({
    py: 1.5,
    px: 3.5,
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
    color: 'neutral500',
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

const rootCollapsedSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'primary500',
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
    color: 'neutral900',
  },
  dark: {
    color: 'white',
  },
};

const iconSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: 'primary500',
    bg: 'primary50',
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
  ) => (
    <button
      className={cn(
        atoms({
          position: 'relative',
          flex: 1,
          display: 'flex',
          borderRadius: 'md',
          alignItems: 'center',
          transition: 'base',
          textAlign: 'start',
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
                ...(active && rootActiveVariantStyle[variant]),
                ...(selected && rootCollapsedSelectedVariantStyle[variant]),
                ...(disabled && rootDisabledVariantStyle[variant]),
              }),
              rootCollapsedTypeStyle(type),
            ]
          : [
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
                    mx: 1,
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
            display: 'block',
          }),
          textTruncate,
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
                  flex: type !== 'horizontal' ? 1 : undefined,
                  fontSize: 'md',
                  lineHeight: 'normal',
                  mx: 1,

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
              mx: 1,
            }),
            endIcon.props.className,
          ),
        })}

      {!collapsed && type === 'horizontal' && variant === 'primary' && (
        <span
          className={atoms({
            position: 'absolute',
            bottom: '-1.5',
            left: 0,
            right: 0,
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
  ),
);

MenuButton.displayName = 'MenuButton';

export default memo(MenuButton);
