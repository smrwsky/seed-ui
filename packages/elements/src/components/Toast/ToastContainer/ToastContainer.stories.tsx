import React from 'react';
import { capitalize } from 'lodash';
import { atoms } from '@seed-ui/styles';
import { Box, Flex } from '@seed-ui/flexbox';

import Link from '../../Link';
import Toast from '../index';
import Button from '../../Button';

import docs from './ToastContainer.docs.mdx';
import ToastContainer, { ToastContainerProps } from './ToastContainer';

const placements = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export default {
  title: 'Feedback/ToastContainer',
  component: ToastContainer,
  parameters: {
    docs: { page: docs },
  },
};

export function Base(args: ToastContainerProps): JSX.Element {
  return (
    <div style={{ minHeight: '50vh' }}>
      <ToastContainer {...args} className={atoms({ p: 3 })}>
        <Toast>
          This is toast message - <Link href="#">Check this out</Link>
        </Toast>

        <Toast>
          This is toast message - <Link href="#">Check this out</Link>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export function Placement(args: ToastContainerProps): JSX.Element {
  const [placement, setPlacement] =
    React.useState<ToastContainerProps['placement']>('top-right');

  function handleChangePosition(e: React.MouseEvent<HTMLButtonElement>) {
    setPlacement(e.currentTarget.value as ToastContainerProps['placement']);
  }

  return (
    <div style={{ minHeight: '50vh' }}>
      <Flex>
        {placements.map((p, i) => (
          <Box key={p} ml={i && 2}>
            <Button
              onClick={handleChangePosition}
              value={p}
              variant={p === placement ? 'secondary' : 'outline-secondary'}
            >
              {capitalize(p)}
            </Button>
          </Box>
        ))}
      </Flex>

      <ToastContainer
        {...args}
        className={atoms({ p: 3 })}
        placement={placement}
      >
        <Toast>
          This is toast message - <Link href="#">Check this out</Link>
        </Toast>

        <Toast>
          This is toast message - <Link href="#">Check this out</Link>
        </Toast>
      </ToastContainer>
    </div>
  );
}
