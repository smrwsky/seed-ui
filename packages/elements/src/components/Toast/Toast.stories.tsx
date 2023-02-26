import { atoms } from '@seed-ui/styles';

import { Link } from '../Link';

import Toast, { ToastProps } from './Toast';
import docs from './Toast.docs.mdx';

const variants: ToastProps['variant'][] = [
  'info',
  'success',
  'warning',
  'danger',
  'light',
];

export default {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: (
        <>
          This is toast message - <Link href="#">Check this out</Link>
        </>
      ),
    },
  },
};

export function Base(args: ToastProps): JSX.Element {
  return <Toast {...args} />;
}

export function Title(args: ToastProps): JSX.Element {
  return <Toast {...args} title="Title" />;
}

export function Variants(args: ToastProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Toast {...args} className={atoms({ mb: 2 })} key={i} variant={variant}>
          This is {variant} message - <Link href="#">Check this out</Link>
        </Toast>
      ))}
    </>
  );
}
