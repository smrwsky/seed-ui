import { atoms } from '@seed-ui/styles';

import { Link } from '../Link';

import Toast, { ToastProps } from './Toast';

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
  args: {
    children: (
      <>
        This is a toast message - <Link href="#">Check this out</Link>
      </>
    ),
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
          This is {variant === 'info' ? 'an' : 'a'} message -{' '}
          <Link href="#">Check this out</Link>
        </Toast>
      ))}
    </>
  );
}
