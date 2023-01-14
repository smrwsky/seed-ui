import React from 'react';
import { Story as StoryBlock, Canvas } from '@storybook/addon-docs/blocks';

const Story = ({ withToolbar = true, ...props }) => (
  <Canvas withToolbar={withToolbar}>
    <StoryBlock {...props} />
  </Canvas>
);

export default Story
