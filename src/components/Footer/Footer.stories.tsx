import { Meta, StoryFn } from "@storybook/react";
import { Footer } from "./index";
import { FooterProps } from "./types";

const meta: Meta<FooterProps> = {
  title: "core/Footer",
  component: Footer,
};

export default meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Sandbox: StoryFn<FooterProps> = Template.bind({});
