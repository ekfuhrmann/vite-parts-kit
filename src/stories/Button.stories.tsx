import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';
import * as Icons from '../components/Icons';

// NOTE: this is strictly a sample `stories.tsx`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

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

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    startIcon: iconOptions,
    endIcon: iconOptions,
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
  variant: 'primary',
  size: 'md',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Button',
  variant: 'outlined',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};

export const Subtle = Template.bind({});
Subtle.args = {
  children: 'Button',
  variant: 'subtle',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Button',
  variant: 'link',
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Button',
  variant: 'destructive',
};

export const DestructiveOutlined = Template.bind({});
DestructiveOutlined.args = {
  children: 'Button',
  variant: 'destructive-outlined',
};
