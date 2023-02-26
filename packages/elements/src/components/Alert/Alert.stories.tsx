import { atoms } from '@seed-ui/styles';

import { Link } from '../Link';

import Alert, { AlertProps } from './Alert';
import docs from './Alert.docs.mdx';

const variants: AlertProps['variant'][] = [
  'info',
  'success',
  'warning',
  'danger',
];

export default {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: (
        <>
          This is danger message -{' '}
          <Link bold href="#" variant="danger">
            Check this out
          </Link>
        </>
      ),
    },
  },
};

export function Base(args: AlertProps): JSX.Element {
  return <Alert {...args} />;
}

export function Title(args: AlertProps): JSX.Element {
  return <Alert {...args} title="Error" />;
}

export function Variants(args: AlertProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Alert {...args} className={atoms({ mb: 2 })} key={i} variant={variant}>
          This is {variant} message -{' '}
          <Link bold href="#" variant={variant}>
            Check this out
          </Link>
        </Alert>
      ))}
    </>
  );
}
