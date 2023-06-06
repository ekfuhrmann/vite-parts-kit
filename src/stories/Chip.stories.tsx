import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../components/Chip';
import * as Icons from '../components/Icons';
import { CloseIcon } from '../components/Icons';

const IconElementMapping = Object.fromEntries(
  Object.entries(Icons).map(([name, Component]) => [name, <Component />]),
);

const iconOptions = {
  options: ['No Icon'].concat(Object.keys(Icons)),
  mapping: {
    'No Icon': undefined,
    ...IconElementMapping,
  },
};

/**
 * Chips represent a compact and visually distinctive element used to display small units of information or perform specific actions.
 */
const meta: Meta<typeof Chip> = {
  title: 'Components/Chips',
  tags: ['autodocs'],
  component: Chip,
  argTypes: {
    startIcon: iconOptions,
    endIcon: iconOptions,
  },
  args: {
    children: 'Label',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const WithIcons: Story = {
  name: 'w/ Icons',
  args: {
    endIcon: <CloseIcon />,
  },
};
