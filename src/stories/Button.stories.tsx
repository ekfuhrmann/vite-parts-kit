import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';
import * as Icons from '../components/Icons';
import { ArrowRightIcon } from '../components/Icons';

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
 * Buttons represents a clickable element that the user can interact with.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Buttons',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    startIcon: iconOptions,
    endIcon: iconOptions,
  },
  args: {
    children: 'Label',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const DestructiveOutlined: Story = {
  args: {
    variant: 'destructive-outlined',
  },
};

export const WithIcons: Story = {
  name: 'w/ Icons',
  args: {
    endIcon: <ArrowRightIcon />,
  },
};
