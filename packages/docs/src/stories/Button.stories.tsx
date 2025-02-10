import { Button, ButtonProps } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Send",
    variant:'primary',
    size:'md'
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: { 
        type: "inline-radio" 
    },
    },
    disabled:{
        control:{
            type: "boolean" 
        }
    }
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
  },
};
