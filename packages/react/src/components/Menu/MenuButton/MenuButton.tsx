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
    px: 1.5,
    p: 0.5,
  }),
  md: atoms({
    px: 2.5,
    py: 1.5,
  }),
  lg: atoms({
    px: 3.5,
    py: 2.5,
  }),
};

function rootSizeStyle(type: MenuType, size: MenuSize): string {
  return type === 'horizontal'
    ? rootHorizontalSizeStyle[size]
    : rootVerticalSizeStyle[size];
}

const rootVerticalVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: { default: 'neutral900', disabled: 'neutral300' },
    bg: {
      default: 'neutral100',
      hover: 'neutral200',
      active: 'neutral300',
      disabled: 'neutral50',
    },
  },
  secondary: {
    color: { default: 'neutral900', disabled: 'neutral300' },
    bg: { hover: 'neutral100', active: 'neutral200', disabled: 'transparent' },
  },
  dark: {
    color: { default: 'white', disabled: 'light400' },
    bg: { hover: 'light300', active: 'light400', disabled: 'transparent' },
  },
};

const rootHorizontalVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: { default: 'neutral900', disabled: 'neutral300' },
    bg: { hover: 'neutral100', active: 'neutral200', disabled: 'transparent' },
  },
  secondary: {
    color: { default: 'neutral900', disabled: 'neutral300' },
    bg: { hover: 'neutral100', active: 'neutral200', disabled: 'transparent' },
  },
  dark: {
    color: { default: 'white', disabled: 'light400' },
    bg: { hover: 'light300', active: 'light400', disabled: 'transparent' },
  },
};

const rootVariantStyle = (type: MenuType, variant: MenuVariant): Atoms =>
  type === 'horizontal'
    ? rootHorizontalVariantStyle[variant]
    : rootVerticalVariantStyle[variant];

const rootVerticalSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: { default: 'primary500', disabled: 'neutral300' },
    bg: {
      default: 'primary100',
      hover: 'primary200',
      active: 'primary300',
      disabled: 'neutral50',
    },
  },
  secondary: {
    color: { default: 'primary500', disabled: 'neutral300' },
    bg: {
      default: 'primary100',
      hover: 'primary200',
      active: 'primary300',
      disabled: 'neutral50',
    },
  },
  dark: {
    color: { default: 'white', disabled: 'light400' },
    bg: {
      default: 'primary500',
      hover: 'primary400',
      active: 'primary300',
      disabled: 'transparent',
    },
  },
};

const rootHorizontalSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: { default: 'neutral900', disabled: 'neutral300' },
  },
  secondary: {
    color: { default: 'primary500', disabled: 'neutral300' },
  },
  dark: {
    color: { default: 'white', disabled: 'light400' },
    bg: {
      default: 'primary500',
      hover: 'primary400',
      active: 'primary300',
      disabled: 'transparent',
    },
  },
};

const rootSelectedStyle = (type: MenuType, variant: MenuVariant): Atoms =>
  type === 'horizontal'
    ? rootHorizontalSelectedVariantStyle[variant]
    : rootVerticalSelectedVariantStyle[variant];

const rootCollapsedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: { default: 'neutral500', disabled: 'neutral300' },
    bg: { hover: 'neutral100', active: 'neutral200', disabled: 'transparent' },
  },
  secondary: {
    color: { default: 'neutral500', disabled: 'neutral300' },
    bg: { hover: 'neutral100', active: 'neutral200', disabled: 'transparent' },
  },
  dark: {
    color: { default: 'white', disabled: 'light400' },
    bg: { hover: 'light300', active: 'light400', disabled: 'transparent' },
  },
};

const rootCollapsedSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    color: { default: 'primary500', disabled: 'neutral300' },
    bg: {
      default: 'primary100',
      hover: 'primary200',
      active: 'primary300',
      disabled: 'transparent',
    },
  },
  secondary: {
    color: { default: 'primary500', disabled: 'neutral300' },
  },
  dark: {
    color: { default: 'white', disabled: 'light400' },
    bg: {
      default: 'primary500',
      hover: 'primary400',
      active: 'primary300',
      disabled: 'transparent',
    },
  },
};

const iconVerticalVariantStyle: Record<MenuVariant, Atoms> = {
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

const iconHorizontalVariantStyle: Record<MenuVariant, Atoms> = {
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

const iconVariantStyle = (type: MenuType, variant: MenuVariant): Atoms =>
  type === 'horizontal'
    ? iconHorizontalVariantStyle[variant]
    : iconVerticalVariantStyle[variant];

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

const iconCollapsedSelectedVariantStyle: Record<MenuVariant, Atoms> = {
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
                ...(selected && rootCollapsedSelectedVariantStyle[variant]),
              }),
              rootCollapsedTypeStyle(type),
            ]
          : [
              rootTypeStyle(type),
              rootSizeStyle(type, size),
              atoms({
                ...rootVariantStyle(type, variant),
                ...(selected && rootSelectedStyle(type, variant)),
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
                    ...(selected && iconCollapsedSelectedVariantStyle[variant]),
                    ...(disabled && iconDisabledVariantStyle),
                  }),
                ]
              : [
                  atoms({
                    fontSize: 'xl',
                    mx: 1,
                  }),
                  atoms({
                    ...iconVariantStyle(type, variant),
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
