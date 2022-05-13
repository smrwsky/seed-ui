import React from 'react';

import MenuItem, { MenuItemProps } from '../MenuItem';

export type OptionProps = MenuItemProps & {
  value?: unknown;
};

function Option({
  children,
  value,
  ...elementProps
}: OptionProps): JSX.Element {
  return (
    <MenuItem role="option" {...elementProps}>
      {children}
    </MenuItem>
  );
}

export default Option;
