import React, { Fragment } from 'react';
import { atoms, FontFamily } from '@seed-ui/styles';
import { capitalize } from 'lodash';

import ListItem from '../ListItem';
import Title from '../Title';

import docs from './OList.docs.mdx';
import OList, { OListProps, OListSize, OListVariant } from './OList';

const fontFamilies: FontFamily[] = ['primary', 'secondary'];

const sizes: OListSize[] = ['sm', 'md'];

const variants: OListVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'alt',
  'default',
];

const listItems = [
  'Peter',
  'Louis',
  'Mag',
  'Chris',
  'Stewie',
  'Bryan',
  'Glenn',
  'Joe',
  'Cleveland',
];

export default {
  title: 'Typography/OList',
  component: OList,
  parameters: {
    docs: { page: docs },
  },
};

export function Base(args: OListProps): JSX.Element {
  return (
    <OList {...args}>
      {listItems.map((val, idx) => (
        <ListItem key={idx}>{val}</ListItem>
      ))}
    </OList>
  );
}

export function FontFamilies(args: OListProps): JSX.Element {
  return (
    <>
      {fontFamilies.map((fontFamily, i) => (
        <Fragment key={i}>
          <Title
            className={atoms({ mt: i > 0 ? 8 : 0 })}
            fontFamily={fontFamily}
            size="xs"
          >
            {capitalize(fontFamily)}
          </Title>

          <OList {...args} className={atoms({ mt: 3 })} fontFamily={fontFamily}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </OList>
        </Fragment>
      ))}
    </>
  );
}

export function Sizes(args: OListProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Fragment key={i}>
          <Title className={atoms({ mt: i > 0 ? 8 : 0 })} size="xs">
            {capitalize(size)}
          </Title>

          <OList {...args} className={atoms({ mt: 3 })} size={size}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </OList>
        </Fragment>
      ))}
    </>
  );
}

export function Variants(args: OListProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Fragment key={i}>
          <Title
            className={atoms({ mt: i > 0 ? 8 : 0 })}
            size="xs"
            variant={variant}
          >
            {capitalize(variant)}
          </Title>

          <OList
            {...args}
            className={atoms({ mt: 3 })}
            key={i}
            variant={variant}
          >
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </OList>
        </Fragment>
      ))}
    </>
  );
}
