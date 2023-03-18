import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./index";
import { ButtonProps } from "./types";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme/theme";

const meta: Meta<ButtonProps> = {
  title: "core/Button",
  component: Button,
};

export default meta;

const defaultArgs: Partial<ButtonProps> = {
  children: "Button",
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Sandbox: StoryFn<ButtonProps> = Template.bind({});
Sandbox.args = defaultArgs;

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variant: "primary",
};
