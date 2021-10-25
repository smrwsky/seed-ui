import React from 'react';
import { Story as StorybookStory, Canvas } from '@storybook/addon-docs/blocks';
import {GlobalStyle} from "@seed-ui/styles";

export const Story = ({ withToolbar = true, ...props }) => (
    <Canvas withToolbar={withToolbar}>
        <GlobalStyle />
        <StorybookStory {...props} />
    </Canvas>
);
