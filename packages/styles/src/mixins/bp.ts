import { StyleRule } from '@vanilla-extract/css';

import { breakpoint } from '../const';

export type Breakpoint = keyof typeof breakpoint;

function bpNext(name: Breakpoint): Breakpoint | undefined {
  const names = Object.keys(breakpoint);
  const idx = names.indexOf(name);
  return names[idx + 1] as Breakpoint | undefined;
}

function bpMin(name: Breakpoint): number {
  return breakpoint[name];
}

function bpMax(name: Breakpoint): number {
  const val = breakpoint[name];
  return val - 0.2;
}

export function bpUp(name: Breakpoint) {
  return (content: StyleRule): StyleRule => {
    const minWidth = bpMin(name);

    if (minWidth) {
      return {
        '@media': {
          [`(min-width: ${minWidth}px)`]: content,
        },
      };
    }

    return content;
  };
}

export function bpDown(name: Breakpoint) {
  return (content: StyleRule): StyleRule => {
    const next = bpNext(name);
    const maxWidth = next && bpMax(next);

    if (maxWidth) {
      return {
        '@media': {
          [`(max-width: ${maxWidth}px)`]: content,
        },
      };
    }

    return content;
  };
}

export function bpBetween(min: Breakpoint, max: Breakpoint) {
  return (content: StyleRule): StyleRule => {
    const minWidth = bpMin(min);
    const maxWidth = bpMax(max);

    return {
      '@media': {
        [`(min-width: ${minWidth}) and (max-width: ${maxWidth}px)`]: content,
      },
    };
  };
}

export function bpOnly(name: Breakpoint) {
  return (content: StyleRule): StyleRule => {
    const minWidth = bpMin(name);
    const next = bpNext(name);
    const maxWidth = next && bpMax(next);

    if (maxWidth != null) {
      return {
        '@media': {
          [`(min-width: ${minWidth}) and (max-width: ${maxWidth}px)`]: content,
        },
      };
    }

    return bpUp(name)(content);
  };
}
