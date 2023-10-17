import { ThemeProvider } from '@seed-ui/react';
import {
  act,
  cleanup,
  fireEvent,
  RenderOptions,
  RenderResult,
  render as renderTest,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { configureAxe } from 'jest-axe';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';

import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';

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

// Mock window.HTMLElement.prototype.scrollIntoView to prevent test errors
window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Increase the default timeout for tests to 30 seconds.
jest.setTimeout(30000);

export {
  act,
  cleanup,
  fireEvent,
  renderHook,
  screen,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
};
