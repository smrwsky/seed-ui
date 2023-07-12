import { atoms } from '@seed-ui/styles';
import { capitalize } from 'lodash';
import { Fragment } from 'react';

import { Icon } from '../Icon';
import { ListItem } from '../ListItem';
import { Marker } from '../Marker';
import { Title } from '../Title';

import UList, {
  UListProps,
  UListFontFamily,
  UListSize,
  UListType,
  UListVariant,
} from './UList';

const types: UListType[] = ['disc', 'dash', 'none'];

const fontFamilies: UListFontFamily[] = ['primary', 'secondary'];

const sizes: UListSize[] = ['sm', 'md'];

const variants: UListVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
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
  title: 'Typography/UList',
  component: UList,
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

export function Types(args: UListProps): JSX.Element {
  return (
    <>
      {types.map((type, i) => (
        <Fragment key={i}>
          <Title className={atoms({ mt: i > 0 ? 8 : 0 })} size="xs">
            {capitalize(type)}
          </Title>

          <UList {...args} className={atoms({ mt: 3 })} type={type}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </UList>
        </Fragment>
      ))}
    </>
  );
}

export function FontFamilies(args: UListProps): JSX.Element {
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

          <UList {...args} className={atoms({ mt: 3 })} fontFamily={fontFamily}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </UList>
        </Fragment>
      ))}
    </>
  );
}

export function Sizes(args: UListProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Fragment key={i}>
          <Title className={atoms({ mt: i > 0 ? 8 : 0 })} size="xs">
            {capitalize(size)}
          </Title>

          <UList {...args} className={atoms({ mt: 3 })} size={size}>
            {listItems.map((val, j) => (
              <ListItem key={j}>{val}</ListItem>
            ))}
          </UList>
        </Fragment>
      ))}
    </>
  );
}

export function Variants(args: UListProps): JSX.Element {
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

          <UList
            {...args}
            className={atoms({ mt: 3 })}
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

export function CustomMarker(args: UListProps): JSX.Element {
  return (
    <UList {...args} type="none">
      {listItems.map((val, idx) => (
        <ListItem key={idx}>
          <Marker>
            <Icon color="primary500" name="user" type="solid" />
          </Marker>
          {val}
        </ListItem>
      ))}
    </UList>
  );
}