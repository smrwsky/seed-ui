import React from 'react';
import { Story as StorybookStory, Canvas } from '@storybook/addon-docs/blocks';
import * as S from './Story.css';

export const Story = ({ withToolbar = true, ...props }) => (
  <Canvas withToolbar={withToolbar}>
      <div className={S.root}>
        <StorybookStory {...props} />
      </div>
  </Canvas>
);
