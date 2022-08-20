import { assignInlineVars } from '@vanilla-extract/dynamic';

export type SizingValue = string | number;

export function formatSizing(value?: SizingValue): string | undefined {
  return (
    (typeof value === 'number' && (value <= 0 || value > 1) && `${value}px`) ||
    (typeof value === 'number' && value < 1 && `${value * 100}%`) ||
    (value as string | undefined)
  );
}

export function assignStyles(
  values: Record<string, string | undefined>,
): Record<string, string> {
  return Object.entries(values).reduce<Record<string, string>>(
    (acc, [key, val]) =>
      val == null
        ? acc
        : {
            ...acc,
            [key]: val,
          },
    {},
  );
}

export function assignStyleVariables(
  values: Record<string, string | undefined>,
): Record<string, string> {
  return assignInlineVars(assignStyles(values));
}
