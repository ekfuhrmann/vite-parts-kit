import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  variant: "primary",
  size: "md",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Button",
  variant: "outlined",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  variant: "secondary",
};

export const Subtle = Template.bind({});
Subtle.args = {
  label: "Button",
  variant: "subtle",
};

export const Link = Template.bind({});
Link.args = {
  label: "Button",
  variant: "link",
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: "Button",
  variant: "destructive",
};

export const DestructiveOutlined = Template.bind({});
DestructiveOutlined.args = {
  label: "Button",
  variant: "destructive-outlined",
};
