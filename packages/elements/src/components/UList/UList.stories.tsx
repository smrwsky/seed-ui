import React, { Fragment } from 'react';
import { atoms } from '@seed-ui/styles';
import { capitalize } from 'lodash';
import { Icon } from '@seed-ui/icons';

import ListItem from '../ListItem';
import Title from '../Title';
import Marker from '../Marker';

import docs from './UList.docs.mdx';
import UList, { UListProps, UListSize, UListType, UListVariant } from './UList';

const types: UListType[] = ['disc', 'dash', 'none'];

const variants: UListVariant[] = [
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

const sizes: UListSize[] = ['sm', 'md'];

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
  title: 'Typography/UList',
  component: UList,
  parameters: {
    docs: { page: docs },
  },
};

export function Base(args: UListProps): JSX.Element {
  return (
    <UList {...args}>
      {listItems.map((val, idx) => (
        <ListItem key={idx}>{val}</ListItem>
      ))}
    </UList>
  );
}

export function Type(args: UListProps): JSX.Element {
  return (
    <>
      {types.map((type, i) => (
        <Fragment key={i}>
          <Title className={atoms({ mt: i > 0 ? 4 : 0 })} size="xs">
            {capitalize(type)}
          </Title>

          <UList {...args} className={atoms({ mt: 1.5 })} type={type}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </UList>
        </Fragment>
      ))}
    </>
  );
}

export function Variant(args: UListProps): JSX.Element {
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

          <UList
            {...args}
            className={atoms({ mt: 1.5 })}
            key={i}
            variant={variant}
          >
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </UList>
        </Fragment>
      ))}
    </>
  );
}

export function Size(args: UListProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Fragment key={i}>
          <Title className={atoms({ mt: i > 0 ? 4 : 0 })} size="xs">
            {capitalize(size)}
          </Title>

          <UList {...args} className={atoms({ mt: 1.5 })} size={size}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </UList>
        </Fragment>
      ))}
    </>
  );
}

export function Serif(args: UListProps): JSX.Element {
  return (
    <UList {...args} serif>
      {listItems.map((val, idx) => (
        <ListItem key={idx}>{val}</ListItem>
      ))}
    </UList>
  );
}

export function CustomMarker(args: UListProps): JSX.Element {
  return (
    <UList {...args} type="none">
      {listItems.map((val, idx) => (
        <ListItem key={idx}>
          <Marker>
            <Icon name="user" type="solid" variant="secondary" />
          </Marker>
          {val}
        </ListItem>
      ))}
    </UList>
  );
}
