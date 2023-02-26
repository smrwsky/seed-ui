import { ThemeProvider } from '@seed-ui/styles';
import {
  act,
  fireEvent,
  render as renderTest,
  RenderOptions,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { configureAxe } from 'jest-axe';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';

import '@testing-library/jest-dom/extend-expect';

export type RenderFn<T = unknown> = (
  component: ReactElement,
  ...rest: never[]
) => T;

const WithProviders: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => <ThemeProvider>{children}</ThemeProvider>;

export const render: RenderFn<RenderResult> = (
  component,
  options: RenderOptions,
) => renderTest(component, { wrapper: WithProviders, ...options });

export const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

export { act, fireEvent, renderHook, userEvent, waitFor };
