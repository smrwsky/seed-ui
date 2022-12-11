import React, { Fragment } from 'react';
import { atoms } from '@seed-ui/styles';
import { capitalize } from 'lodash';

import ListItem from '../ListItem';
import Title from '../Title';

import docs from './OList.docs.mdx';
import OList, { OListProps, OListSize, OListVariant } from './OList';

const variants: OListVariant[] = [
  'primary',
  'accent',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
];

const sizes: OListSize[] = ['sm', 'md'];

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

export function Variant(args: OListProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Fragment key={i}>
          <Title
            className={atoms({ mt: i > 0 ? 4 : 0 })}
            size="xs"
            variant={variant}
          >
            {capitalize(variant)}
          </Title>

          <OList
            {...args}
            className={atoms({ mt: 1.5 })}
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

export function Size(args: OListProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Fragment key={i}>
          <Title className={atoms({ mt: i > 0 ? 4 : 0 })} size="xs">
            {capitalize(size)}
          </Title>

          <OList {...args} className={atoms({ mt: 1.5 })} size={size}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </OList>
        </Fragment>
      ))}
    </>
  );
}

export function Serif(args: OListProps): JSX.Element {
  return (
    <OList {...args} serif>
      {listItems.map((val, idx) => (
        <ListItem key={idx}>{val}</ListItem>
      ))}
    </OList>
  );
}
