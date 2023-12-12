'use client';

import { IconProps } from '../../Icon';
import { Atoms, atoms, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useContext,
} from 'react';

import { MenuSize, MenuVariant } from '../Menu.types';
import { MenuContext } from '../Menu.context';
import { getNextItem, getPrevItem } from '../../../utils/list-navigation';

export interface MenuButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  disabled?: boolean;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: string;
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

const rootVariantStyle: Record<MenuVariant, Atoms> = {
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

const rootSelectedVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {},
  secondary: {
    bg: {
      default: 'primary100',
      hover: 'primary200',
      active: 'primary300',
      disabled: 'transparent',
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

const iconVariantStyle: Record<MenuVariant, Atoms> = {
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

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, disabled, selected, startIcon, endIcon, ...props }, ref) => {
    const { collapsed, indent, menuRef, size, variant } =
      useContext(MenuContext);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (!menuRef.current) {
          return;
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          e.stopPropagation();
          const item = getPrevItem(menuRef, e.currentTarget);
          item?.focus();
        }

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          e.stopPropagation();
          const item = getNextItem(menuRef, e.currentTarget);
          item?.focus();
        }
      },
      [menuRef],
    );

    return (
      <button
        ref={ref}
        className={cn(
          atoms({
            position: 'relative',
            flex: 1,
            display: 'flex',
            borderRadius: 'md',
            alignItems: 'center',
            transition: 'base',
            textAlign: 'start',
            mx: 1,
            my: 0.5,
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
              ]
            : [
                rootSizeStyle[size],
                atoms({
                  ...rootVariantStyle[variant],
                  ...(selected && rootSelectedVariantStyle[variant]),
                }),
              ],
        )}
        disabled={disabled}
        role="menuitem"
        onKeyDown={handleKeyDown}
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
                      ...(selected &&
                        iconCollapsedSelectedVariantStyle[variant]),
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
                    flex: 1,
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

        {variant === 'primary' && (
          <span
            className={atoms({
              position: 'absolute',
              left: '-1',
              top: 1,
              bottom: 1,
              display: 'block',
              width: 1,
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

export default memo(MenuButton);
