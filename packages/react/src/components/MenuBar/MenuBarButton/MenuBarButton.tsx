'use client';

import { IconProps } from '../../Icon';
import { Atoms, atoms, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useContext,
} from 'react';

import { MenuBarSize, MenuBarVariant } from '../types';
import { MenuBarContext } from '../MenuBar.context';

export interface MenuButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  children: string;
  disabled?: boolean;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const rootSizeStyle: Record<MenuBarSize, string> = {
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

const rootVariantStyle: Record<MenuBarVariant, Atoms> = {
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

const rootSelectedVariantStyle: Record<MenuBarVariant, Atoms> = {
  primary: {},
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

const rootNestedVariantStyle = (variant: MenuBarVariant): Atoms =>
  variant === 'dark'
    ? {
        color: { default: 'white', disabled: 'light400' },
        bg: { hover: 'light300', active: 'light400', disabled: 'transparent' },
      }
    : {
        color: { default: 'neutral900', disabled: 'neutral300' },
        bg: {
          hover: 'neutral100',
          active: 'neutral200',
          disabled: 'transparent',
        },
      };

const rootNestedSelectedVariantStyle = (variant: MenuBarVariant): Atoms =>
  variant === 'dark'
    ? {
        color: { default: 'white', disabled: 'light400' },
        bg: {
          default: 'primary500',
          hover: 'primary400',
          active: 'primary300',
          disabled: 'transparent',
        },
      }
    : {
        color: { default: 'primary500', disabled: 'neutral300' },
        bg: {
          default: 'primary100',
          hover: 'primary200',
          active: 'primary300',
          disabled: 'transparent',
        },
      };

const rootCollapsedVariantStyle: Record<MenuBarVariant, Atoms> = {
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

const rootCollapsedSelectedVariantStyle: Record<MenuBarVariant, Atoms> = {
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

const iconVariantStyle: Record<MenuBarVariant, Atoms> = {
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

const iconSelectedVariantStyle: Record<MenuBarVariant, Atoms> = {
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

const iconCollapsedVariantStyle: Record<MenuBarVariant, Atoms> = {
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

const iconCollapsedSelectedVariantStyle: Record<MenuBarVariant, Atoms> = {
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

const MenuBarButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, disabled, selected, startIcon, endIcon, ...props }, ref) => {
    const { collapsed, isNested, size, variant } = useContext(MenuBarContext);

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
          }),
          collapsed &&
            atoms({
              justifyContent: 'center',
              flexDirection: 'column',
              minWidth: 0,
              transition: 'base',
              px: 2,
              py: 1,
              mx: 0.5,
              my: 1,
              ...rootCollapsedVariantStyle[variant],
              ...(selected && rootCollapsedSelectedVariantStyle[variant]),
            }),
          !collapsed &&
            isNested && [
              atoms({
                minWidth: 36,
                px: 1,
                py: 0.5,
                mx: 1,
                my: 0.5,
                ...rootNestedVariantStyle(variant),
                ...(selected && rootNestedSelectedVariantStyle(variant)),
              }),
            ],
          !collapsed &&
            !isNested && [
              atoms({
                justifyContent: 'center',
                mx: 0.5,
                my: 1,
                ...rootVariantStyle[variant],
                ...(selected && rootSelectedVariantStyle[variant]),
              }),
              rootSizeStyle[size],
            ],
        )}
        disabled={disabled}
        role="menuitem"
        {...props}
      >
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
                    flex: isNested ? 1 : undefined,
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

        {variant === 'primary' && !isNested && (
          <span
            className={atoms({
              position: 'absolute',
              bottom: '-1',
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

MenuBarButton.displayName = 'MenuButton';

export default memo(MenuBarButton);
