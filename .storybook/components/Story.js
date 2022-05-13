import React from 'react';
import { Story as StorybookStory, Canvas } from '@storybook/addon-docs/blocks';
import { GlobalStyle } from '@seed-ui/styles';
import * as S from './Story.css';

export const Story = ({ withToolbar = true, ...props }) => (
  <Canvas withToolbar={withToolbar}>
    <GlobalStyle />
    <div className={S.root}>
      <StorybookStory {...props} />
    </div>
  </Canvas>
);
