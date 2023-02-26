import { spacing, vars } from '@seed-ui/styles';
import { createVar, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

/**
 *  Root style
 */

export const rootIndentVar = createVar('menu-title-indent');

export const root = recipe({
  base: {
    position: 'relative',
    flex: 1,
    display: 'grid',
    gridTemplateAreas: `
      "icon label action"
      "icon description action"
    `,
    gridTemplateRows: 'max-content max-content',
    alignItems: 'center',
    alignContent: 'center',
    fontFamily: vars.fontFamily.secondary,
    ...vars.typography.textMd.secondary,
    textDecoration: 'none',
    outline: 0,
    transition: vars.transition.base,
    cursor: 'pointer',

    selectors: {
      '&:before': {
        content: '',
        height: '100%',
        width: rootIndentVar,
        lineHeight: 0,
      },

      '&[aria-disabled="true"]': {
        color: vars.color.neutral200,
        pointerEvents: 'none',
      },
    },
  },

  variants: {
    type: {
      horizontal: {
        gridTemplateColumns: 'max-content max-content max-content',
        justifyContent: 'center',
        minWidth: 'auto !important',
        paddingLeft: '1rem',
        paddingRight: '1rem',

        selectors: {
          '&:after': {
            content: '',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: spacing[0.5],
            width: '100%',
            borderRadius: vars.borderRadius.full,
            background: 'transparent',
            transition: vars.transition.base,
          },
        },
      },

      vertical: {
        gridTemplateColumns: 'max-content 1fr max-content',

        selectors: {
          '&:after': {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: spacing[0.5],
            borderRadius: vars.borderRadius.full,
            background: 'transparent',
            transition: vars.transition.base,
          },
        },
      },

      inline: {
        gridTemplateColumns: 'max-content 1fr max-content',

        selectors: {
          '&:after': {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: spacing[0.5],
            borderRadius: vars.borderRadius.full,
            background: 'transparent',
            transition: vars.transition.base,
          },
        },
      },
    },

    size: {
      sm: {
        minWidth: '7rem',
        minHeight: '2.25rem',
        padding: `${spacing[0.5]} ${spacing[1.5]}`,
      },

      md: {
        minWidth: '8rem',
        minHeight: '2.625rem',
        padding: `${spacing[1]} ${spacing[2]}`,
      },

      lg: {
        minWidth: '9rem',
        minHeight: '3rem',
        padding: `${spacing[1]} ${spacing[2.5]}`,
      },
    },

    variant: {
      primary: {
        color: vars.color.neutral900,
      },

      secondary: {
        color: vars.color.neutral900,
      },

      dark: {
        color: vars.color.white,
      },
    },

    collapsed: {
      true: {
        gridTemplateAreas: `
           "icon"
           "label"
        `,
        gridTemplateColumns: 'auto',
        minWidth: 0,
        minHeight: '3rem',
        justifyItems: 'center',
        ...vars.typography.caption,
        padding: `${spacing[1]} ${spacing[2]}`,

        selectors: {
          '&:after': {
            color: 'transparent',
          },
        },
      },
    },

    active: {
      true: {},
    },

    selected: {
      true: {
        ...vars.typography.bold,
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: 'primary',
        selected: true,
      },
      style: {
        selectors: {
          '&:after': {
            background: vars.color.secondary500,
          },
        },
      },
    },

    {
      variants: {
        variant: 'secondary',
        selected: true,
      },

      style: {
        background: vars.color.dark50,
      },
    },

    {
      variants: {
        variant: 'dark',
        selected: true,
      },
      style: {
        background: vars.color.secondary600,
      },
    },

    {
      variants: {
        variant: 'primary',
        active: true,
      },
      style: {
        background: vars.color.dark100,
      },
    },

    {
      variants: {
        variant: 'secondary',
        active: true,
      },
      style: {
        background: vars.color.dark100,
      },
    },

    {
      variants: {
        variant: 'dark',
        active: true,
      },
      style: {
        background: vars.color.secondary500,
      },
    },

    {
      variants: {
        variant: 'primary',
        collapsed: true,
      },
      style: {
        color: vars.color.neutral500,
      },
    },

    {
      variants: {
        variant: 'secondary',
        collapsed: true,
      },
      style: {
        color: vars.color.neutral500,
      },
    },

    {
      variants: {
        variant: 'primary',
        collapsed: true,
        selected: true,
      },
      style: {
        color: vars.color.secondary500,

        selectors: {
          '&:after': {
            background: 'transparent',
          },
        },
      },
    },
  ],
});

globalStyle(
  `.${
    root({ collapsed: true }).split(' ')[1]
  } > i, .${root()}[aria-disabled="true"] > i`,
  {
    color: 'currentColor',
  },
);
