import type { Meta, StoryObj } from '@storybook/react';

import { ButtonIcon } from '../components/Button';
import * as Icons from '../components/Icons';
import { AddIcon } from '../components/Icons';

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
 * Similar to Buttons, Button Icons represents a clickable element that the user can interact with that only has an icon visible.
 */
const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/Buttons/Icon Buttons',
  tags: ['autodocs'],
  component: ButtonIcon,
  argTypes: {
    icon: iconOptions,
  },
  args: {
    icon: <AddIcon />,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

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
