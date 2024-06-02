import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {mainMenu} from './mainMenu';

const meta: Meta<typeof mainMenu> = {
  component: mainMenu,
};

export default meta;

type Story = StoryObj<typeof mainMenu>;

export const Basic: Story = {args: {}};
