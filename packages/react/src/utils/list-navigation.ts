import React from 'react';

function getItems(menuRef: React.RefObject<HTMLElement>) {
  const allItems = menuRef.current?.querySelectorAll<HTMLButtonElement>(
    '[role="menuitem"]',
  ) as NodeListOf<HTMLButtonElement>;

  return allItems ? Array.from(allItems).filter((item) => !item.disabled) : [];
}

export function getNextItem(
  menuRef: React.RefObject<HTMLElement>,
  current: HTMLButtonElement,
): HTMLButtonElement | undefined {
  const items = getItems(menuRef);
  const currIdx = items.findIndex((item) => item === current);
  const nextIdx = currIdx === items.length - 1 ? 0 : currIdx + 1;
  return items[nextIdx];
}

export function getPrevItem(
  menuRef: React.RefObject<HTMLElement>,
  current: HTMLButtonElement,
): HTMLButtonElement | undefined {
  const items = getItems(menuRef);
  const currIdx = items.findIndex((item) => item === current);
  const prevIdx = currIdx === 0 ? items.length - 1 : currIdx - 1;
  return items[prevIdx];
}

export function getFirstItem(
  menuRef: React.RefObject<HTMLElement>,
): HTMLButtonElement | undefined {
  const items = getItems(menuRef);
  return items[0];
}

export function getLastItem(
  menuRef: React.RefObject<HTMLElement>,
): HTMLButtonElement | undefined {
  const items = getItems(menuRef);
  return items[items.length - 1];
}
