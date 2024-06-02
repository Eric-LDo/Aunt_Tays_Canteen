import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {produtoMenu} from './produtoMenu';

const meta: Meta<typeof produtoMenu> = {
  component: produtoMenu,
};

export default meta;

type Story = StoryObj<typeof produtoMenu>;

export const Basic: Story = {args: {}};
